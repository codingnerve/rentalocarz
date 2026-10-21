import type { Metadata } from "next";
import { site } from "@/lib/site";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms that apply when you use the RentalOCarz website and enquiry service.",
  alternates: { canonical: "/terms" },
};

const LAST_UPDATED = "21 October 2026";

const sections = [
  {
    id: "service",
    title: "What this site is",
    body: `${site.name} (${site.domain}) is an enquiry service for car rentals. Sending an enquiry asks for information and a quote — it is not a booking and does not create a rental agreement or any duty to rent.`,
  },
  {
    id: "quotes",
    title: "Quotes and availability",
    body: "Vehicle classes shown here illustrate the kinds of cars we can arrange. Availability, exact models and prices depend on location and dates and are confirmed in your individual quote. A quote becomes binding only once a rental is expressly confirmed between you and the rental provider.",
  },
  {
    id: "rental",
    title: "The rental itself",
    body: "The rental agreement for a vehicle is made with the provider that supplies it, under that provider's terms, which you will see before confirming. Requirements such as driver's license, minimum age, deposit and insurance form part of those terms.",
  },
  {
    id: "independent",
    title: "Independent service",
    body: `${site.domain} is an independent service and is not the official website or customer-support channel of any car rental company. Brand names and trademarks belong to their owners and are used only for identification.`,
  },
  {
    id: "use",
    title: "Acceptable use",
    body: "Please use the forms only for genuine rental enquiries. Automated, fraudulent or abusive submissions may be ignored and blocked.",
  },
  {
    id: "changes",
    title: "Changes to these terms",
    body: "We may update these terms as the service develops; the date above shows the latest change. Questions are welcome through the contact page.",
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Use">
        <p>Last updated {LAST_UPDATED}</p>
      </PageHero>

      <div className="mx-auto grid max-w-5xl gap-10 px-3 py-14 sm:px-6 md:grid-cols-[200px_1fr] md:py-20">
        <nav aria-label="On this page" className="hidden md:block">
          <ul className="sticky top-32 space-y-2 border-l-2 border-line text-sm">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="-ml-0.5 block border-l-2 border-transparent py-1 pl-3 font-semibold text-ink-muted hover:border-brand hover:text-brand">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="space-y-10">
          {sections.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-32">
              <h2 className="text-xl font-extrabold text-ink">{s.title}</h2>
              <p className="mt-3 leading-relaxed text-ink-soft">{s.body}</p>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
