import { Button } from "@/components/ui/Button";

const benefits = [
  {
    title: "Flexible Options",
    text: "Day, weekend, week or month — set the period that suits the trip, not the other way round.",
  },
  {
    title: "Clear Communication",
    text: "A named reply with concrete options and next steps — no ticket numbers, no bots.",
  },
  {
    title: "Travel Support",
    text: "Flight delayed? Plans changed? Tell us and we adjust the arrangement with you.",
  },
];

export function WhyRentalOCarz() {
  return (
    <section aria-labelledby="why-heading" className="mx-auto max-w-[1400px] px-3 py-20 sm:px-6">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="lg:sticky lg:top-32">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-strong">
            Why RentalOCarz
          </p>
          <h2 id="why-heading" className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">
            Everything you need to get rolling.
          </h2>
          <p className="mt-4 max-w-md text-ink-muted">
            No accounts, no checkout maze. Tell us your route and dates, and a
            real person replies with vehicles that fit and a quote for the
            whole period.
          </p>
          <div className="mt-7">
            <Button href="/contact#quote" size="lg">
              Start your enquiry
            </Button>
          </div>
        </div>

        <ul className="divide-y divide-line overflow-hidden rounded-lg border border-line bg-surface-raised">
          {benefits.map((b, i) => (
            <li key={b.title} className="flex gap-5 p-6 sm:p-7">
              <span
                className="text-3xl font-extrabold text-brand"
                style={{ fontFamily: "var(--font-sora)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-lg font-bold text-ink">{b.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{b.text}</p>
              </div>
            </li>
          ))}
          <li className="bg-ink p-6 text-on-ink sm:p-7">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">Easy enquiry</p>
            <p className="mt-2 text-lg font-bold text-white">One short form. A personal answer.</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
