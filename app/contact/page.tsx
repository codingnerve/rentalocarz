import type { Metadata } from "next";
import { site, telHref, whatsappHref } from "@/lib/site";
import { QuoteForm, type QuoteDefaults } from "@/components/QuoteForm";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Share where and when you need a car and RentalOCarz replies with vehicle options and a personal rental quote.",
  alternates: { canonical: "/contact" },
};

const DEFAULT_KEYS = [
  "pickupLocation",
  "dropoffLocation",
  "pickupDate",
  "dropoffDate",
  "vehiclePreference",
] as const;

const expectations = [
  "We read your request and check what can be arranged",
  "You get vehicle options and a personal quote",
  "Nothing is booked until you say so",
];

export default async function ContactPage({ searchParams }: PageProps<"/contact">) {
  const params = await searchParams;
  const defaults: QuoteDefaults = {};
  for (const key of DEFAULT_KEYS) {
    const value = params[key];
    if (typeof value === "string" && value) defaults[key] = value.slice(0, 200);
  }

  const tel = telHref();
  const wa = whatsappHref();

  return (
    <>
      <PageHero eyebrow="Get a quote" title={<>Tell us about your trip.</>}>
        <p>
          Give us your route and dates and we reply with vehicle options and a personal quote. No account, no
          obligation.
        </p>
      </PageHero>

      <div className="mx-auto max-w-[1400px] px-3 py-14 sm:px-6 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.7fr]">
          <aside className="order-last space-y-6 lg:order-first">
            {tel && (
              <a
                href={tel}
                className="block rounded-lg bg-brand p-6 text-on-brand transition-colors hover:bg-brand-strong"
              >
                <span className="block text-xs font-bold uppercase tracking-[0.2em] text-on-brand/80">
                  Prefer to talk?
                </span>
                <span className="mt-1 block text-2xl font-extrabold" style={{ fontFamily: "var(--font-sora)" }}>
                  {site.phoneDisplay}
                </span>
                <span className="mt-1 block text-sm text-on-brand/90">Tap to call our team</span>
              </a>
            )}

            <div className="rounded-lg border border-line bg-surface-raised p-6">
              <h2 className="text-sm font-bold uppercase tracking-widest text-ink">What happens next</h2>
              <ol className="mt-4 space-y-4">
                {expectations.map((e, i) => (
                  <li key={e} className="flex gap-3 text-sm text-ink-soft">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-ink text-xs font-bold text-white">
                      {i + 1}
                    </span>
                    {e}
                  </li>
                ))}
              </ol>
            </div>

            {(wa || site.email) && (
              <ul className="space-y-2 text-sm">
                {wa && (
                  <li>
                    <a href={wa} target="_blank" rel="noopener noreferrer" className="font-bold text-brand-strong hover:underline">
                      Message us on WhatsApp
                    </a>
                  </li>
                )}
                {site.email && (
                  <li>
                    <a href={`mailto:${site.email}`} className="font-bold text-brand-strong hover:underline">
                      {site.email}
                    </a>
                  </li>
                )}
              </ul>
            )}
          </aside>

          <section
            id="quote"
            aria-label="Quote request form"
            className="scroll-mt-32 rounded-lg border border-line border-t-4 border-t-brand bg-surface-raised p-6 shadow-sm sm:p-8"
          >
            <h2 className="text-xl font-extrabold text-ink">Request your quote</h2>
            <p className="mb-6 mt-1 text-sm text-ink-muted">The more detail you give, the better our first reply.</p>
            <QuoteForm defaults={defaults} source="contact-page" />
          </section>
        </div>
      </div>
    </>
  );
}
