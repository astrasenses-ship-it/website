import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero, Section } from "@/components/ui";
import { SocialLinks } from "@/components/SocialLinks";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Reach ASTRA e - Automation in Bengaluru.",
};

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Let’s engineer your product.">
        Tell us about your idea, or ask about Atmos and ThermoProbe.
      </PageHero>
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-6 text-sm leading-6">
            <div>
              <h2 className="font-semibold">ASTRA e - Automation</h2>
              <address className="mt-1 not-italic text-slate-600">{CONTACT.address}</address>
            </div>
            <div className="space-y-1">
              {CONTACT.emails.map((e) => (
                <a key={e} href={`mailto:${e}`} className="block text-cobalt hover:underline">{e}</a>
              ))}
              <a href={CONTACT.phoneHref} className="tnum block text-cobalt hover:underline">{CONTACT.phone}</a>
            </div>
            <SocialLinks />
          </div>
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
