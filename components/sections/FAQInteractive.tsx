"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { site, telHref } from "@/lib/site";

export type CategorizedFaq = {
  question: string;
  answer: string;
  category: "booking" | "airport" | "vehicles" | "support";
};

export const extendedFaqs: CategorizedFaq[] = [
  {
    category: "booking",
    question: "How does an enquiry turn into a rental?",
    answer:
      "Share your pick-up, drop-off and dates through the search box or quote form. We look at what can be arranged, reply with options and a personal quote, and only proceed when you confirm. Nothing is booked or charged beforehand.",
  },
  {
    category: "booking",
    question: "Which details do you need from me?",
    answer:
      "A name, an email address or phone number, where and when you want to collect the car, and where you will return it. Adding a preferred vehicle class lets us give sharper options in our first reply.",
  },
  {
    category: "airport",
    question: "Can you arrange an airport pick-up?",
    answer:
      "Yes. Tell us the airport and, if you have it, your flight number or arrival time. We suggest a collection plan that lines up with your landing.",
  },
  {
    category: "vehicles",
    question: "What kinds of vehicles can you arrange?",
    answer:
      "Economy, compact, sedan, SUV, minivan, electric, convertible and luxury cars. Availability varies by place and date, so each answer is based on what can actually be arranged for your trip.",
  },
  {
    category: "vehicles",
    question: "Can I ask for a specific model?",
    answer:
      "Absolutely — mention the category or model in the form. We try to match it or suggest the nearest alternative with similar space and features.",
  },
  {
    category: "booking",
    question: "Do you cover weekly or monthly rentals?",
    answer:
      "Yes, from a single day up to several months. Enter your pick-up and drop-off dates and the quote reflects the full period, including any rates that apply to longer rentals.",
  },
  {
    category: "booking",
    question: "Does sending an enquiry cost anything?",
    answer:
      "No. Asking for a quote is free and carries no obligation. You see the vehicle options, the price and the rental provider's terms before you decide.",
  },
  {
    category: "support",
    question: "What if I need to change or cancel a request?",
    answer:
      "Contact us any time before final confirmation to adjust dates, locations or vehicle preferences. Once a rental is confirmed, any cancellation terms are set out in the quote you receive.",
  },
  {
    category: "airport",
    question: "What should I bring to the rental desk?",
    answer:
      "Providers typically ask for a valid driver's license, a credit card in the main driver's name and, for international visitors, a passport. Your quote lists the exact requirements.",
  },
  {
    category: "support",
    question: "How can I reach RentalOCarz?",
    answer:
      "Call (888) 383-9487, send the online quote form or email info@rentalocarz.com. A person on our team reads and answers every message.",
  },
];

const categories = [
  { id: "all", label: "All topics" },
  { id: "booking", label: "Booking & quotes" },
  { id: "airport", label: "Airports & pick-up" },
  { id: "vehicles", label: "Vehicles" },
  { id: "support", label: "Support" },
] as const;

export function FAQInteractive() {
  const [category, setCategory] = useState<string>("all");
  const [query, setQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const tel = telHref();

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return extendedFaqs.filter(
      (f) =>
        (category === "all" || f.category === category) &&
        (!q || f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q)),
    );
  }, [category, query]);

  return (
    <div className="grid gap-8 md:grid-cols-[220px_1fr]">
      {/* Topic rail */}
      <aside className="space-y-4">
        <div>
          <label htmlFor="faq-search" className="sr-only">
            Search questions
          </label>
          <input
            id="faq-search"
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setOpenIndex(0);
            }}
            placeholder="Search…"
            className="w-full rounded-md border-2 border-line bg-surface-raised px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-muted focus:border-brand focus:outline-none"
          />
        </div>
        <div role="group" aria-label="Topics" className="flex flex-wrap gap-2 md:flex-col md:gap-0 md:border-l-2 md:border-line">
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              aria-pressed={category === c.id}
              onClick={() => {
                setCategory(c.id);
                setOpenIndex(0);
              }}
              className={`px-3 py-2 text-left text-sm font-bold transition-colors md:-ml-0.5 md:border-l-2 ${
                category === c.id
                  ? "rounded bg-ink text-white md:rounded-none md:border-brand md:bg-transparent md:text-brand"
                  : "rounded bg-surface-raised text-ink-soft hover:text-ink md:rounded-none md:border-transparent md:bg-transparent"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </aside>

      {/* Answers */}
      <div>
        {results.length > 0 ? (
          <div className="divide-y divide-line overflow-hidden rounded-lg border border-line bg-surface-raised">
            {results.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={faq.question}>
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${i}`}
                      id={`faq-btn-${i}`}
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-bold text-ink hover:bg-surface sm:px-6 sm:text-lg"
                    >
                      <span>{faq.question}</span>
                      <span
                        aria-hidden="true"
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded bg-ink text-lg font-bold leading-none text-white transition-transform ${
                          isOpen ? "rotate-45 bg-brand" : ""
                        }`}
                      >
                        +
                      </span>
                    </button>
                  </h3>
                  {isOpen && (
                    <div id={`faq-answer-${i}`} role="region" aria-labelledby={`faq-btn-${i}`} className="px-5 pb-6 sm:px-6">
                      <p className="leading-relaxed text-ink-muted">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="rounded-lg border-2 border-dashed border-line bg-surface-raised p-10 text-center">
            <h3 className="text-base font-bold text-ink">Nothing matches that search</h3>
            <p className="mt-1 text-sm text-ink-muted">Ask us directly — we will answer your specific question.</p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              {tel && (
                <a href={tel} className="rounded-md border-2 border-ink px-4 py-2 text-xs font-bold text-ink hover:bg-ink hover:text-white">
                  Call {site.phoneDisplay}
                </a>
              )}
              <Link href="/contact#quote" className="rounded-md bg-brand px-4 py-2 text-xs font-bold text-on-brand hover:bg-brand-strong">
                Ask our team
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
