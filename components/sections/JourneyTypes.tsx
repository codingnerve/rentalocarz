import Image from "next/image";
import type { JourneyType } from "@/data/journey-types";

export function JourneyTypes({ journeys }: { journeys: JourneyType[] }) {
  return (
    <section aria-labelledby="journeys-heading" className="bg-beige py-20">
      <div className="mx-auto max-w-[1400px] px-3 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-strong">
              Trip styles
            </p>
            <h2 id="journeys-heading" className="mt-2 max-w-lg text-3xl font-extrabold text-ink sm:text-4xl">
              Whatever the reason, there&apos;s a car for it.
            </h2>
          </div>
          <p className="max-w-xs text-sm text-ink-muted">
            Four common ways people use a rental — tell us yours and we&apos;ll match the car.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {journeys.map((j, i) => (
            <article
              key={j.slug}
              className="group overflow-hidden rounded-lg border border-line bg-surface-raised"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={j.image}
                  alt={`${j.name} trips`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded bg-ink px-2 py-1 text-[11px] font-bold tracking-widest text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="border-t-4 border-brand p-5">
                <h3 className="text-lg font-bold text-ink">{j.name}</h3>
                <p className="mt-1.5 text-sm text-ink-muted">{j.blurb}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
