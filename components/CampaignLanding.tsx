import Image from "next/image";
import type { Campaign } from "@/data/campaigns";
import { getVehicle, vehicles } from "@/data/vehicles";
import { faqs } from "@/data/faqs";
import { SearchWidget } from "@/components/SearchWidget";
import { VehicleShowcase } from "@/components/sections/VehicleShowcase";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { FinalCTA } from "@/components/sections/FinalCTA";

/**
 * Template for Google Ads landing pages: campaign-specific hero and
 * content assembled from data/campaigns.ts.
 */
export function CampaignLanding({ campaign }: { campaign: Campaign }) {
  const campaignVehicles =
    campaign.vehicleSlugs.length === vehicles.length
      ? vehicles
      : campaign.vehicleSlugs.map(getVehicle);
  const campaignFaqs = faqs.slice(...campaign.faqSlice);

  return (
    <>
      <section aria-label="Intro" className="relative">
        <div className="relative isolate overflow-hidden bg-ink text-on-ink">
          <Image
            src={campaign.heroImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="-z-10 object-cover opacity-35"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
          <div className="mx-auto max-w-[1400px] px-4 pb-36 pt-14 sm:px-6 md:pt-20">
            <div className="max-w-2xl animate-fade-up">
              <p className="border-l-4 border-brand pl-3 text-xs font-bold uppercase tracking-[0.2em] text-on-ink/80">
                {campaign.eyebrow}
              </p>
              <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl">{campaign.h1}</h1>
              <p className="mt-5 max-w-xl text-lg text-on-ink/75">{campaign.intro}</p>
            </div>
          </div>
        </div>
        <div className="relative z-30 mx-auto -mt-24 max-w-[1400px] px-3 sm:px-6">
          <SearchWidget />
        </div>
      </section>

      <VehicleShowcase vehicles={campaignVehicles} />

      <section aria-label="Benefits" className="bg-beige py-16">
        <div className="mx-auto grid max-w-[1400px] gap-px overflow-hidden px-3 sm:px-6 md:grid-cols-3">
          {campaign.benefits.map((b, i) => (
            <div key={b.title} className="border-t-4 border-ink bg-surface-raised p-7">
              <span className="text-sm font-extrabold text-brand">{String(i + 1).padStart(2, "0")}</span>
              <h2 className="mt-2 text-lg font-extrabold text-ink">{b.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      <HowItWorks />

      <section aria-labelledby="campaign-faq-heading" className="mx-auto max-w-3xl px-3 py-16 sm:px-6">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-strong">Quick answers</p>
        <h2 id="campaign-faq-heading" className="mt-1 text-2xl font-extrabold text-ink sm:text-3xl">
          Before you ask.
        </h2>
        <div className="mt-6">
          <FAQAccordion faqs={campaignFaqs} />
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
