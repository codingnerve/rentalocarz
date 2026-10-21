import { Button } from "@/components/ui/Button";
import { site, telHref } from "@/lib/site";

export function FinalCTA() {
  const tel = telHref();

  return (
    <section aria-labelledby="cta-heading" className="relative overflow-hidden bg-brand py-20 text-on-brand">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, transparent 0 28px, rgba(255,255,255,0.35) 28px 30px)",
        }}
      />
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 id="cta-heading" className="text-3xl font-extrabold sm:text-5xl">
            Ready when you are.
          </h2>
          <p className="mt-4 max-w-md text-lg text-on-brand/90">
            Tell us what you need and we&apos;ll point you to the right rental option.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/#vehicles" variant="onBrand" size="lg">
              Browse Cars
            </Button>
            {tel ? (
              <a
                href={tel}
                className="inline-flex min-h-12 items-center justify-center rounded-md border-2 border-white/60 px-7 py-3.5 text-base font-bold text-white transition-colors hover:bg-white/10"
              >
                Call {site.phoneDisplay}
              </a>
            ) : (
              <Button
                href="/contact#quote"
                size="lg"
                className="border-2 border-white/60 bg-transparent text-on-brand hover:bg-brand-strong"
              >
                Get a Quote
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
