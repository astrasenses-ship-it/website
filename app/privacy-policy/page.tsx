import type { Metadata } from "next";
import { PageHero, Section } from "@/components/ui";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How the ASTRA IoT Hub app and ASTRA sensors handle your data.",
};

const H2 = "mt-10 text-xl font-semibold text-ink";
const P = "mt-3 leading-7 text-slate-600";
const UL = "mt-3 list-disc space-y-2 pl-5 leading-7 text-slate-600";

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy">
        How the ASTRA IoT Hub app and ASTRA sensors handle your information. Last updated: 14 November 2026.
      </PageHero>
      <Section>
        <article className="max-w-3xl">
          <p className="leading-7 text-slate-600">
            This policy applies to the ASTRA IoT Hub Android app and to all ASTRA sensors (Atmos, ThermoProbe-Analog and ThermoProbe-Digital) that you add to your account. It is published by ASTRA e - Automation, Bengaluru, Karnataka, India.
          </p>

          <p className="mt-6 rounded-xl border-l-4 border-cobalt bg-blue-50 px-5 py-4 text-lg leading-8 text-ink">
            Short Version: Your data belongs to you. We do not collect, store, or share your credentials, keys, or logs on any external server. All configuration details remain strictly encrypted on your own device.
          </p>

          <h2 className={H2}>1. Information we handle</h2>
          <ul className={UL}>
            <li><strong className="text-ink">Account details:</strong> the details you give when you register and sign in to ASTRA IoT Hub.</li>
            <li><strong className="text-ink">Sensor details:</strong> the Device ID and Claim code printed on each sensor, used to add the sensor to your account.</li>
            <li><strong className="text-ink">IoT telemetry and MQTT settings (if you use them):</strong> your IoT telemetry feed details and MQTT broker details, including the login credentials you enter. These are stored only on your device, in Android Keystore-backed AES-256 EncryptedSharedPreferences.</li>
            <li><strong className="text-ink">Sensor readings:</strong> temperature and humidity readings, status and connection events sent by your sensors, and the history shown in the app.</li>
            <li><strong className="text-ink">Alert settings:</strong> the alert limits you set for each sensor.</li>
            <li><strong className="text-ink">Wi-Fi details:</strong> the Wi-Fi name and password you enter on the sensor&apos;s setup page so it can join your network. These are entered on the sensor itself, not in the app or on this website.</li>
            <li><strong className="text-ink">Website enquiries:</strong> if you contact us through this website, we receive what you write in the message, using your own email app.</li>
          </ul>

          <h2 className={H2}>2. How we use it</h2>
          <ul className={UL}>
            <li>To show your sensors, live readings and history in the app.</li>
            <li>To send you alert notifications when a reading crosses the limits you set.</li>
            <li>To let you export your historical run charts.</li>
            <li>To fetch data from your own cloud feeds and MQTT broker, and check it in the background every 15 minutes for threshold breaches.</li>
            <li>To provide support when you ask us for help.</li>
          </ul>

          <h2 className={H2}>3. Where data is stored and how it is protected</h2>
          <p className={P}>
            Account and sensor data is processed and stored on Amazon Web Services (Mumbai, India). Access to your sensors and readings is limited to
            your account.
          </p>
          <ul className={UL}>
            <li>Credentials you enter for IoT telemetry or an MQTT broker stay on your device. Telemetry data goes directly from your device to your own cloud API and MQTT endpoints, and ASTRA has no access to those configurations or logs.</li>
            <li>MQTT connections use SSL/TLS.</li>
            <li>The app contains no analytics or advertising SDKs, and no developer-owned logging.</li>
          </ul>

          <h2 className={H2}>4. Sharing</h2>
          <p className={P}>
            We use AWS to run the service. The app does not include advertising SDKs. We do not share your sensor data with third
            parties for their own use, except where the law requires it.
          </p>

          <h2 className={H2}>5. App permissions</h2>
          <ul className={UL}>
            <li><strong className="text-ink">Internet and network state:</strong> to fetch data, reach the cloud service and the MQTT broker, and show connection status.</li>
            <li><strong className="text-ink">Post notifications:</strong> to show threshold-breach alerts.</li>
            <li><strong className="text-ink">Wake lock:</strong> to run background checks every 15 minutes (using WorkManager).</li>
            <li><strong className="text-ink">Camera (if you scan a sensor QR code):</strong> only to read the code on the sensor label.</li>
            <li><strong className="text-ink">Wi-Fi connection:</strong> while setting up a sensor, your phone joins the sensor&apos;s own network so you can enter your Wi-Fi details.</li>
          </ul>

          <h2 className={H2}>6. Keeping and deleting your data</h2>
          <p className={P}>
            You can delete logs, configurations and credentials stored on your phone by tapping Reset on the Credentials Setup screen,
            clearing the app&apos;s storage in Android settings, or uninstalling the app. You can also remove a sensor from your account in
            the app. To delete your account and the data linked to it, write to us at the address below and we will act on your request.
          </p>

          <h2 className={H2}>7. Children</h2>
          <p className={P}>ASTRA IoT Hub is built for people who monitor equipment and storage. It is not directed at children.</p>

          <h2 className={H2}>8. Changes to this policy</h2>
          <p className={P}>We will publish any changes on this page and update the &quot;Last updated&quot; date at the top.</p>

          <h2 className={H2}>9. Contact</h2>
          <p className={P}>
            Questions about this policy or your data: {" "}
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
