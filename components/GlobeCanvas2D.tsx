"use client";

import { useEffect, useRef } from "react";
import { HQ, NODES, type LatLon } from "@/lib/globe-data";

const RAD = Math.PI / 180;
const POINTS = 9000;
const TILT = 0.25;

type Vec = [number, number, number];

function toVec([lat, lon]: LatLon): Vec {
  const p = lat * RAD;
  const l = lon * RAD;
  return [Math.cos(p) * Math.sin(l), Math.sin(p), Math.cos(p) * Math.cos(l)];
}

/** Rotate so (lon0, TILT) faces the viewer, then orthographic-project. z > 0 means front hemisphere. */
function project(v: Vec, lon0: number): Vec {
  const c = Math.cos(-lon0);
  const s = Math.sin(-lon0);
  const x1 = v[0] * c + v[2] * s;
  const z1 = -v[0] * s + v[2] * c;
  const ct = Math.cos(TILT);
  const st = Math.sin(TILT);
  return [x1, v[1] * ct - z1 * st, v[1] * st + z1 * ct];
}

function slerp(a: Vec, b: Vec, t: number): Vec {
  const dot = Math.min(1, Math.max(-1, a[0] * b[0] + a[1] * b[1] + a[2] * b[2]));
  const w = Math.acos(dot);
  if (w < 1e-6) return a;
  const sa = Math.sin((1 - t) * w) / Math.sin(w);
  const sb = Math.sin(t * w) / Math.sin(w);
  return [a[0] * sa + b[0] * sb, a[1] * sa + b[1] * sb, a[2] * sa + b[2] * sb];
}

/** WebGL-free dotted-earth globe on a 2D canvas, using cobe's land mask (public/globe-map.png). */
export function GlobeCanvas2D() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let raf = 0;
    let cancelled = false;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let lon0 = 77 * RAD;
    const land: Vec[] = [];

    const hq = toVec(HQ);
    const arcs = NODES.map((n) => ({ end: toVec(n), pts: [] as Vec[] }));
    for (const a of arcs) {
      for (let i = 0; i <= 48; i++) {
        const t = i / 48;
        const p = slerp(hq, a.end, t);
        const lift = 1 + 0.22 * Math.sin(Math.PI * t);
        a.pts.push([p[0] * lift, p[1] * lift, p[2] * lift]);
      }
    }

    const img = new Image();
    img.src = "/globe-map.png";
    img.onload = () => {
      if (cancelled) return;
      const off = document.createElement("canvas");
      off.width = img.width;
      off.height = img.height;
      const octx = off.getContext("2d");
      if (!octx) return;
      octx.drawImage(img, 0, 0);
      const data = octx.getImageData(0, 0, off.width, off.height).data;
      const golden = Math.PI * (3 - Math.sqrt(5));
      for (let i = 0; i < POINTS; i++) {
        const y = 1 - (i / (POINTS - 1)) * 2;
        const r = Math.sqrt(1 - y * y);
        const th = golden * i;
        const x = Math.cos(th) * r;
        const z = Math.sin(th) * r;
        const lat = Math.asin(y);
        const lon = Math.atan2(x, z);
        const px = Math.min(off.width - 1, Math.floor(((lon / Math.PI + 1) / 2) * off.width));
        const py = Math.min(off.height - 1, Math.floor((0.5 - lat / Math.PI) * off.height));
        if (data[(py * off.width + px) * 4] > 100) land.push([x, y, z]);
      }
      if (reduce) draw();
    };

    function draw() {
      const size = canvas!.offsetWidth;
      if (canvas!.width !== size * dpr) {
        canvas!.width = size * dpr;
        canvas!.height = size * dpr;
      }
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx!.clearRect(0, 0, size, size);
      const cx = size / 2;
      const R = size * 0.46;

      // atmosphere glow + sphere body
      const glow = ctx!.createRadialGradient(cx, cx, R * 0.9, cx, cx, R * 1.12);
      glow.addColorStop(0, "rgba(10,71,237,0.55)");
      glow.addColorStop(1, "rgba(10,71,237,0)");
      ctx!.fillStyle = glow;
      ctx!.beginPath();
      ctx!.arc(cx, cx, R * 1.12, 0, Math.PI * 2);
      ctx!.fill();
      const body = ctx!.createRadialGradient(cx - R * 0.3, cx - R * 0.35, R * 0.1, cx, cx, R);
      body.addColorStop(0, "#16203d");
      body.addColorStop(1, "#05070f");
      ctx!.fillStyle = body;
      ctx!.beginPath();
      ctx!.arc(cx, cx, R, 0, Math.PI * 2);
      ctx!.fill();

      // land dots, shaded toward the limb
      for (const v of land) {
        const p = project(v, lon0);
        if (p[2] <= 0) continue;
        ctx!.fillStyle = `rgba(226,236,255,${0.45 + 0.55 * p[2]})`;
        ctx!.fillRect(cx + p[0] * R - 0.8, cx - p[1] * R - 0.8, 1.7, 1.7);
      }

      // arcs
      ctx!.lineWidth = 1.4;
      ctx!.strokeStyle = "#00c0f0";
      ctx!.lineCap = "round";
      for (const a of arcs) {
        ctx!.beginPath();
        let pen = false;
        for (const q of a.pts) {
          const p = project(q, lon0);
          if (p[2] <= 0) {
            pen = false;
            continue;
          }
          const X = cx + p[0] * R;
          const Y = cx - p[1] * R;
          if (pen) ctx!.lineTo(X, Y);
          else ctx!.moveTo(X, Y);
          pen = true;
        }
        ctx!.stroke();
      }

      // nodes + HQ
      ctx!.fillStyle = "#2ecdfe";
      for (const a of arcs) {
        const p = project(a.end, lon0);
        if (p[2] <= 0) continue;
        ctx!.beginPath();
        ctx!.arc(cx + p[0] * R, cx - p[1] * R, 2.8, 0, Math.PI * 2);
        ctx!.fill();
      }
      const h = project(hq, lon0);
      if (h[2] > 0) {
        const X = cx + h[0] * R;
        const Y = cx - h[1] * R;
        ctx!.fillStyle = "rgba(10,71,237,0.35)";
        ctx!.beginPath();
        ctx!.arc(X, Y, 11, 0, Math.PI * 2);
        ctx!.fill();
        ctx!.fillStyle = "#0a47ed";
        ctx!.beginPath();
        ctx!.arc(X, Y, 5, 0, Math.PI * 2);
        ctx!.fill();
        ctx!.fillStyle = "#fff";
        ctx!.beginPath();
        ctx!.arc(X, Y, 2, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    const tick = () => {
      if (!reduce) lon0 += 0.004;
      draw();
      raf = requestAnimationFrame(tick);
    };
    if (!reduce) tick();

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="mx-auto aspect-square w-full max-w-[320px]">
      <canvas
        ref={ref}
        role="img"
        aria-label="Globe showing live telemetry arcs from Bengaluru to connected nodes worldwide"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
