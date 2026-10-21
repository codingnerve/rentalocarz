import type { ReactNode } from "react";

/**
 * Navy header band shared by the inner pages (About, FAQ, Contact,
 * Locations, legal). Keeps those pages visually distinct from the home hero.
 */
export function PageHero({
  eyebrow,
  title,
  children,
  aside,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-on-ink">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, transparent 0 22px, #fff 22px 23px)",
        }}
      />
      <div className="absolute inset-y-0 left-0 w-1.5 bg-brand" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-[1400px] items-center gap-8 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-[1.3fr_1fr]">
        <div className="animate-fade-up">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand">{eyebrow}</p>
          <h1 className="mt-4 max-w-2xl text-3xl font-extrabold leading-[1.1] text-white sm:text-5xl">
            {title}
          </h1>
          {children && <div className="mt-5 max-w-xl text-lg text-on-ink/75">{children}</div>}
        </div>
        {aside && <div>{aside}</div>}
      </div>
    </section>
  );
}
