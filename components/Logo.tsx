import Image from "next/image";

export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <polygon points="24,2 31,10 24,18 17,10" fill="#00C0F0" />
      <polygon points="4,44 22,14 28,24 16,44" fill="#0A47ED" />
      <polygon points="44,44 26,14 20,24 32,44" fill="#0838BD" />
    </svg>
  );
}

/** Official ASTRA logo (mark + wordmark), shown on a white tile because the source JPG has a white background. */
export function Logo({ onDark = false }: { onDark?: boolean }) {
  return (
    <span className={`inline-block rounded-lg bg-white p-1 ${onDark ? "" : "border border-line"}`}>
      <Image
        src="/img/logo-full.jpg"
        alt="ASTRA e - Automation"
        width={620}
        height={400}
        sizes="96px"
        priority
        className="h-14 w-auto"
      />
    </span>
  );
}
