import type { Metadata } from "next";
import Image from "next/image";
import { QrLanding } from "@/components/QrLanding";
import { Check, Eyebrow, PageHero, PlayStoreButton, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "ASTRA IoT Hub",
  description: "The ASTRA IoT Hub mobile app: fleet overview, threshold alarms and instant historical exports.",
};

const FEATURES = [
  "Multi-device fleet overview",
  "Custom min/max threshold triggers",
  "Audible alarms",
  "Instant export of historical run charts",
];

const FEATURE_CARDS = [
  ["Fleet overview", "Every Atmos and ThermoProb on one screen, with live-synced status."],
  ["Threshold triggers", "Set custom min/max limits per device and get alerted on excursions."],
  ["Audible alarms", "Hard-to-miss alarms when a reading leaves its safe band."],
  ["Run-chart export", "Export historical charts and reports instantly for audits."],
];

const GALLERY = ["01", "04", "06", "07", "09", "10"];

export default function Page() {
  return (
    <>
      <QrLanding />
      <PageHero eyebrow="Mobile telemetry" title="ASTRA IoT Hub">
        Every sensor in your facility, live in your pocket — with the alarms and audit exports to match.
      </PageHero>
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="mx-auto flex w-full max-w-xl items-end justify-center gap-3 sm:gap-5">
            {[
              ["/img/app-05.jpg", "ASTRA IoT Hub: Atmos live temperature and humidity chart", "w-1/3 sm:translate-y-0"],
              ["/img/app-08.jpg", "ASTRA IoT Hub: ThermoProbe freezer chart", "w-[36%] -translate-y-6"],
              ["/img/app-03.jpg", "ASTRA IoT Hub: alert history", "w-1/3"],
            ].map(([src, alt, cls]) => (
              <div key={src} className={`${cls} overflow-hidden rounded-[1.6rem] border-4 border-ink shadow-xl`}>
                <Image src={src} alt={alt} width={738} height={1600} sizes="(min-width:1024px) 15vw, 30vw" className="h-auto w-full" />
              </div>
            ))}
          </div>
          <div>
            <Eyebrow>Android</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold">Your whole fleet at a glance</h2>
            <ul className="mt-6 space-y-3">{FEATURES.map((f) => <Check key={f}>{f}</Check>)}</ul>
            <div className="mt-8"><PlayStoreButton /></div>
          </div>
        </div>
      </Section>
      <Section id="add-sensor" tone="surface">
        <div className="card p-6 sm:p-8">
          <div className="max-w-2xl">
            <Eyebrow>Adding a new sensor?</Eyebrow>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">Scan the QR code on your sensor in the app</h2>
            <ol className="mt-4 space-y-2 text-slate-600">
              <li><strong className="text-ink">1.</strong> Install the ASTRA IoT Hub app from Google Play.</li>
              <li><strong className="text-ink">2.</strong> Open the app and scan the QR code on your ASTRA sensor.</li>
              <li><strong className="text-ink">3.</strong> The app recognises the device and adds it to your account.</li>
            </ol>
            <p className="mt-3 text-sm text-slate-500">A normal camera app can only open this page. Adding the sensor happens inside the ASTRA IoT Hub app.</p>
          </div>
        </div>
      </Section>
      <Section tone="surface">
        <Eyebrow>Built for operators</Eyebrow>
        <h2 className="mt-3 text-3xl font-bold">Everything you need on the floor</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURE_CARDS.map(([t, d]) => (
            <div key={t} className="card p-6">
              <h3 className="text-lg font-semibold">{t}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{d}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section>
        <h2 className="text-2xl font-bold">App screens</h2>
        <ul className="mt-6 flex snap-x gap-4 overflow-x-auto pb-4">
          {GALLERY.map((n) => (
            <li key={n} className="w-44 shrink-0 snap-start overflow-hidden rounded-[1.4rem] border-4 border-ink shadow-lg sm:w-52">
              <Image src={`/img/app-${n}.jpg`} alt={`ASTRA IoT Hub app screen ${n}`} width={738} height={1600} sizes="208px" className="h-auto w-full" />
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
