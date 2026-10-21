import type { Metadata } from "next";
import Image from "next/image";
import { site, telHref } from "@/lib/site";
import { heroImages } from "@/data/images";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/PageHero";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "About Us | Independent Car Rental Help",
  description:
    "RentalOCarz is an independent service that helps travelers line up rental cars, compare vehicle classes and get practical support along the way.",
  alternates: { canonical: "/about" },
};

const principles = [
  {
    title: "Independent by design",
    text: "We are not owned by, or tied to, any rental brand. That lets us focus on what suits your trip rather than on a single supplier's inventory.",
  },
  {
    title: "A lighter way to reserve",
    text: "Pick-up details, dates, a vehicle preference and a way to reach you — that is all we ask for. No accounts, no passwords.",
  },
  {
    title: "Help when plans move",
    text: "Questions about a booking, an itinerary change or a cancellation? Get in touch and we help where the provider's policy allows.",
  },
];

const timeline = [
  { step: "Ask", text: "Send your route, dates and any preferences." },
  { step: "Compare", text: "We reply with vehicle options and a personal quote." },
  { step: "Decide", text: "Review the details. Nothing happens until you confirm." },
  { step: "Drive", text: "You get pick-up instructions and hit the road." },
];

const checklist = [
  "Vehicle options from third-party rental providers",
  "Guidance for airport and city pick-up requests",
  "Reservation help by phone and email",
  "Plain, timely replies to every enquiry",
];

export default function AboutPage() {
  const tel = telHref();

  return (
    <>
      <PageHero
        eyebrow={`About ${site.name}`}
        title={<>Renting a car should take minutes, not an afternoon.</>}
        aside={
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg border-4 border-white/10">
            <Image
              src={heroImages["airport-car-rental"]}
              alt="Rental car waiting at an airport terminal"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        }
      >
        <p>
          {site.name} is an independent booking-assistance service. We help travelers request rental cars,
          compare vehicle classes and get practical support while they plan.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Button href="/contact#quote" size="lg">
            Request a Quote
          </Button>
          {tel && (
            <a
              href={tel}
              className="inline-flex min-h-12 items-center justify-center rounded-md border-2 border-white/30 px-6 py-3.5 text-base font-bold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Call {site.phoneDisplay}
            </a>
          )}
        </div>
      </PageHero>

      {/* Principles */}
      <section className="mx-auto max-w-[1400px] px-3 py-20 sm:px-6">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-strong">What we stand for</p>
        <h2 className="mt-2 max-w-2xl text-3xl font-extrabold text-ink sm:text-4xl">
          Three ideas behind every enquiry we handle.
        </h2>
        <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-3">
          {principles.map((p, i) => (
            <div key={p.title} className="bg-surface-raised p-8">
              <span className="text-4xl font-extrabold text-brand" style={{ fontFamily: "var(--font-sora)" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-xl font-bold text-ink">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process timeline */}
      <section className="bg-beige py-20">
        <div className="mx-auto max-w-[1400px] px-3 sm:px-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-strong">How we work</p>
          <h2 className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">From first message to first mile.</h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-4">
            {timeline.map((t, i) => (
              <li key={t.step} className="relative border-t-4 border-ink pt-5">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-strong">Step {i + 1}</span>
                <h3 className="mt-1 text-xl font-extrabold text-ink">{t.step}</h3>
                <p className="mt-2 text-sm text-ink-muted">{t.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Services + contact */}
      <section className="mx-auto max-w-[1400px] px-3 py-20 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-lg bg-ink p-8 text-on-ink sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">How we can help</p>
            <h2 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">
              Support for reservations, changes and rental questions.
            </h2>
            <p className="mt-4 leading-relaxed text-on-ink/75">
              Send us your rental details and we help with booking assistance, itinerary changes, cancellation
              questions where permitted, and the practical side of renting a car.
            </p>
            <ul className="mt-6 space-y-3">
              {checklist.map((c) => (
                <li key={c} className="flex items-start gap-3 text-sm font-medium text-white">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded bg-brand text-on-brand">
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  {c}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href="/contact#quote" variant="onBrand" size="lg">
                Submit a Rental Enquiry
              </Button>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-lg border border-line bg-surface-raised p-8 sm:p-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-strong">Reach us</p>
              <h2 className="mt-3 text-2xl font-extrabold text-ink sm:text-3xl">Talk to a person.</h2>
              <p className="mt-3 text-sm text-ink-muted">{site.topbarTagline}</p>
            </div>
            <div className="mt-8 space-y-3">
              {tel && (
                <a href={tel} className="flex items-center justify-between rounded-md border-2 border-ink px-5 py-4 text-lg font-extrabold text-ink transition-colors hover:bg-ink hover:text-white">
                  {site.phoneDisplay}
                  <span className="text-xs font-bold uppercase tracking-wider text-brand">Call now →</span>
                </a>
              )}
              {site.email && (
                <a href={`mailto:${site.email}`} className="flex items-center justify-between rounded-md border border-line px-5 py-4 text-sm font-bold text-ink transition-colors hover:border-ink">
                  {site.email}
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-strong">Email →</span>
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="mt-6 border-l-4 border-brand bg-surface-raised p-6 text-sm leading-relaxed text-ink-muted">
          <p className="font-bold text-ink">We are not a rental company.</p>
          <p className="mt-1">
            {site.domain} is an independent service provider and not the official website or customer-support
            channel of any car rental company. We do not own rental vehicles or run rental counters, and final
            availability, pricing and terms depend on the rental provider. All brand names and trademarks belong
            to their respective owners and appear only for identification.
          </p>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
