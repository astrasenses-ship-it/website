import type { Metadata } from "next";
import Image from "next/image";
import { FirmwareLifecycle } from "@/components/FirmwareLifecycle";
import { Badge, Check, Eyebrow, PageHero, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Products",
  description: "ASTRA Atmos and ThermoProb: rugged dual-channel wireless temperature and humidity sensors.",
};

const COMMON = [
  "Real-time mobile app telemetry with instantaneous edge-triggered excursion alerts.",
  "Continuous non-volatile data logging and automated compliance report generation (PDF/CSV) for export audits.",
  "Onboard battery backup ensuring continuous monitoring during mains power failures.",
  "Fast, phone-based Wi-Fi captive portal setup (no manual serial programming needed).",
];

const PRODUCTS = [
  {
    name: "ASTRA Atmos",
    sub: "Ambient Wireless Temperature & Humidity Sensor",
    form: "Minimalist white injection-molded enclosure with ventilation louvers and status RGB LED.",
    best: "Pre-cooling chambers, packing halls, clinical tissue culture labs, and clean rooms.",
    specs: [
      "Dual-channel measurement",
      "-40 °C to +80 °C operational accuracy (sensor element rated -40 °C to +125 °C) & 0% to 100% RH",
      "32-bit RISC-V SoC",
      "Automatic condensation recovery heating pulse",
      "1 °C and 3% RH alert hysteresis",
    ],
    img: "/img/atmos.jpg",
  },
  {
    name: "ASTRA ThermoProb",
    sub: "Precision Wireless RTD Probe Sensor",
    form: "Compact enclosure paired with an industrial high-grade stainless steel RTD external probe.",
    best: "Walk-in chillers, deep-freeze chambers, blast freezers, cold rooms, and immersion tanks.",
    specs: [
      "Ultra-wide temperature measurement from -50 °C up to +300 °C (-50 °C to +150 °C standard POST validation)",
      "Precision SPI interface",
      "Built-in Power-On Self-Test (POST)",
      "Continuous deep-sleep power cycle",
    ],
    img: "/img/thermoprob.jpg",
  },
];

const INDUSTRIES = [
  {
    t: "Floriculture",
    d: "Protects perishable cut flowers. A few degrees too warm causes premature opening; dry air causes petal wilting; damp air invites botrytis and mould. Unbroken monitoring from cold room to dispatch guarantees export-grade vase life and provides building trust for online traders.",
  },
  {
    t: "Medical & Healthcare",
    d: "Monitors every blood bank unit against its required range: whole blood (2–6 °C), platelets (20–24 °C), and plasma (-18 °C or colder). ICU and clinical supplies stay verified through power outages, with instant threshold-alert routing so your team can act in time.",
  },
  {
    t: "Pharmaceutical & Research",
    d: "Eliminates data drift during multi-month stability studies; exports automated time-stamped logs satisfying GMP and regulatory compliance without manual paperwork.",
  },
  {
    t: "Agriculture & Agro-Storage",
    list: [
      ["Mushroom & Saffron Cultivation", "Monitors 80–95% RH microclimates around the clock and alerts you when humidity drifts, so you can act to protect pinning and prevent corm rot."],
      ["Onion & Chilli Warehouses", "Detects localized warm pockets and rising humidity early, so you can step in before sprouting, rot, and color/pungency fading set in."],
      ["Incubation & Hatcheries", "Tracks the crucial 37.5 °C setter baseline and alerts on any deviation, helping preserve hatchability and chick health."],
    ],
  },
  {
    t: "Dairy & Milk Processing",
    list: [
      ["Bulk Milk Coolers", "Monitors the cooling curve to confirm raw milk reaches 4 °C or below within two hours of milking, and alerts instantly on compressor failure or delayed cooling, so you can act before souring and tanker rejection."],
      ["Maturation Rooms", "Tracks the temperature-humidity profile (for example 10–15 °C and 80–85% RH for cheese curing) and alerts on swings that can cause surface cracking, whey separation and batch defects."],
      ["Butter & Ice Cream Stores", "Monitors storage down to -25 °C and alerts on warm-ups that put fat structure and ice crystal size at risk."],
    ],
  },
  {
    t: "Fresh Produce Storage & Ripening",
    list: [
      ["Potato Cold Storage", "Monitors 8–12 °C at 90–95% RH and alerts on condensation that can drip onto tubers and cause soft rot."],
      ["Leafy Greens", "Watches the strict 0–2 °C range and alerts on drift that speeds up respiration and moisture loss."],
      ["Ripening Chambers", "Tracks temperature and humidity through ethylene cycles (banana, mango, papaya), so you can keep ripening on profile for uniform colour without softening."],
    ],
  },
  {
    t: "Food Freezing & Processing",
    list: [
      ["Blast & Shock Freezers", "Verifies that the core of meat, seafood or ready-to-eat food crosses the critical 0 to -5 °C zone quickly, which is key to texture and low drip loss."],
      ["Deep-Freeze Rooms (-18 to -25 °C)", "Tracks defrost duration and recovery time to flag thermal shock and freezer-burn risk."],
      ["Immersion Chillers & Brine Tanks", "Monitors the chilling medium temperature against its critical threshold."],
    ],
  },
  {
    t: "Cold-Chain Logistics",
    d: "Monitors cross-docks, distribution centres, staging corridors and loading bays so you can see when pallet dwell times approach safe thermal limits. Time-stamped logs give a clear custody record that helps settle disputes and speed up claims.",
  },
];

const ADVANTAGES = [
  ["Instant early-warning alerts", "Threshold breaches reach your phone the moment they happen, so your team can step in before a batch is lost."],
  ["Audit-ready records", "Automated PDF/CSV reports with time-stamped logs replace paper logbooks."],
  ["Keeps logging through outages", "Non-volatile onboard logging and battery backup mean monitoring continues through power and Wi-Fi interruptions."],
];

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Products" title="Field-Proven Sensing Hardware">
        Rugged dual-channel wireless sensors engineered by ASTRA for critical temperature and relative humidity environments.
      </PageHero>

      <Section>
        <h2 className="text-2xl font-bold">Common hardware highlights</h2>
        <ul className="mt-5 grid gap-x-10 gap-y-3 md:grid-cols-2">
          {COMMON.map((c) => <Check key={c}>{c}</Check>)}
        </ul>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {PRODUCTS.map((p) => (
            <article key={p.name} className="card overflow-hidden">
              <div className="relative aspect-[16/9] bg-container"><Image src={p.img} alt={`${p.name} wireless sensor`} fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" /></div>
              <div className="p-6 sm:p-8">
                <Badge>Connected</Badge>
                <h3 className="mt-3 text-2xl font-bold">{p.name}</h3>
                <p className="text-sm font-medium text-cobalt">{p.sub}</p>
                <dl className="mt-5 space-y-4 text-sm leading-6">
                  <div><dt className="font-semibold">Form factor</dt><dd className="text-slate-600">{p.form}</dd></div>
                  <div><dt className="font-semibold">Best suited for</dt><dd className="text-slate-600">{p.best}</dd></div>
                </dl>
                <h4 className="mt-5 text-xs font-semibold uppercase tracking-widest text-slate-500">Technical specifications</h4>
                <ul className="mt-3 space-y-2">{p.specs.map((s) => <Check key={s}>{s}</Check>)}</ul>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <FirmwareLifecycle />

      <Section id="industries">
        <Eyebrow>Cross-industry advantages</Eyebrow>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Why ASTRA sensing matters across sectors</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {INDUSTRIES.map((i) => (
            <article key={i.t} className="card p-6 sm:p-8">
              <h3 className="text-xl font-semibold">{i.t}</h3>
              {i.d && <p className="mt-3 text-sm leading-6 text-slate-600">{i.d}</p>}
              {i.list && (
                <ul className="mt-3 space-y-3 text-sm leading-6 text-slate-600">
                  {i.list.map(([a, b]) => (
                    <li key={a}><strong className="text-ink">{a}:</strong> {b}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
        <h3 className="mt-14 text-2xl font-bold">Core advantages of continuous monitoring</h3>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {ADVANTAGES.map(([t, d]) => (
            <div key={t} className="card p-6">
              <h4 className="font-display text-lg font-semibold">{t}</h4>
              <p className="mt-2 text-sm leading-6 text-slate-600">{d}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
