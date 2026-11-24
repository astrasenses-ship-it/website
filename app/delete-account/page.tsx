import type { Metadata } from "next";
import { PageHero, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Delete your ASTRA IoT Hub account",
  description: "How to delete your ASTRA IoT Hub account, and what is deleted and kept.",
};

const CARD = "mt-6 rounded-xl border border-line bg-surface px-6 py-5";
const H2 = "text-xl font-semibold text-ink";
const P = "mt-3 leading-7 text-slate-600";
const LIST = "mt-3 space-y-2 pl-5 leading-7 text-slate-600";

export default function Page() {
  return (
    <>
      <PageHero eyebrow="ASTRA IoT Hub" title="Delete your ASTRA IoT Hub account">
        ASTRA IoT Hub, by ASTRAE-AUTOMATION LLP, Bengaluru, India
      </PageHero>
      <Section>
        <article className="max-w-3xl">
          <div className={CARD}>
            <h2 className={H2}>In the app (fastest)</h2>
            <ol className={`${LIST} list-decimal`}>
              <li>Open <strong className="text-ink">ASTRA IoT Hub</strong> and sign in.</li>
              <li>Go to <strong className="text-ink">Settings &rsaquo; Delete Account</strong>.</li>
              <li>
                Tap <strong className="text-ink">Email me a code to delete</strong>, then enter the 6-digit code from
                the email.
              </li>
            </ol>
            <p className={P}>Your account is deleted at once.</p>
          </div>

          <div className={CARD}>
            <h2 className={H2}>What is deleted</h2>
            <ul className={`${LIST} list-disc`}>
              <li>Your sign-in account (email, name, password).</li>
              <li>Your profile and company name, and your alert history.</li>
              <li>The sensor readings recorded while you owned each sensor.</li>
              <li>The phones registered for your alerts. Alerts by email and push stop.</li>
            </ul>

            <h2 className={`${H2} mt-8`}>What is kept</h2>
            <ul className={`${LIST} list-disc`}>
              <li>
                Your sensors keep working and are released from your account, so they can be added again with their
                claim code. Their alert limits stay on the sensor.
              </li>
              <li>Readings from times when someone else, or nobody, owned the sensor.</li>
            </ul>
            <p className="mt-6 font-semibold text-red-700">Deleting your account cannot be undone.</p>
          </div>
        </article>
      </Section>
    </>
  );
}
