import Link from "next/link";
import type { ReactNode } from "react";
import { PLAY_STORE_URL } from "@/lib/site";

export function Section({ id, children, tone = "white", className = "" }: {
  id?: string; children: ReactNode; tone?: "white" | "surface"; className?: string;
}) {
  return (
    <section id={id} className={`${tone === "surface" ? "bg-container/50" : "bg-surface"} ${className}`}>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-8 sm:py-20">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cobalt">{children}</p>;
}

export function Badge({ children, tone = "ok" }: { children: ReactNode; tone?: "ok" | "alert" | "brand" }) {
  const t = {
    ok: "border-emerald-200 bg-emerald-50 text-emerald-800",
    alert: "border-red-200 bg-red-50 text-red-800",
    brand: "border-blue-200 bg-blue-50 text-cobalt",
  }[tone];
  const dot = { ok: "bg-ok animate-pulse", alert: "bg-alert", brand: "bg-cobalt" }[tone];
  return (
    <span className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border px-2.5 py-1 text-xs font-semibold ${t}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
      {children}
    </span>
  );
}

export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-line bg-container px-2.5 py-1 font-mono text-[11px] font-medium text-slate-700">
      {children}
    </span>
  );
}

export function Check({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-2.5 text-sm leading-6 text-slate-600">
      <svg className="mt-1 h-4 w-4 shrink-0 text-cobalt" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
        <path d="M4 10.5l4 4 8-9" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span>{children}</span>
    </li>
  );
}

const btn = "inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold transition-colors";
export const btnPrimary = `${btn} bg-cobalt text-white shadow-lg shadow-cobalt/25 hover:bg-cobalt-dark`;
export const btnOutline = `${btn} border border-line bg-white text-ink hover:bg-surface-2`;
export const btnLight = `${btn} bg-white text-ink hover:bg-slate-100 !px-9 !py-4 !text-base`;

export function PlayStoreButton({ dark = false, compact = false }: { dark?: boolean; compact?: boolean }) {
  return (
    <a
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center rounded-full transition-colors ${compact ? "gap-2 px-4 py-1.5" : "gap-3 px-6 py-3"} ${
        dark ? "bg-white text-ink hover:bg-slate-100" : "bg-ink text-white hover:bg-slate-800"
      }`}
    >
      <svg viewBox="0 0 24 24" className={compact ? "h-5 w-5" : "h-6 w-6"} aria-hidden="true">
        <path fill="#00C0F0" d="M3.6 2.3c-.3.3-.5.8-.5 1.4v16.6c0 .6.2 1.1.5 1.4l9.3-9.7z" />
        <path fill="#10B981" d="M16 8.8L5.6 2.9c-.7-.4-1.5-.4-2 -.6l9.3 9.7z" />
        <path fill="#EF4444" d="M12.9 12l-9.3 9.7c.5-.2 1.3-.2 2-.6L16 15.2z" />
        <path fill="#F59E0B" d="M20.2 10.9l-4.2-2.1-3.1 3.2 3.1 3.2 4.2-2.3c1.2-.7 1.2-1.3 0-2z" />
      </svg>
      <span className="flex flex-col text-left leading-tight">
        <span className={`font-medium uppercase tracking-wider opacity-70 ${compact ? "text-[9px]" : "text-[10px]"}`}>Get it on</span>
        <span className={`font-semibold ${compact ? "text-xs" : "text-sm"}`}>Google Play</span>
      </span>
    </a>
  );
}

export function CtaBanner({ headline }: { headline: string }) {
  return (
    <Section>
      <div className="relative overflow-hidden rounded-3xl bg-slate-panel px-6 py-12 sm:px-14 sm:py-20">
        <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,#43465630_1px,transparent_1px),linear-gradient(to_bottom,#43465630_1px,transparent_1px)] [background-size:32px_32px]" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-cobalt/30 blur-3xl" />
        <div className="relative max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-[#2ecdfe]">
            <span className="h-2 w-2 rounded-full bg-[#2ecdfe]" />
            Turnkey OEM / ODM Automation
          </span>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-white sm:text-5xl">{headline}</h2>
          <p className="mt-5 max-w-2xl leading-7 text-slate-300">
            From initial schematic and pilot prototype to production hand-off and global cloud telemetry. Let’s engineer your solution together.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/#engage" className={`${btnPrimary} !px-9 !py-4 !text-base shadow-lg shadow-cobalt/30`}>Talk to ASTRA →</Link>
            <a href="tel:+918308765999" className={`${btn} bg-white/10 !py-4 text-white hover:bg-white/20`}>📞 +91-8308765999</a>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: ReactNode; children: ReactNode }) {
  return (
    <section className="border-b border-line bg-gradient-to-b from-container to-surface">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-8 sm:py-24">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">{children}</p>
      </div>
    </section>
  );
}
