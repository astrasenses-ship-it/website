import { Eyebrow, Section } from "./ui";

const STEPS = [
  { n: "01", title: "RTC Wake", text: "Precision ultra-low-power timer interrupts the core from deep sleep mode.", meta: "< 2 ms", icon: "M12 7v5l3 2M12 21a8 8 0 100-16 8 8 0 000 16zM5 3L2 6M19 3l3 3" },
  { n: "02", title: "POST Self-Test", text: "Validates sensor integrity, checks rail voltage and battery reserves.", meta: "15 ms", icon: "M4 4h16v16H4zM8 12l3 3 5-6" },
  { n: "03", title: "Sensor Read", text: "I2C sensor digital burst read with noise rejection filtering.", meta: "35 ms", icon: "M12 12h.01M8.5 8.5a5 5 0 000 7M15.5 8.5a5 5 0 010 7M5.5 5.5a9 9 0 000 13M18.5 5.5a9 9 0 010 13" },
  { n: "04", title: "Wi-Fi Sync", text: "Fast BSSID connection utilizing cached channel credentials.", meta: "320 ms", icon: "M2 9a15 15 0 0120 0M5.5 12.5a10 10 0 0113 0M9 16a5 5 0 016 0M12 19.5h.01" },
  { n: "05", title: "MQTT Burst", text: "Transmits encrypted TLS payload; receives server ack and time sync.", meta: "280 ms", icon: "M3 4l18 8-18 8 3-8zM6 12h8" },
  { n: "06", title: "Deep Sleep", text: "Shuts down radio and logic rails; enters sub-microamp hibernation.", meta: "<15 µA", bolt: true, icon: "M12 3v9M6.3 6.3a8 8 0 1011.4 0" },
];

const BEACONS = [
  { label: "Cyan pulsing", title: "Wi-Fi Handshake", text: "Connecting to designated AP or syncing mesh gateway", color: "#38bdf8", text_: "text-sky-700" },
  { label: "Solid blue", title: "Cloud Upload", text: "Transmitting batch encrypted telemetry payload via HTTP/MQTT", color: "#1d4ed8", text_: "text-slate-600" },
  { label: "Solid green", title: "HTTP 200 / ACK", text: "Batch accepted by server, heading to ultra-low sleep", color: "#22c55e", text_: "text-emerald-700" },
  { label: "Red rapid blink", title: "Bus / Probe Fault", text: "RTD sensor disconnected or SHT45 CRC failure", color: "#dc2626", text_: "text-red-700" },
  { label: "Solid purple", title: "Critical Edge Alert", text: "Hysteresis threshold violated; high-priority push triggered", color: "#a855f7", text_: "text-violet-700" },
  { label: "White flash", title: "Heater Degas Cycle", text: "Pulse heater active, evaporating condensation on SHT45", color: "#ffffff", text_: "text-slate-600" },
  { label: "Amber slow blink", title: "Captive Portal Ready", text: "Awaiting field tech Wi-Fi credentials via 192.168.4.1", color: "#f59e0b", text_: "text-amber-700" },
  { label: "Dark / off", title: "Micro-Amp Hibernation", text: "Normal battery preservation mode between scheduled sample cycles", color: "#111827", text_: "text-slate-500", off: true },
];

export function FirmwareLifecycle() {
  return (
    <Section tone="surface">
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div>
          <Eyebrow>Firmware cycle &amp; visual telemetry</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Deterministic Edge Lifecycle</h2>
        </div>
        <p className="max-w-md leading-7 text-slate-600">
          How our autonomous micro-controllers execute rapid wake bursts, verify self-test diagnostics, and transition back to micro-amp hibernation.
        </p>
      </div>

      <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {STEPS.map((s) => (
          <li key={s.n} className="card flex flex-col p-5">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-container px-2.5 py-1 text-[11px] font-semibold">Step {s.n}</span>
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-container-hi text-cobalt">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d={s.icon} />
                </svg>
              </span>
            </div>
            <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{s.text}</p>
            <p className="tnum mt-auto pt-4 font-mono text-xs font-medium text-cobalt">{s.bolt ? "⚡" : "◔"} {s.meta}</p>
          </li>
        ))}
      </ol>

      <div className="card mt-8 p-6 sm:p-8">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
          <div>
            <h3 className="text-2xl font-semibold">Onboard RGB Diagnostic Beacon Matrix</h3>
            <p className="mt-1 text-slate-600">Field engineers inspect hardware health in seconds without attaching serial debug cables.</p>
          </div>
          <span className="self-start whitespace-nowrap rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-cobalt">
            Field tested revision
          </span>
        </div>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {BEACONS.map((b, i) => (
            <li key={b.label} className="flex gap-4 rounded-xl border border-line bg-surface p-5">
              <span
                className={`${b.off ? "" : "led-dot"} mt-1 h-6 w-6 shrink-0 rounded-full border border-slate-300`}
                style={{ backgroundColor: b.color, ["--led" as string]: b.color, animationDelay: `${(i % 4) * 0.35}s` }}
                aria-hidden="true"
              />
              <div className="min-w-0">
                <p className={`font-mono text-xs font-semibold uppercase tracking-widest ${b.text_}`}>{b.label}</p>
                <p className="mt-1 font-semibold">{b.title}</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{b.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
