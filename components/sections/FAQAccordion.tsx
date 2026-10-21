"use client";

import { useState } from "react";
import type { Faq } from "@/data/faqs";

export function FAQAccordion({ faqs }: { faqs: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line overflow-hidden rounded-lg border border-line bg-surface-raised">
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div key={faq.question}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                id={`faq-button-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-bold text-ink transition-colors hover:bg-surface"
              >
                {faq.question}
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
              <div id={`faq-panel-${i}`} role="region" aria-labelledby={`faq-button-${i}`} className="px-6 pb-6">
                <p className="text-sm leading-relaxed text-ink-muted">{faq.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
