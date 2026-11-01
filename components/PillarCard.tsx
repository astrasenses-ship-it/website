import Image from "next/image";
import Link from "next/link";
import { PILLARS } from "@/lib/site";
import { Chip, Check } from "./ui";

const ICONS: Record<string, string> = {
  "01": "M7 7h10v10H7zM10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4",
  "02": "M4 5h16v14H4zM8 10l3 2-3 2M13 14h3",
  "03": "M8 3h8a1 1 0 011 1v16a1 1 0 01-1 1H8a1 1 0 01-1-1V4a1 1 0 011-1zM11 18h2",
  "04": "M7 18a4 4 0 010-8 5 5 0 019.6-1A4.5 4.5 0 0117 18zM12 11v4M10 13l2-2 2 2",
};

const THUMBS: Record<string, { src: string; alt: string; cls: string }> = {
  "01": { src: "/img/pcb-3d.jpg", alt: "3D render of the ASTRA sensor PCB", cls: "h-32 w-36 rounded-xl" },
  "03": { src: "/img/app-05.jpg", alt: "ASTRA IoT Hub app showing a live temperature chart", cls: "h-44 w-24 rounded-2xl border-2 border-ink" },
};

export function PillarCard({ p }: { p: (typeof PILLARS)[number] }) {
  return (
    <article className="card flex flex-col p-6 transition-shadow hover:shadow-md sm:p-8">
      <div className="flex items-center justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-container-hi text-cobalt">
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d={ICONS[p.n]} />
          </svg>
        </span>
        <span className="rounded-full bg-container px-3 py-1 text-xs font-semibold">Pillar {p.n}</span>
      </div>
      <h3 className="mt-5 text-xl font-semibold sm:text-2xl">{p.title}</h3>
      <p className="mt-1 font-display text-base font-semibold text-teal">{p.tagline}</p>
      {p.intro && <p className="mt-3 text-sm leading-6 text-slate-600">{p.intro}</p>}
      <div className="mt-4 flex items-center gap-5">
        <ul className="min-w-0 flex-1 space-y-2.5">
          {p.points.map((x) => <Check key={x}>{x}</Check>)}
        </ul>
        {THUMBS[p.n] && (
          <div className={`relative hidden shrink-0 overflow-hidden border border-line shadow-md sm:block ${THUMBS[p.n].cls}`}>
            <Image src={THUMBS[p.n].src} alt={THUMBS[p.n].alt} fill sizes="160px" className="object-cover object-top" />
          </div>
        )}
      </div>
      {p.stack && (
        <div className="mt-5">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-widest text-slate-500">Tools & Tech Stack</p>
          <div className="flex flex-wrap gap-1.5">{p.stack.map((s) => <Chip key={s}>{s}</Chip>)}</div>
        </div>
      )}
      <Link href="/#engage" className="mt-auto pt-6 text-sm font-semibold text-cobalt hover:text-cobalt-dark">
        {p.cta} →
      </Link>
    </article>
  );
}
