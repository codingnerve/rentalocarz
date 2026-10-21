"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { trackEvent } from "@/lib/analytics";
import type { Vehicle } from "@/data/vehicles";

const TABS = [
  { id: "all", label: "All Vehicles", slugs: null },
  { id: "suv-family", label: "SUVs & Vans", slugs: ["suv", "family"] },
  { id: "sedan-compact", label: "Sedans & Compacts", slugs: ["sedan", "compact", "economy"] },
  { id: "luxury-electric", label: "Luxury & Electric", slugs: ["luxury", "electric", "convertible"] },
] as const;

function Spec({ path, label }: { path: string; label: string }) {
  return (
    <li className="flex items-center gap-1.5 text-xs font-semibold text-ink-soft">
      <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-brand" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d={path} />
      </svg>
      <span className="truncate">{label}</span>
    </li>
  );
}

const ICON = {
  people: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
  bag: "M6 7h12l1 14H5L6 7zM9 7V5a3 3 0 0 1 6 0v2",
  gear: "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z",
  fuel: "M3 22h12M4 9h10M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 4 0V9.83a2 2 0 0 0-.59-1.42L18 5",
};

function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  const quoteUrl = `/contact?vehicle=${vehicle.slug}#quote`;

  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-line bg-surface-raised transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/10">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-beige">
        <Image
          src={vehicle.image}
          alt={`${vehicle.name} rental car`}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-0 top-4 bg-brand px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-on-brand">
          {vehicle.highlight}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-extrabold text-ink">{vehicle.name}</h3>
        <p className="mt-0.5 text-sm font-medium text-brand-strong">{vehicle.tagline}</p>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-ink-muted">{vehicle.description}</p>

        <ul className="mt-4 grid grid-cols-2 gap-x-3 gap-y-2 border-t border-line pt-4">
          <Spec path={ICON.people} label={`${vehicle.passengers} passengers`} />
          <Spec path={ICON.bag} label={`${vehicle.bags} bags`} />
          <Spec path={ICON.gear} label={vehicle.transmission} />
          <Spec path={ICON.fuel} label={vehicle.fuel} />
        </ul>
      </div>

      <div className="flex items-center justify-between gap-3 bg-ink px-5 py-3.5 text-on-ink">
        <p className="leading-tight">
          <span className="block text-[10px] font-bold uppercase tracking-wider text-on-ink/60">
            Example rate from
          </span>
          <span className="text-lg font-extrabold text-white">
            ${vehicle.startingPrice}
            <span className="text-xs font-medium text-on-ink/70">/day*</span>
          </span>
        </p>
        <Link
          href={quoteUrl}
          onClick={() => trackEvent("vehicle_clicked", { category: vehicle.slug })}
          className="inline-flex items-center gap-1.5 rounded-md bg-brand px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-on-brand transition-colors hover:bg-brand-strong active:scale-[0.98]"
        >
          Get this car
          <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M4 10h12m-5-5l5 5-5 5" />
          </svg>
        </Link>
      </div>
    </article>
  );
}

export function VehicleShowcase({ vehicles: vehicleList }: { vehicles: Vehicle[] }) {
  const [active, setActive] = useState<string>("all");

  const shown = useMemo(() => {
    const tab = TABS.find((t) => t.id === active);
    if (!tab || !tab.slugs) return vehicleList;
    const allowed: readonly string[] = tab.slugs;
    return vehicleList.filter((v) => allowed.includes(v.slug));
  }, [active, vehicleList]);

  return (
    <section
      id="vehicles"
      aria-labelledby="vehicles-heading"
      className="mx-auto max-w-[1400px] scroll-mt-32 px-3 pb-20 pt-20 sm:px-6"
    >
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-strong">Our fleet</p>
      <div className="mt-2 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h2 id="vehicles-heading" className="text-3xl font-extrabold text-ink sm:text-4xl">
            A size for every kind of trip.
          </h2>
          <p className="mt-2 max-w-xl text-sm text-ink-muted">
            From thrifty city cars to roomy SUVs, luxury sedans and open-top convertibles — pick the class and we find the car.
          </p>
        </div>

        <div role="tablist" aria-label="Vehicle categories" className="flex flex-wrap border-b-2 border-line">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={active === tab.id}
              onClick={() => setActive(tab.id)}
              className={`-mb-0.5 border-b-2 px-4 py-2.5 text-sm font-bold transition-colors ${
                active === tab.id
                  ? "border-brand text-brand"
                  : "border-transparent text-ink-muted hover:text-ink"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {shown.map((vehicle) => (
          <VehicleCard key={vehicle.slug} vehicle={vehicle} />
        ))}
      </div>

      <p className="mt-8 border-l-4 border-brand bg-surface-raised p-4 text-xs leading-relaxed text-ink-muted">
        <strong className="text-ink-soft">*About these rates:</strong> Prices shown are examples. Actual rates change with
        location, availability, driver age and dates, and every enquiry gets a personal quote before you commit to anything.
      </p>
    </section>
  );
}
