"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { RentalLocation } from "@/data/locations";
import { site, telHref } from "@/lib/site";
import { trackEvent } from "@/lib/analytics";

const PHONE_PATH =
  "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z";

export function LocationExplorer({ locations }: { locations: RentalLocation[] }) {
  const [filter, setFilter] = useState<"usa" | "all">("usa");
  const tel = telHref();

  const shown = useMemo(
    () => (filter === "usa" ? locations.filter((l) => l.isUsa) : locations),
    [filter, locations],
  );
  const usaCount = locations.filter((l) => l.isUsa).length;

  return (
    <section
      id="locations"
      aria-labelledby="locations-heading"
      className="bg-beige py-20"
    >
      <div className="mx-auto max-w-[1400px] scroll-mt-32 px-3 sm:px-6">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-strong">Where we pick up</p>
        <div className="mt-2 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 id="locations-heading" className="text-3xl font-extrabold text-ink sm:text-4xl">
              Popular pick-up spots across the U.S.
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">
              Choose a city or airport to start your request, or call and tell us where you are headed.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div role="group" aria-label="Location filter" className="inline-flex overflow-hidden rounded-md border-2 border-ink">
              {(
                [
                  ["usa", `U.S. (${usaCount})`],
                  ["all", `All (${locations.length})`],
                ] as const
              ).map(([id, label]) => (
                <button
                  key={id}
                  type="button"
                  aria-pressed={filter === id}
                  onClick={() => setFilter(id)}
                  className={`px-4 py-2 text-xs font-bold transition-colors ${
                    filter === id ? "bg-ink text-white" : "bg-transparent text-ink hover:bg-ink/10"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            {tel && (
              <a
                href={tel}
                onClick={() => trackEvent("call_clicked", { placement: "locations_section" })}
                className="inline-flex items-center gap-2 rounded-md bg-brand px-4 py-2.5 text-xs font-bold text-on-brand transition-colors hover:bg-brand-strong"
              >
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d={PHONE_PATH} />
                </svg>
                {site.phoneDisplay || site.phone}
              </a>
            )}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((loc, i) => (
            <Link
              key={loc.slug}
              href={`/contact?pickupLocation=${encodeURIComponent(loc.city)}#quote`}
              onClick={() => trackEvent("location_clicked", { city: loc.slug })}
              className={`group relative isolate flex min-h-72 flex-col justify-end overflow-hidden rounded-lg bg-ink ${
                i === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <Image
                src={loc.image}
                alt={`${loc.city} car rental`}
                fill
                sizes={i === 0 ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
                className="-z-10 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/40 to-transparent" />

              <span className="absolute left-0 top-4 bg-white px-3 py-1 text-[11px] font-extrabold tracking-wider text-ink">
                {loc.airportCode}
              </span>

              <div className="flex items-end justify-between gap-4 p-5 text-white">
                <div>
                  <h3 className="text-2xl font-extrabold">{loc.city}</h3>
                  <p className="text-sm text-white/80">
                    {loc.highlight}
                    {loc.state ? ` · ${loc.state}` : ""}
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-white/70">from</span>
                  <span className="text-xl font-extrabold">
                    ${loc.startingPrice}
                    <span className="text-xs font-medium text-white/80">/day*</span>
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between bg-brand px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-on-brand">
                <span>Reserve in {loc.city}</span>
                <span className="transition-transform group-hover:translate-x-1">Get a quote →</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 grid gap-6 rounded-lg bg-ink p-7 text-on-ink sm:p-9 md:grid-cols-[1.5fr_1fr] md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">Nationwide support</p>
            <h3 className="mt-1.5 text-xl font-extrabold text-white sm:text-2xl">
              Heading somewhere that isn&apos;t listed?
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-on-ink/75">
              We arrange rentals at airports and neighborhood branches across the country. Call us or send a quick quote request and we will confirm your exact pick-up point.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            {tel && (
              <a
                href={tel}
                onClick={() => trackEvent("call_clicked", { placement: "locations_banner" })}
                className="inline-flex items-center gap-2 rounded-md bg-brand px-5 py-3 text-xs font-bold uppercase tracking-wider text-on-brand transition-colors hover:bg-brand-strong"
              >
                Call {site.phoneDisplay || site.phone}
              </a>
            )}
            <Link
              href="/contact#quote"
              className="inline-flex items-center gap-2 rounded-md border-2 border-white/30 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Request a quote
            </Link>
          </div>
        </div>
        <p className="mt-4 text-[11px] text-ink-muted">
          *Example starting rates only. Final prices depend on pick-up date, vehicle availability, rental length and seasonal demand, and every booking is confirmed with our team.
        </p>
      </div>
    </section>
  );
}
