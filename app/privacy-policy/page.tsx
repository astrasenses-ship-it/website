import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Section } from "@/components/ui";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How the ASTRA IoT Hub app and ASTRA sensors handle your data.",
};

const H2 = "mt-10 text-xl font-semibold text-ink";
const P = "mt-3 leading-7 text-slate-600";
const UL = "mt-3 list-disc space-y-2 pl-5 leading-7 text-slate-600";
const B = "text-ink";

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy">
        How the ASTRA IoT Hub app and ASTRA sensors handle your information.
        <span className="mt-4 block text-sm font-medium text-slate-500">Last updated: 24 November 2026.</span>
      </PageHero>
      <Section>
        <article className="max-w-3xl">
          <p className="leading-7 text-slate-600">
            This policy applies to the ASTRA IoT Hub app for Android and iPhone, and to all ASTRA sensors (Atmos,
            ThermoProbe-Analog and ThermoProbe-Digital) that you add to your account. It is published by
            ASTRAE-AUTOMATION LLP ({CONTACT.entity}).
          </p>

          <p className="mt-6 rounded-xl border-l-4 border-cobalt bg-blue-50 px-5 py-4 text-lg leading-8 text-ink">
            Short version: we keep only what the app needs to show your sensors and alert you: your account details,
            your sensors&apos; readings and your alert settings. We do not sell your data, show ads, or track you, and you
            can delete your account and its data at any time.
          </p>

          <h2 className={H2}>1. Information we collect</h2>
          <ul className={UL}>
            <li>
              <strong className={B}>Account details:</strong> your name, email address, company name and site / city,
              which you enter when you register, and the password you choose. The password is never sent to us in readable
              form and we cannot see it.
            </li>
            <li>
              <strong className={B}>Sensor details:</strong> the Device ID and Claim code printed on each sensor, used to
              add the sensor to your account, and the name you give it.
            </li>
            <li>
              <strong className={B}>Sensor readings:</strong> temperature and humidity readings, and status, connection
              and fault events sent by your sensors.
            </li>
            <li>
              <strong className={B}>Alert settings and history:</strong> the alert limits you set for each sensor, and the
              alerts sent to you.
            </li>
            <li>
              <strong className={B}>Push token:</strong> an identifier for the app on your phone, so that alerts reach it.
            </li>
            <li>
              <strong className={B}>Wi-Fi details:</strong> the Wi-Fi name and password you enter on the sensor&apos;s own
              setup page so it can join your network. These are stored on the sensor only, not in the app or on our
              servers.
            </li>
            <li>
              <strong className={B}>Website enquiries:</strong> if you contact us through this website, we receive what
              you write in the message, using your own email app.
            </li>
          </ul>
          <p className={P}>
            We do not collect your location, contacts, photos, or any analytics, advertising or crash data.
          </p>

          <h2 className={H2}>2. How we use it</h2>
          <ul className={UL}>
            <li>To sign you in and keep each account&apos;s sensors and readings separate.</li>
            <li>To show your sensors, live readings and history in the app, and to create the reports you export.</li>
            <li>
              To send you alerts by email and push notification when a reading crosses your limits, or a sensor goes
              offline or reports a fault.
            </li>
            <li>To email you one-time codes, for example to open the Limits page or to delete your account.</li>
            <li>To provide support when you ask us for help.</li>
          </ul>

          <h2 className={H2}>3. Where data is stored and how it is protected</h2>
          <p className={P}>
            Account details, sensor data and alert settings are stored on Amazon Web Services in Mumbai, India. All
            connections between the app, the sensors and our servers are encrypted. Access to your sensors and readings is
            limited to your account. The app keeps a copy of your sensor list and alert history on your phone so it can show
            them offline; deleting your account removes it.
          </p>

          <h2 className={H2}>4. Who processes your data for us</h2>
          <p className={P}>We do not sell or rent your data, and we do not share it for advertising or tracking.</p>
          <ul className={UL}>
            <li><strong className={B}>Amazon Web Services:</strong> hosting, sign-in, storage, and sending alert and code emails.</li>
            <li>
              <strong className={B}>Google Firebase Cloud Messaging</strong> and, on iPhones,{" "}
              <strong className={B}>Apple Push Notification service</strong>: delivering push alerts to your phone. They
              receive the push token and the alert text.
            </li>
          </ul>
          <p className={P}>We may also disclose data where the law requires it.</p>

          <h2 className={H2}>5. App permissions</h2>
          <ul className={UL}>
            <li><strong className={B}>Internet:</strong> to reach our servers.</li>
            <li><strong className={B}>Notifications:</strong> to show alerts. You can turn them off in your phone&apos;s settings.</li>
            <li>
              <strong className={B}>Camera (only if you scan a sensor&apos;s QR code):</strong> to read the code on the sensor
              label. No photo is saved or sent.
            </li>
            <li>
              <strong className={B}>Local network (iPhone) / Wi-Fi:</strong> while you set up a sensor, to open the
              sensor&apos;s own setup page on its Wi-Fi network.
            </li>
          </ul>

          <h2 className={H2}>6. Keeping and deleting your data</h2>
          <ul className={UL}>
            <li>Your account details are kept while you have an account.</li>
            <li>Sensor readings are kept for 90 days and then deleted automatically on a FIFO basis.</li>
            <li>
              Removing a sensor from your account in the app releases it; your readings from that time stay linked to your
              account only.
            </li>
            <li>
              You can delete your account in the app at any time (Settings &rsaquo; Delete Account).
              This deletes your account, your profile, your alert history and the readings recorded while you owned each
              sensor. See{" "}
              <Link href="/delete-account" className="font-semibold text-cobalt hover:underline">
                Delete your ASTRA IoT Hub account
              </Link>
              .
            </li>
          </ul>

          <h2 className={H2}>7. Children</h2>
          <p className={P}>ASTRA IoT Hub is built for people who monitor equipment and storage. It is not directed at children.</p>

          <h2 className={H2}>8. Changes to this policy</h2>
          <p className={P}>We will publish any changes on this page and update the &quot;Last updated&quot; date at the top.</p>

          <h2 className={H2}>9. Contact</h2>
          <p className={P}>
            Questions about this policy or your data:{" "}
            {CONTACT.emails.map((e) => (
              <a key={e} href={`mailto:${e}`} className="font-semibold text-cobalt hover:underline">{e}</a>
            ))}
            .
          </p>
        </article>
      </Section>
    </>
  );
}
