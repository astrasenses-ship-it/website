import Image from "next/image";
import Link from "next/link";
import { Globe } from "@/components/Globe";
import { PillarCard } from "@/components/PillarCard";
import { ContactForm } from "@/components/ContactForm";
import { Chip, Eyebrow, Section, btnPrimary } from "@/components/ui";
import { PILLARS } from "@/lib/site";

const HIGHLIGHTS = [
  { label: "Delivery model", value: "Turnkey OEM / ODM", href: "/engineering-services" },
  { label: "Engineering", value: "4 Core Pillars", href: "#capabilities" },
  { label: "Mobile app", value: "ASTRA IoT Hub", href: "/iot-hub" },
];

const STAGES = [
  {
    title: "Design",
    text: "Schematic capture and multi-layer PCB layout, built to be manufacturable and testable from day one.",
    tags: ["Schematic", "PCB layout", "DFM / DFT"],
    img: "/img/schematic-v2.png",
    alt: "KiCad schematic of the ASTRA IoT Sensor V2.0",
    pos: "object-contain bg-white",
    zoom: true,
  },
  {
    title: "Build",
    text: "SMT and through-hole assembly with optical inspection, followed by box build.",
    tags: ["SMT", "Through-hole", "AOI"],
    img: "/img/pcb-3d-full.jpg",
    alt: "3D render of the assembled ASTRA sensor PCB with ESP32-C6 module and 18650 cell",
    pos: "object-center",
  },
  {
    title: "Prototype",
    text: "Rapid hardware bring-up and validation, with enclosure and board engineered together.",
    tags: ["Bring-up", "Validation", "Enclosure"],
    img: "/img/enclosure-2.jpg",
    alt: "Cutaway of the ASTRA enclosure showing the PCB inside",
    pos: "object-center",
  },
  {
    title: "Handoff",
    text: "A complete production package, ready for scale: the files for manufacturing.",
    tags: ["Gerbers", "BOM", "Assembly data", "Pick-and-place"],
    img: "/img/pcb-production-package.png",
    alt: "PCB production package: Gerbers, bill of materials, assembly data and pick-and-place files",
    pos: "object-contain bg-white",
    zoom: true,
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-surface">
        <div className="pointer-events-none absolute -top-32 right-1/4 h-96 w-96 rounded-full bg-cobalt/5 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-cyan/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-stretch gap-12 px-4 py-12 sm:px-8 lg:grid-cols-2 lg:py-16">
          <div className="flex min-w-0 flex-col gap-8 lg:justify-between">
            <div className="flex flex-col gap-6">
            <h1 className="text-[2.6rem] font-bold leading-[1.08] sm:text-6xl lg:text-[3.9rem]">
              One Partner.
              <br />
              <span className="text-cobalt">Hardware to Edge Computing.</span>
            </h1>
            <p className="max-w-xl text-lg leading-8 text-slate-600 lg:text-xl lg:leading-9">
              As a full-stack development centre, we turn concepts into scalable, production-ready products—spanning
              hardware design, IoT technology, firmware engineering, mobile telemetry, and cloud infrastructure —all under one roof.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="#engage" className={btnPrimary}>Talk to ASTRA →</Link>
              <Link href="/products" className={btnPrimary}>
                Explore our products
              </Link>
            </div>
            </div>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
              {HIGHLIGHTS.map((h) => (
                <Link
                  key={h.label}
                  href={h.href}
                  className="group rounded-xl border border-transparent bg-surface-2 p-3 transition-colors hover:border-line hover:bg-white"
                >
                  <p className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                    {h.label}
                    <span aria-hidden="true" className="text-sm text-cobalt transition-transform group-hover:translate-x-0.5">→</span>
                  </p>
                  <p className="mt-1 whitespace-nowrap font-display text-sm font-semibold text-cobalt sm:text-[15px]">{h.value}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex min-w-0 flex-col">
            <div className="flex flex-1 flex-col rounded-2xl bg-surface-2 p-4 shadow-xl">
              <div className="mb-3 flex items-center justify-between gap-2">
                <span className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-teal">
                  <span className="h-3 w-3 rounded-full bg-ok" />
                  Active Telemetry Route
                </span>
                <span className="hidden text-xs font-semibold text-slate-500 sm:block">ASTRA IoT Hub</span>
              </div>
              <div className="relative flex flex-1 items-center justify-center overflow-hidden rounded-xl bg-slate-panel p-4">
                <div className="absolute inset-0 opacity-15 [background-image:radial-gradient(#2ecdfe_1px,transparent_1px)] [background-size:16px_16px]" />
                <Globe />
                <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-md bg-slate-panel/90 px-3 py-1 font-mono text-[11px]">
                  <span className="h-1.5 w-1.5 rounded-full bg-ok" />
                  <span className="text-emerald-300">MQTT TLS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-container">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-8 sm:py-20">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <Eyebrow>Turnkey engineering</Eyebrow>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">From first schematic to finished product</h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                One team takes your idea through design, prototyping, assembly and production handoff, so nothing is lost between vendors.
              </p>
            </div>
            <Link href="/engineering-services" className="shrink-0 text-sm font-semibold text-cobalt hover:text-cobalt-dark">
              See all engineering services →
            </Link>
          </div>

          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {STAGES.map((st, i) => (
              <li key={st.title} className="card flex flex-col overflow-hidden">
                <div className="relative aspect-[4/3] bg-container-hi">
                  <Image src={st.img} alt={st.alt} fill sizes="(min-width:1024px) 22vw, (min-width:640px) 45vw, 100vw" className={st.pos.startsWith("object-contain") ? st.pos : `object-cover ${st.pos}`} />
                  {st.zoom && (
                    <a
                      href={st.img}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${st.title} image full size`}
                      className="absolute inset-0 flex items-end justify-end p-3 opacity-0 transition-opacity hover:opacity-100 focus-visible:opacity-100"
                    >
                      <span className="rounded-full bg-ink/80 px-3 py-1 text-xs font-medium text-white">View full size ↗</span>
                    </a>
                  )}
                  <span className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-cobalt font-mono text-xs font-semibold text-white shadow-md">
                    {i + 1}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-semibold">{st.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{st.text}</p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {st.tags.map((t) => <li key={t}><Chip>{t}</Chip></li>)}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Section id="capabilities">
        <Eyebrow>Architectural capabilities</Eyebrow>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Four Pillars. Full Spectrum.</h2>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
          Eliminate the friction of working with fragmented agencies. We handle hardware schematic capture, low-level RTOS firmware, cross-platform apps, and enterprise MQTT pipelines.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {PILLARS.map((p) => <PillarCard key={p.n} p={p} />)}
        </div>
      </Section>

      <section className="bg-surface-2">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-8 lg:grid-cols-2 lg:py-24">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-teal">Engineering Heritage</p>
            <h2 className="text-3xl font-bold sm:text-4xl">Engineered by Multidisciplinary Hardware & Embedded Specialists</h2>
            <p className="text-lg leading-8 text-slate-600">
              Headquartered in Bengaluru’s technology corridor, our team unites RF layout designers, embedded firmware architects, cloud engineers, and manufacturing specialists under one roof.
            </p>
          </div>
          <figure className="overflow-hidden rounded-2xl bg-surface shadow-md">
            <Image src="/img/team.jpg" alt="ASTRA e - Automation engineering team in Bengaluru" width={1600} height={562} className="h-auto w-full" />
            <figcaption className="flex items-center justify-between p-4 text-sm font-medium">
              ASTRA Bengaluru Hub
              <span className="flex items-center gap-1 text-xs text-teal"><span className="h-2 w-2 rounded-full bg-ok" />Edge Computing Team</span>
            </figcaption>
          </figure>
        </div>
      </section>


      <Section id="engage" tone="surface">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <Eyebrow>Engagement</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Talk to ASTRA</h2>
            <p className="mt-4 text-slate-600">Tell us what you’re building. An engineer will get back to you.</p>
          </div>
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
