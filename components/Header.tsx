"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "./Logo";
import { PlayStoreButton } from "./ui";
import { NAV } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const linkCls = (href: string) =>
    `text-sm font-medium transition-colors hover:text-cobalt ${
      pathname === href ? "text-cobalt" : "text-slate-600"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-surface/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-8">
        <div className="flex items-center gap-4">
          <Link href="/" aria-label="ASTRA e - Automation home" onClick={() => setOpen(false)}>
            <Logo />
          </Link>
          <p className="hidden border-l border-line pl-4 text-xs font-semibold leading-snug text-slate-600 sm:block lg:hidden xl:block">
            Technology for the Fields,
            <br />
            Science for the Future
          </p>
        </div>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className={linkCls(n.href)}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <PlayStoreButton compact />
          <button
            type="button"
            className="rounded-full border border-line p-2 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-line bg-white px-4 py-3 lg:hidden" aria-label="Mobile">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className={`block py-3 ${linkCls(n.href)}`}
            >
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
