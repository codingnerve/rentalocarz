import Image from "next/image";
import { travelImages } from "@/data/images";
import { Button } from "@/components/ui/Button";

export function TravelStory() {
  return (
    <section aria-labelledby="story-heading" className="mx-auto max-w-[1400px] px-3 py-20 sm:px-6">
      <div className="grid overflow-hidden rounded-lg border border-line bg-surface-raised lg:grid-cols-2">
        <div className="flex flex-col justify-center p-8 sm:p-12">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-strong">
            The open road
          </p>
          <h2 id="story-heading" className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
            Where is your next drive taking you?
          </h2>
          <p className="mt-4 max-w-md text-ink-muted">
            Map out your next trip — browse rental options and see what fits the miles ahead.
          </p>
          <div className="mt-7">
            <Button href="#vehicles" size="lg">
              Explore Cars
            </Button>
          </div>
        </div>
        <div className="relative min-h-72 lg:min-h-96">
          <Image
            src={travelImages.story}
            alt="Open road stretching toward the horizon"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
