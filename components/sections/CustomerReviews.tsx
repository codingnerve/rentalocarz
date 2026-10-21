"use client";

import Link from "next/link";
import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

/**
 * Placeholder traveler feedback. Replace with genuine, attributable
 * reviews (and add rating / count claims only when they are real).
 */
type Review = {
  id: string;
  name: string;
  city: string;
  vehicle: string;
  tripType: "family" | "business" | "airport" | "leisure";
  tripLabel: string;
  headline: string;
  review: string;
  initials: string;
};

const REVIEWS: Review[] = [
  {
    id: "1",
    name: "Daniel & Hannah Brooks",
    city: "Orlando (MCO)",
    vehicle: "SUV",
    tripType: "family",
    tripLabel: "Family vacation",
    headline: "Landed with three kids and the car was waiting",
    review:
      "Four suitcases, three tired kids and a late flight — the SUV was clean, roomy and the pick-up directions were spot on. It took the stress right out of arrival day.",
    initials: "DB",
  },
  {
    id: "2",
    name: "Marcus Vale",
    city: "New York (JFK)",
    vehicle: "Luxury sedan",
    tripType: "business",
    tripLabel: "Business travel",
    headline: "A premium sedan when everything else was booked",
    review:
      "It was a packed conference week and I had nearly given up. One call later I had a sedan lined up at a rate I was told upfront. Straightforward and professional.",
    initials: "MV",
  },
  {
    id: "3",
    name: "Elena Rostova",
    city: "Los Angeles (LAX)",
    vehicle: "Convertible",
    tripType: "leisure",
    tripLabel: "Coastal road trip",
    headline: "Highway 1 with the top down",
    review:
      "I had wanted to drive the coast in a convertible for years. The car was in great shape, the quote matched what I paid, and the drive was everything I hoped for.",
    initials: "ER",
  },
  {
    id: "4",
    name: "Priya & Amit Shah",
    city: "Las Vegas (LAS)",
    vehicle: "8-seat minivan",
    tripType: "family",
    tripLabel: "National parks trip",
    headline: "Space for the whole extended family",
    review:
      "We needed eight seats for a Zion and Grand Canyon loop. The minivan was nearly new, quiet on the highway and had plenty of room for everyone's bags.",
    initials: "PS",
  },
  {
    id: "5",
    name: "Oliver Henderson",
    city: "Chicago (ORD)",
    vehicle: "Full-size sedan",
    tripType: "airport",
    tripLabel: "Visiting from abroad",
    headline: "Plain-English answers about a first U.S. rental",
    review:
      "Renting in another country is daunting. The team walked me through what I needed to bring and what to expect at the desk, with no pressure at all.",
    initials: "OH",
  },
  {
    id: "6",
    name: "Chloe & James Wright",
    city: "Miami (MIA)",
    vehicle: "Compact SUV",
    tripType: "airport",
    tripLabel: "Weekend getaway",
    headline: "Quick replies and an easy collection",
    review:
      "We got step-by-step terminal directions before landing and the car was ready on time. Great on fuel for the long drive down to the Keys.",
    initials: "CW",
  },
];

const FILTERS = [
  { id: "all", label: "All stories" },
  { id: "family", label: "Family" },
  { id: "business", label: "Business" },
  { id: "airport", label: "Airport" },
] as const;

export function CustomerReviews() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]["id"]>("all");
  const shown = filter === "all" ? REVIEWS : REVIEWS.filter((r) => r.tripType === filter);
  const [lead, ...rest] = shown;

  return (
    <section id="reviews" aria-labelledby="reviews-heading" className="mx-auto max-w-[1400px] scroll-mt-32 px-3 py-20 sm:px-6">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-strong">Traveler stories</p>
      <div className="mt-2 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <h2 id="reviews-heading" className="max-w-xl text-3xl font-extrabold text-ink sm:text-4xl">
          How trips went for people who called first.
        </h2>
        <div role="group" aria-label="Filter stories" className="flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              aria-pressed={filter === f.id}
              onClick={() => setFilter(f.id)}
              className={`rounded-md px-4 py-2 text-xs font-bold transition-colors ${
                filter === f.id ? "bg-ink text-white" : "border border-line bg-surface-raised text-ink-soft hover:border-ink"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {lead && (
        <div className="mt-10 grid gap-5 lg:grid-cols-[1.1fr_1fr]">
          {/* Featured story */}
          <figure className="relative flex flex-col justify-between overflow-hidden rounded-lg bg-ink p-8 text-on-ink sm:p-10">
            <span aria-hidden="true" className="absolute -top-4 right-6 text-[9rem] font-extrabold leading-none text-brand/25" style={{ fontFamily: "var(--font-sora)" }}>
              &rdquo;
            </span>
            <blockquote className="relative">
              <p className="text-2xl font-extrabold leading-snug text-white sm:text-3xl" style={{ fontFamily: "var(--font-sora)" }}>
                {lead.headline}
              </p>
              <p className="mt-5 max-w-lg leading-relaxed text-on-ink/80">{lead.review}</p>
            </blockquote>
            <figcaption className="relative mt-8 flex items-center gap-3 border-t border-white/10 pt-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-md bg-brand text-sm font-extrabold text-on-brand">
                {lead.initials}
              </span>
              <span className="text-sm">
                <span className="block font-bold text-white">{lead.name}</span>
                <span className="text-on-ink/70">
                  {lead.city} · {lead.vehicle} · {lead.tripLabel}
                </span>
              </span>
            </figcaption>
          </figure>

          {/* Compact stories */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {rest.slice(0, 2).map((r) => (
              <figure key={r.id} className="rounded-lg border border-line border-l-4 border-l-brand bg-surface-raised p-6">
                <blockquote>
                  <p className="font-bold text-ink">{r.headline}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{r.review}</p>
                </blockquote>
                <figcaption className="mt-4 text-xs text-ink-muted">
                  <span className="font-bold text-ink">{r.name}</span> · {r.city} · {r.vehicle}
                </figcaption>
              </figure>
            ))}
          </div>

          {rest.length > 2 && (
            <div className="grid gap-5 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
              {rest.slice(2).map((r) => (
                <figure key={r.id} className="rounded-lg border border-line border-l-4 border-l-brand bg-surface-raised p-6">
                  <blockquote>
                    <p className="font-bold text-ink">{r.headline}</p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">{r.review}</p>
                  </blockquote>
                  <figcaption className="mt-4 text-xs text-ink-muted">
                    <span className="font-bold text-ink">{r.name}</span> · {r.city} · {r.vehicle}
                  </figcaption>
                </figure>
              ))}
            </div>
          )}
        </div>
      )}

      <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-lg border border-line bg-surface-raised p-6 sm:flex-row sm:items-center sm:px-8">
        <div>
          <h3 className="font-bold text-ink">Planning your own trip?</h3>
          <p className="text-sm text-ink-muted">Send a quick request and get a personal quote with clear rates.</p>
        </div>
        <Link
          href="/contact#quote"
          onClick={() => trackEvent("quote_form_started", { source: "reviews_section" })}
          className="inline-flex shrink-0 items-center gap-2 rounded-md bg-brand px-6 py-3 text-xs font-bold uppercase tracking-wider text-on-brand transition-colors hover:bg-brand-strong active:scale-[0.98]"
        >
          Request a quote →
        </Link>
      </div>
    </section>
  );
}
