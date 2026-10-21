import type { Metadata } from "next";
import { site } from "@/lib/site";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How RentalOCarz collects, uses and protects the information you share with us.",
  alternates: { canonical: "/privacy-policy" },
};

const LAST_UPDATED = "21 October 2026";

const sections = [
  {
    id: "collect",
    title: "Information we collect",
    body: `When you send an enquiry to ${site.name}, we collect what you type into the form: your name, email address, an optional phone number, pick-up and drop-off locations and dates, your vehicle preference and any message you add.`,
  },
  {
    id: "use",
    title: "How we use it",
    body: "We use your details to answer your enquiry and arrange the rental you asked about. That can include passing the request to the rental provider who would supply the vehicle. We do not sell your information or use it for unrelated marketing.",
  },
  {
    id: "analytics",
    title: "Analytics",
    body: "Where analytics are switched on, we use them to see how visitors move around the site — for example which pages lead to enquiries — so we can improve it. Analytics data is kept separate from the content of your enquiry.",
  },
  {
    id: "retention",
    title: "How long we keep it",
    body: "We keep enquiry details only as long as needed to handle your request and any rental that follows. After that they can be deleted on request.",
  },
  {
    id: "choices",
    title: "Your choices",
    body: "You may ask what information we hold about you, ask us to correct it or ask us to delete it. Use any channel on our contact page and we will respond.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy">
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
