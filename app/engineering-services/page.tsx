import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, Eyebrow, Section, btnPrimary } from "@/components/ui";

export const metadata: Metadata = {
  title: "Engineering Services",
  description: "Turnkey OEM/ODM engineering: PCB design, firmware, mobile apps and IoT cloud from one team.",
};

const FLOW = [
  ["Concept", "Requirements, architecture and feasibility."],
  ["Design", "Schematic, multi-layer PCB layout, DFM/DFT review."],
  ["Prototype", "Rapid hardware bring-up, validation and firmware."],
  ["Handoff", "Gerbers, BOM, assembly data and pick-and-place files."],
  ["Scale", "App store release, cloud rollout and fleet operations."],
];

const MANUFACTURING = [
  "SMT pick-and-place and reflow",
  "Automated optical inspection (AOI)",
  "Through-hole assembly and hand-soldering",
  "Box build and enclosure integration",
];

function Caption({ children }: { children: React.ReactNode }) {
  return <figcaption className="border-t border-line px-4 py-2.5 text-xs font-medium text-slate-500">{children}</figcaption>;
}

export default function Page() {
  return (
    <>
      <section className="overflow-hidden border-b border-line bg-gradient-to-b from-container to-surface">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-8 sm:py-20 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <Eyebrow>Turnkey OEM / ODM</Eyebrow>
            <h1 className="mt-3 max-w-2xl text-4xl font-bold sm:text-5xl">From concept to a product that ships.</h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              One accountable team across hardware, firmware, mobile application and cloud — so nothing is lost between vendors.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/#engage" className={btnPrimary}>Talk to ASTRA →</Link>
              <Link href="/products" className={btnPrimary}>See deployed products</Link>
            </div>
          </div>
          <figure className="card hidden overflow-hidden lg:block">
            <div className="relative aspect-[4/3]">
              <Image src="/img/enclosure.jpg" alt="3D render of the ASTRA sensor enclosure" fill sizes="40vw" priority className="object-cover" />
            </div>
          </figure>
        </div>
      </section>

      <Section>
        <Eyebrow>How we work</Eyebrow>
        <h2 className="mt-3 text-3xl font-bold">Five steps, one team</h2>
        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {FLOW.map(([t, d], i) => (
            <li key={t} className="card relative p-5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cobalt font-mono text-xs font-semibold text-white">{i + 1}</span>
              <h3 className="mt-3 text-lg font-semibold">{t}</h3>
              <p className="mt-1 text-sm leading-6 text-slate-600">{d}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div className="lg:sticky lg:top-28">
            <Eyebrow>Manufacturing</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold">SMT and through-hole assembly</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Pick-and-place, reflow, optical inspection and hand-soldering, all under one roof. Your design goes from handoff files to assembled boards without changing hands.
            </p>
            <ul className="mt-6 space-y-3">
              {MANUFACTURING.map((m) => <Check key={m}>{m}</Check>)}
            </ul>
          </div>
          <div className="grid grid-cols-[2.56fr_1fr] gap-3 sm:gap-5">
            <figure className="card overflow-hidden">
              <Image src="/img/smd-full.jpeg" alt="SMT line: pick-and-place machine, reflow oven, optical inspection and rework stations" width={1279} height={1600} sizes="(min-width:1024px) 40vw, 70vw" className="h-auto w-full" />
            </figure>
            <figure className="card overflow-hidden">
              <Image src="/img/pth-full.jpeg" alt="Through-hole assembly line with technicians hand-soldering boards" width={499} height={1600} sizes="(min-width:1024px) 16vw, 30vw" className="h-auto w-full" />
            </figure>
          </div>
        </div>
      </Section>

      <Section tone="surface">
        <Eyebrow>Design showcase</Eyebrow>
        <h2 className="mt-3 text-3xl font-bold">Schematic to manufactured board</h2>
        <p className="mt-3 max-w-2xl text-slate-600">ASTRA IoT Sensor V2.0, designed in KiCad: schematic, routed layout and the finished PCB.</p>
        <figure className="card mt-8 overflow-hidden">
          <Image src="/img/pcb-trio.jpg" alt="ASTRA IoT Sensor V2.0 schematic, PCB CAD routing layout and manufactured PCB" width={1400} height={700} className="h-auto w-full" />
          <Caption>ASTRA IoT Sensor V2.0: schematic, PCB CAD layout and manufactured board</Caption>
        </figure>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <figure className="card overflow-hidden">
            <div className="relative aspect-[5/4]"><Image src="/img/pcb-3d.jpg" alt="3D render of the ASTRA sensor PCB with ESP32-C6 and 18650 cell" fill sizes="(min-width:640px) 45vw, 100vw" className="object-cover" /></div>
            <Caption>3D PCB render: ESP32-C6 module and 18650 cell</Caption>
          </figure>
          <figure className="card overflow-hidden">
            <div className="relative aspect-[5/4]"><Image src="/img/enclosure.jpg" alt="ASTRA sensor enclosure design" fill sizes="(min-width:640px) 45vw, 100vw" className="object-cover" /></div>
            <Caption>Enclosure design</Caption>
          </figure>
        </div>
      </Section>

    </>
  );
}
