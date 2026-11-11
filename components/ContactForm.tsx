"use client";

import { useState } from "react";
import { CONTACT } from "@/lib/site";

const field =
  "mt-1.5 w-full rounded-lg border border-line bg-white px-3 py-2.5 text-sm outline-none focus:border-cobalt focus:ring-2 focus:ring-cyan/30";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const body = `Name: ${d.get("name")}\nCompany: ${d.get("company")}\nEmail: ${d.get("email")}\nInterest: ${d.get("interest")}\n\n${d.get("message")}`;
    window.location.href = `mailto:${CONTACT.emails[0]}?subject=${encodeURIComponent(
      `ASTRA enquiry: ${d.get("interest")}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="card grid gap-4 p-6 sm:grid-cols-2 sm:p-8">
      <label className="text-sm font-medium">
        Name
        <input name="name" required autoComplete="name" className={field} />
      </label>
      <label className="text-sm font-medium">
        Company
        <input name="company" autoComplete="organization" className={field} />
      </label>
      <label className="text-sm font-medium">
        Work email
        <input name="email" type="email" required autoComplete="email" className={field} />
      </label>
      <label className="text-sm font-medium">
        I’m interested in
        <select name="interest" className={field}>
          <option>Hardware & PCB Design</option>
          <option>Firmware Development</option>
          <option>Mobile App Development</option>
          <option>IoT Cloud & MQTT</option>
          <option>Atmos / ThermoProbe sensors</option>
          <option>Turnkey OEM / ODM</option>
        </select>
      </label>
      <label className="text-sm font-medium sm:col-span-2">
        Tell us about your product
        <textarea name="message" rows={4} required className={field} />
      </label>
      <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
        <button
          type="submit"
          className="rounded-full bg-cobalt px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-cobalt/25 transition-colors hover:bg-cobalt-dark"
        >
          Send enquiry →
        </button>
        {sent && (
          <span className="text-sm text-slate-500" role="status">
            Opening your email app… or write to {CONTACT.emails[0]}.
          </span>
        )}
      </div>
    </form>
  );
}
