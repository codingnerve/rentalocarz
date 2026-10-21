const steps = [
  {
    title: "Tell us where you're headed",
    text: "Share your pick-up point, dates and anything the trip calls for.",
  },
  {
    title: "Pick your car",
    text: "We reply with vehicles that fit — choose the one you like best.",
  },
  {
    title: "Send your request",
    text: "Confirm the details and we arrange the rental with you.",
  },
  {
    title: "Get your confirmation",
    text: "You receive the final arrangement and pick-up instructions.",
  },
];

export function HowItWorks() {
  return (
    <section aria-labelledby="how-heading" className="bg-ink py-20 text-on-ink">
      <div className="mx-auto max-w-[1400px] px-3 sm:px-6">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">How it works</p>
        <h2 id="how-heading" className="mt-2 max-w-xl text-3xl font-extrabold text-white sm:text-4xl">
          Four steps from enquiry to the driver&apos;s seat.
        </h2>

        <ol className="mt-12 grid gap-px overflow-hidden rounded-lg bg-white/10 md:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.title} className="bg-ink p-7 transition-colors hover:bg-ink-soft">
              <span
                className="block text-5xl font-extrabold text-brand"
                style={{ fontFamily: "var(--font-sora)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-lg font-bold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-on-ink/70">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
