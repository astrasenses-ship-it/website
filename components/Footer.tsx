import Link from "next/link";
import { Logo } from "./Logo";
import { SocialLinks } from "./SocialLinks";
import { CONTACT, NAV } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-slate-panel text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo onDark />
          <h3 className="mt-6 text-xs font-semibold uppercase tracking-widest text-cyan">Follow us</h3>
          <div className="mt-4"><SocialLinks onDark list /></div>
        </div>
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-cyan">Registered Office</h3>
          <p className="mt-4 text-sm leading-6">ASTRA e - Automation</p>
          <address className="text-sm not-italic leading-6 text-slate-400">{CONTACT.address}</address>
        </div>
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-cyan">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {CONTACT.emails.map((e) => (
              <li key={e}>
                <a href={`mailto:${e}`} className="hover:text-cyan">{e}</a>
              </li>
            ))}
            <li>
              <a href={CONTACT.phoneHref} className="tnum hover:text-cyan">{CONTACT.phone}</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-cyan">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-cyan">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 px-4 py-5 text-center text-xs text-slate-500">
        © ASTRA e - Automation. All rights reserved.
      </div>
    </footer>
  );
}
