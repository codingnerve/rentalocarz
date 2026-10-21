import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { locations } from "@/data/locations";
import { PageHero } from "@/components/PageHero";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Rental Locations",
  description:
    "Popular pick-up cities and airports for RentalOCarz enquiries. Somewhere else in mind? Send an enquiry and we confirm coverage for your exact pick-up point.",
  alternates: { canonical: "/locations" },
};

export default function LocationsPage() {
  return (
    <>
      <PageHero eyebrow="Locations" title={<>Where should the car be waiting?</>}>
        <p>
          These are the places people ask about most. Starting somewhere else? Send an enquiry anyway — every
          quote confirms coverage for your exact pick-up point.
        </p>
      </PageHero>

      <div className="mx-auto max-w-[1400px] px-3 py-16 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((loc) => (
            <article
              key={loc.slug}
              className="group grid grid-cols-[120px_1fr] overflow-hidden rounded-lg border border-line bg-surface-raised transition-shadow hover:shadow-lg hover:shadow-ink/10 sm:grid-cols-[150px_1fr]"
            >
              <div className="relative min-h-40 overflow-hidden bg-beige">
                <Image
                  src={loc.image}
                  alt={`${loc.city}, ${loc.country}`}
                  fill
                  sizes="150px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col p-5">
                <div className="flex items-start justify-between gap-2">
                  <h2 className="text-lg font-extrabold text-ink">{loc.city}</h2>
                  <span className="rounded bg-ink px-2 py-0.5 text-[11px] font-bold tracking-wider text-white">
                    {loc.airportCode}
                  </span>
                </div>
                <p className="text-sm text-ink-muted">{loc.state ? `${loc.state}, ${loc.country}` : loc.country}</p>
                <p className="mt-1 text-xs text-ink-muted">{loc.highlight}</p>
                <div className="mt-auto flex items-center justify-between gap-2 pt-4">
                  <span className="text-xs font-bold text-brand-strong">from ${loc.startingPrice}/day*</span>
                  <Link
                    href={`/contact?pickupLocation=${encodeURIComponent(loc.city)}#quote`}
                    className="text-xs font-bold uppercase tracking-wider text-ink hover:text-brand"
                  >
                    Enquire →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-6 text-xs text-ink-muted">
          *Example starting rates. Your quote confirms the actual price for your dates and vehicle.
        </p>
      </div>
      <FinalCTA />
    </>
  );
}
