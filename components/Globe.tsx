"use client";

import createGlobe from "cobe";
import { GlobeCanvas2D } from "./GlobeCanvas2D";
import { HQ, NODES } from "@/lib/globe-data";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";

function detectWebGL() {
  const c = document.createElement("canvas");
  return !!(c.getContext("webgl2") || c.getContext("webgl"));
}
const subscribeNoop = () => () => {};

export function Globe() {
  const ref = useRef<HTMLCanvasElement>(null);
  const [initFailed, setInitFailed] = useState(false);
  const hasWebGL = useSyncExternalStore(subscribeNoop, detectWebGL, () => true);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    let globe: ReturnType<typeof createGlobe> | null = null;
    let raf = 0;
    let ro: ResizeObserver | null = null;
    let phi = 3.4;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function init() {
      const size = canvas!.offsetWidth;
      if (size === 0 || globe) return;
      try {
        // cobe multiplies width/height by devicePixelRatio itself.
        globe = createGlobe(canvas!, {
          devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
          width: size,
          height: size,
          phi,
          theta: 0.25,
          dark: 1,
          diffuse: 1.2,
          mapSamples: 16000,
          scale: 1.2,
          mapBrightness: 6,
          baseColor: [0.3, 0.36, 0.5],
          markerColor: [0.18, 0.8, 1],
          glowColor: [0.04, 0.28, 0.93],
          markers: [{ location: HQ, size: 0.08 }, ...NODES.map((l) => ({ location: l, size: 0.04 }))],
          arcs: NODES.map((to) => ({ from: HQ, to, color: [0, 0.75, 0.94] as [number, number, number] })),
          arcColor: [0, 0.75, 0.94],
          arcWidth: 0.5,
          arcHeight: 0.25,
        });
      } catch (err) {
        console.warn("ASTRA globe: WebGL unavailable, showing static fallback.", err);
        setInitFailed(true);
        return;
      }
      const tick = () => {
        if (!reduce) phi += 0.004;
        globe!.update({ phi });
        raf = requestAnimationFrame(tick);
      };
      tick();
    }

    if (!hasWebGL) return;

    if (canvas.offsetWidth > 0) {
      init();
    } else {
      ro = new ResizeObserver((entries) => {
        if (entries[0]?.contentRect.width > 0) {
          ro?.disconnect();
          init();
        }
      });
      ro.observe(canvas);
    }

    return () => {
      ro?.disconnect();
      cancelAnimationFrame(raf);
      globe?.destroy();
    };
  }, [hasWebGL]);

  if (initFailed || !hasWebGL) return <GlobeCanvas2D />;

  return (
    <div className="mx-auto aspect-square w-full max-w-[320px]">
      <canvas
        ref={ref}
        role="img"
        aria-label="Interactive globe showing live telemetry arcs from Bengaluru to connected nodes worldwide"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
