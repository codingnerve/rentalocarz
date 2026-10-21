import type { Metadata } from "next";
import Link from "next/link";
import { site, telHref } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { FAQInteractive } from "@/components/sections/FAQInteractive";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "FAQ | RentalOCarz Help Center",
  description:
    "Answers about RentalOCarz enquiries, vehicle classes, airport pick-ups, quotes and changes before you confirm a rental.",
  alternates: { canonical: "/faq" },
};

const highlights = [
  {
    title: "No account needed",
    text: "Send your route and dates through one short form — no passwords and no checkout maze.",
  },
  {
    title: "Quote before commitment",
    text: "Every reply lists vehicle options and a price for your whole period before anything is confirmed.",
  },
  {
    title: "People, not scripts",
    text: "A member of our team reads and answers your enquiry from the first message to pick-up planning.",
  },
];

export default function FaqPage() {
  const tel = telHref();

  return (
    <>
      <PageHero eyebrow="Help center" title={<>Straight answers before you set off.</>}>
        <p>
          How {site.name} works, what to send us and what happens before a rental is confirmed.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          {tel && (
            <a
              href={tel}
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-brand px-6 py-3.5 text-base font-bold text-on-brand transition-colors hover:bg-brand-strong"
            >
              Call {site.phoneDisplay}
            </a>
          )}
          <Link
            href="/contact#quote"
            className="inline-flex min-h-12 items-center justify-center rounded-md border-2 border-white/30 px-6 py-3.5 text-base font-bold text-white transition-colors hover:border-white hover:bg-white/10"
          >
            Ask a question
          </Link>
        </div>
      </PageHero>

      <section className="mx-auto max-w-[1400px] px-3 pt-14 sm:px-6">
        <ul className="grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-3">
          {highlights.map((h) => (
            <li key={h.title} className="bg-surface-raised p-6">
              <h2 className="text-base font-bold text-ink">{h.title}</h2>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{h.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-3 py-16 sm:px-6">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-strong">Browse topics</p>
        <h2 className="mt-1 text-2xl font-extrabold text-ink sm:text-3xl">Find your answer fast.</h2>
        <p className="mb-8 mt-2 text-sm text-ink-muted">Search by keyword or choose a topic.</p>
        <FAQInteractive />
      </section>

      <section className="mx-auto max-w-[1400px] px-3 pb-20 sm:px-6">
        <div className="grid items-center gap-6 rounded-lg bg-ink p-8 text-on-ink sm:p-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">Still unsure?</p>
            <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
              Ask us about your specific route.
            </h2>
            <p className="mt-3 max-w-lg text-on-ink/75">
              Speak to our team directly or send your dates for a personal quote with no pressure.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            {tel && (
              <Button href={tel} variant="onBrand" size="lg">
                {site.phoneDisplay}
              </Button>
            )}
            <Button href="/contact#quote" size="lg">
              Get a Quote
            </Button>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
