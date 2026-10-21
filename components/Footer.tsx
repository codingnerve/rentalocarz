import Link from "next/link";
import { footerColumns } from "@/data/navigation";
import { site, telHref } from "@/lib/site";
import { Logo } from "@/components/Logo";

export function Footer() {
  const tel = telHref();

  return (
    <footer className="bg-ink pb-16 text-on-ink md:pb-0">
      {/* Call band */}
      <div className="border-b border-white/10 bg-brand text-on-brand">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-4 px-3 py-8 sm:flex-row sm:items-center sm:px-6">
          <p className="max-w-md text-xl font-extrabold leading-snug sm:text-2xl" style={{ fontFamily: "var(--font-sora)" }}>
            Rather talk it through? Call and a person picks up.
          </p>
          {tel && (
            <a
              href={tel}
              className="inline-flex items-center gap-3 rounded-md bg-white px-6 py-3.5 text-lg font-extrabold text-ink shadow-md transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-brand" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {site.phoneDisplay}
            </a>
          )}
        </div>
      </div>

      <div className="mx-auto grid max-w-[1400px] gap-10 px-3 py-14 sm:px-6 md:grid-cols-[1.3fr_repeat(4,1fr)]">
        <div className="max-w-xs">
          <Logo tone="light" />
          <p className="mt-4 text-sm leading-relaxed text-on-ink/70">
            {site.tagline} Tell us where you&apos;re headed and we&apos;ll line up the
            right rental for the trip.
          </p>
          <a href={`mailto:${site.email}`} className="mt-4 inline-block text-sm font-semibold text-white hover:text-brand">
            {site.email}
          </a>
        </div>
        {footerColumns.map((col) => (
          <nav key={col.heading} aria-label={col.heading}>
            <h2 className="text-xs font-bold uppercase tracking-widest text-brand">{col.heading}</h2>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((link) => (
                <li key={`${col.heading}-${link.href}`}>
                  <Link href={link.href} className="text-sm text-on-ink/80 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      {/* Independent service disclaimer */}
      <div className="border-t border-white/10 bg-black/25 py-8 sm:py-10">
        <div className="mx-auto max-w-[1400px] px-3 sm:px-6">
          <div className="grid items-start gap-6 text-xs text-on-ink/60 lg:grid-cols-[260px_1fr_1fr] lg:gap-8">
            <div>
              <h3 className="text-sm font-bold text-on-ink">Independent Service Disclaimer</h3>
              <Link href="/terms" className="mt-1 inline-block font-semibold text-brand hover:underline">
                Read full disclaimer
              </Link>
            </div>
            <div className="space-y-3 leading-relaxed">
              <p>
                {site.domain} is an independent car rental booking assistance provider. We are not affiliated with, authorized by, endorsed by, or sponsored by any car rental company, vehicle manufacturer, travel brand, or their respective subsidiaries or affiliates.
              </p>
              <p>
                Our services include assisting customers with car rental reservations, itinerary changes, cancellations where permitted, booking support, and general travel-related assistance. We act solely as an independent intermediary to help customers access car rental services offered by third-party providers.
              </p>
            </div>
            <div className="space-y-3 leading-relaxed">
              <p>
                All company names, trademarks, logos, and brand names appearing on this website are the property of their respective owners and are used solely for descriptive and identification purposes.
              </p>
              <p>
                By using this website, you acknowledge that {site.domain} is an independent service provider and not the official website or customer support channel of any car rental company.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-3 px-3 py-6 text-xs text-on-ink/60 sm:flex-row sm:items-center sm:px-6">
          <p>
            © {site.name}. All rights reserved. · {site.domain}
          </p>
          <div className="flex flex-wrap gap-5">
            <Link href="/about" className="hover:text-white">About Us</Link>
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
