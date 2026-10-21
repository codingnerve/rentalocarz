"use client";

import Link from "next/link";
import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

const AIRPORT_HUBS = [
  { code: "ATL", city: "Atlanta" },
  { code: "JFK", city: "New York" },
  { code: "LAX", city: "Los Angeles" },
  { code: "MCO", city: "Orlando" },
  { code: "MIA", city: "Miami" },
  { code: "LAS", city: "Las Vegas" },
  { code: "ORD", city: "Chicago" },
  { code: "DFW", city: "Dallas" },
  { code: "DEN", city: "Denver" },
  { code: "SFO", city: "San Francisco" },
  { code: "SEA", city: "Seattle" },
  { code: "BOS", city: "Boston" },
  { code: "EWR", city: "Newark" },
  { code: "IAH", city: "Houston" },
  { code: "PHX", city: "Phoenix" },
  { code: "FLL", city: "Fort Lauderdale" },
  { code: "IAD", city: "Washington DC" },
  { code: "SAN", city: "San Diego" },
  { code: "CLT", city: "Charlotte" },
  { code: "DTW", city: "Detroit" },
];

const CITY_HUBS = [
  { city: "Miami", state: "FL" },
  { city: "Orlando", state: "FL" },
  { city: "Las Vegas", state: "NV" },
  { city: "Los Angeles", state: "CA" },
  { city: "New York", state: "NY" },
  { city: "Chicago", state: "IL" },
  { city: "Dallas", state: "TX" },
  { city: "Houston", state: "TX" },
  { city: "Atlanta", state: "GA" },
  { city: "Phoenix", state: "AZ" },
];

const RENTAL_BRANDS = [
  "Hertz",
  "Avis",
  "Budget",
  "Alamo",
  "Dollar",
  "Thrifty",
  "Sixt",
  "Enterprise",
  "National",
];

type TabId = "airports" | "cities" | "brands";

const TABS: { id: TabId; label: string; note: string }[] = [
  { id: "airports", label: "Airports", note: "Pick an airport to start a request with terminal pick-up help." },
  { id: "cities", label: "Cities", note: "Downtown and neighborhood pick-up points in major cities." },
  { id: "brands", label: "Rental brands", note: "We are independent and help arrange rentals across the main national supplier networks." },
];

function Chip({
  href,
  onClick,
  primary,
  secondary,
}: {
  href: string;
  onClick: () => void;
  primary: string;
  secondary?: string;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="group flex items-center justify-between gap-2 rounded-md border border-line bg-surface px-3.5 py-3 text-sm transition-colors hover:border-brand hover:bg-mint"
    >
      <span className="flex min-w-0 items-baseline gap-2">
        <span className="font-extrabold text-ink group-hover:text-brand-strong">{primary}</span>
        {secondary && <span className="truncate text-xs text-ink-muted">{secondary}</span>}
      </span>
      <span aria-hidden="true" className="text-brand opacity-0 transition-opacity group-hover:opacity-100">
        →
      </span>
    </Link>
  );
}

export function PopularHubsDirectory() {
  const [tab, setTab] = useState<TabId>("airports");
  const current = TABS.find((t) => t.id === tab)!;

  return (
    <section
      id="directory"
      aria-labelledby="directory-heading"
      className="mx-auto max-w-[1400px] scroll-mt-32 px-3 py-20 sm:px-6"
    >
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-strong">Quick finder</p>
          <h2 id="directory-heading" className="mt-2 text-3xl font-extrabold text-ink">
            Airports, cities and brands at a glance.
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-muted">{current.note}</p>

          <div role="tablist" aria-label="Directory" className="mt-6 flex flex-col gap-2">
            {TABS.map((t) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={tab === t.id}
                onClick={() => setTab(t.id)}
                className={`flex items-center justify-between rounded-md border-2 px-4 py-3 text-left text-sm font-bold transition-colors ${
                  tab === t.id
                    ? "border-ink bg-ink text-white"
                    : "border-line bg-surface-raised text-ink hover:border-ink"
                }`}
              >
                {t.label}
                <span aria-hidden="true">{tab === t.id ? "●" : "○"}</span>
              </button>
            ))}
          </div>
        </div>

        <div role="tabpanel" className="rounded-lg border border-line bg-surface-raised p-5 sm:p-6">
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 xl:grid-cols-4">
            {tab === "airports" &&
              AIRPORT_HUBS.map((a) => (
                <Chip
                  key={a.code}
                  href={`/contact?pickupLocation=${encodeURIComponent(`${a.city} Airport (${a.code})`)}#quote`}
                  onClick={() => trackEvent("directory_clicked", { type: "airport", code: a.code })}
                  primary={a.code}
                  secondary={a.city}
                />
              ))}
            {tab === "cities" &&
              CITY_HUBS.map((c) => (
                <Chip
                  key={c.city}
                  href={`/contact?pickupLocation=${encodeURIComponent(c.city)}#quote`}
                  onClick={() => trackEvent("directory_clicked", { type: "city", city: c.city })}
                  primary={c.city}
                  secondary={c.state}
                />
              ))}
            {tab === "brands" &&
              RENTAL_BRANDS.map((b) => (
                <Chip
                  key={b}
                  href={`/contact?brand=${encodeURIComponent(b)}#quote`}
                  onClick={() => trackEvent("directory_clicked", { type: "brand", brand: b })}
                  primary={b}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
