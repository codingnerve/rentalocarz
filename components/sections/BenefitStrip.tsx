const benefits = [
  {
    label: "Flexible Rental Options",
    icon: <path d="M12 8v4l2.5 2.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />,
  },
  {
    label: "Multiple Vehicle Categories",
    icon: (
      <path d="M5 17h14M6 12l1.5-4.5A2 2 0 0 1 9.4 6h5.2a2 2 0 0 1 1.9 1.5L18 12m-13 0h14a1 1 0 0 1 1 1v3h-2m-12 0H4v-3a1 1 0 0 1 1-1zm3 4a1.5 1.5 0 1 1-3 0m14 0a1.5 1.5 0 1 1-3 0" />
    ),
  },
  {
    label: "Airport & City Rentals",
    icon: <path d="M10.5 19.5L21 12 10.5 4.5v6L3 12l7.5 1.5v6z" />,
  },
  {
    label: "Helpful Customer Support",
    icon: (
      <path d="M4 13a8 8 0 1 1 16 0m-16 0v3a2 2 0 0 0 2 2h1v-5H4zm16 0v3a2 2 0 0 1-2 2h-1v-5h3z" />
    ),
  },
];

export function BenefitStrip() {
  return (
    <section aria-label="Why rent with us" className="mx-auto max-w-[1400px] px-3 sm:px-6">
      <ul className="grid grid-cols-2 overflow-hidden rounded-lg border border-line bg-surface-raised shadow-sm shadow-ink/5 md:grid-cols-4 md:divide-x md:divide-line">
        {benefits.map((b) => (
          <li
            key={b.label}
            className="flex items-center gap-3 border-b border-line px-4 py-4 text-sm font-bold text-ink md:border-b-0"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-ink text-white">
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {b.icon}
              </svg>
            </span>
            {b.label}
          </li>
        ))}
      </ul>
    </section>
  );
}
