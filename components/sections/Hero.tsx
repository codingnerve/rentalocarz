import Image from "next/image";
import { heroImages } from "@/data/images";
import { site, telHref } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { SearchWidget } from "@/components/SearchWidget";

export function Hero() {
  const tel = telHref();

  return (
    <section aria-label="Intro" className="relative">
      {/* Dark hero band with the photo bleeding in from the right */}
      <div className="relative overflow-hidden bg-ink text-on-ink">
        <div className="absolute inset-y-0 right-0 hidden w-[55%] lg:block" aria-hidden="true">
          <Image
            src={heroImages.home}
            alt=""
            fill
            priority
            sizes="55vw"
            className="object-cover"
            style={{ clipPath: "polygon(14% 0, 100% 0, 100% 100%, 0 100%)" }}
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-ink via-ink/20 to-transparent"
            style={{ clipPath: "polygon(14% 0, 100% 0, 100% 100%, 0 100%)" }}
          />
        </div>

        <div className="relative mx-auto max-w-[1400px] px-3 pb-36 pt-14 sm:px-6 md:pt-20 lg:pb-44">
          <div className="max-w-xl animate-fade-up">
            <p className="inline-flex items-center gap-2 border-l-4 border-brand pl-3 text-xs font-bold uppercase tracking-[0.2em] text-on-ink/80">
              Rentals without the runaround
            </p>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-[3.6rem]">
              The right car for <span className="text-brand">the way you travel</span>.
            </h1>
            <p className="mt-5 max-w-md text-lg text-on-ink/75">
              Look over your options, pick the vehicle that suits the trip and
              send your rental request in a few quick steps.
            </p>
            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <Button href="#vehicles" size="lg" className="w-full text-sm font-extrabold uppercase tracking-wide sm:w-auto sm:text-base">
                Browse Cars
              </Button>
              {tel ? (
                <a
                  href={tel}
                  className="inline-flex w-full items-center justify-center gap-2.5 rounded-md border-2 border-white/30 px-6 py-3.5 text-sm font-extrabold uppercase tracking-wide text-white transition-colors hover:border-white hover:bg-white/10 active:scale-[0.98] sm:w-auto sm:text-base"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 fill-none stroke-current stroke-[2.5]" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>Call {site.phoneDisplay || site.phone}</span>
                </a>
              ) : (
                <Button href="/contact#quote" variant="secondary" size="lg" className="w-full sm:w-auto">
                  Get a Quote
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Search panel pulled up over the hero edge */}
      <div className="relative z-30 mx-auto -mt-24 max-w-[1400px] px-3 pb-6 sm:px-6 lg:-mt-28">
        <SearchWidget />
      </div>
    </section>
  );
}
