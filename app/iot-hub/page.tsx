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
  ["Fleet overview", "Every Atmos and ThermoProbe on one screen, with live-synced status."],
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
          <div className="max-w-3xl">
            <Eyebrow>Adding a new sensor?</Eyebrow>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">Set up New Sensor</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Setup takes six steps: sign in, connect the sensor to your Wi-Fi (Router), add it to your ASTRA IoT Hub account, and set its alert limits. The Wi-Fi and alert options are both under Settings in the ASTRA IoT Hub app.
            </p>

            <h3 className="mt-8 text-lg font-semibold">Before you start</h3>
            <p className="mt-2 text-slate-600">Keep these at hand:</p>
            <ul className="mt-2 list-disc space-y-1.5 pl-5 text-slate-600">
              <li>The sensor, and the Device ID and Claim code printed on its label</li>
              <li>An Android phone with the ASTRA IoT Hub app installed</li>
              <li>The name (SSID) and password of the Wi-Fi (Router) network the sensor will use. It must be a 2.4 GHz network; the sensor cannot join a 5 GHz-only network.</li>
            </ul>

            <h3 className="mt-8 text-lg font-semibold">Step 1: Sign in</h3>
            <p className="mt-2 leading-7 text-slate-600">Open ASTRA IoT Hub and sign in. If you do not have an account yet, register as a new user first.</p>

            <h3 className="mt-8 text-lg font-semibold">Step 2: Power on the sensor</h3>
            <p className="mt-2 leading-7 text-slate-600">Power on the sensor. A new sensor opens its own Wi-Fi network by itself.</p>
            <ul className="mt-2 list-disc space-y-1.5 pl-5 text-slate-600">
              <li>Network name shall be: the Device ID printed on the sensor</li>
              <li>Password will be: the Claim code printed on the sensor</li>
            </ul>

            <h3 className="mt-8 text-lg font-semibold">Step 3: Connect your phone to the sensor</h3>
            <p className="mt-2 leading-7 text-slate-600">In the app, open Settings and tap Connect Sensor to WiFi. Then, in your phone&apos;s Wi-Fi settings, join the network named after your Device ID and enter the Claim code as the password.</p>
            <p className="mt-2 leading-7 text-slate-600">Your phone may warn that this network has no internet. That is expected; stay connected.</p>

            <div className="mt-8 flex flex-col gap-6 sm:-mb-10 sm:flex-row sm:items-start sm:gap-10">
              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-semibold">Step 4: Enter your Wi-Fi details</h3>
                <ol className="mt-2 list-decimal space-y-1.5 pl-5 text-slate-600">
                  <li>On the same phone, open http://192.168.4.1/ in a browser.</li>
                  <li>Tap Configure WiFi.</li>
                  <li>Enter your Wi-Fi name (SSID) and password.</li>
                  <li>Tap Save.</li>
                </ol>
                <p className="mt-2 leading-7 text-slate-600">The sensor now joins your Wi-Fi by itself and sends its first reading.</p>
              </div>
              <Image
                src="/img/wifi-manager.png"
                alt="WiFiManager page on the sensor with Configure WiFi, Info, Exit and Update buttons"
                width={742}
                height={738}
                className="w-full max-w-[240px] shrink-0 rounded-xl border border-slate-200 sm:order-last sm:w-[240px]"
              />
            </div>

            <h3 className="mt-8 text-lg font-semibold">Step 5: Add the sensor to your account</h3>
            <p className="mt-2 leading-7 text-slate-600">Reconnect your phone to your usual Wi-Fi. If the sensor is not already in your account, tap Add Sensor in the app and enter the same Device ID and Claim code.</p>

            <h3 className="mt-8 text-lg font-semibold">Step 6: Set alert limits</h3>
            <p className="mt-2 leading-7 text-slate-600">In Settings, choose the sensor you just set up and tap Set Alert Limits. Enter the limits you want, then tap Save. The limits take effect only after you save.</p>

            <h3 className="mt-8 text-lg font-semibold">If something does not work</h3>
            <div className="mt-3 overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full min-w-[32rem] text-left text-sm">
                <thead className="bg-slate-50 text-ink">
                  <tr>
                    <th className="w-2/5 px-4 py-3 font-semibold">Problem</th>
                    <th className="px-4 py-3 font-semibold">What to do</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 align-top text-slate-600">
                  <tr>
                    <td className="px-4 py-3">The setup page at 192.168.4.1 does not load</td>
                    <td className="px-4 py-3">The page only loads while your phone is connected to the sensor&apos;s own network. Check that the phone has not switched back to your usual Wi-Fi, and turn off mobile data while you do Step 4.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">The sensor does not join your Wi-Fi</td>
                    <td className="px-4 py-3">Repeat Steps 3 and 4 and re-enter the Wi-Fi name and password carefully; both are case-sensitive. Make sure the network is 2.4 GHz.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">No reading appears in the app</td>
                    <td className="px-4 py-3">Check that your phone is back on your usual Wi-Fi or mobile data, and that the sensor was added with the correct Device ID and Claim code.</td>
                  </tr>
                </tbody>
              </table>
            </div>
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
