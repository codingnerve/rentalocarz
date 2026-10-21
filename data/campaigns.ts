import { heroImages } from "./images";
import type { Vehicle } from "./vehicles";

export type Campaign = {
  slug: string;
  eyebrow: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  intro: string;
  vehicleSlugs: Vehicle["slug"][];
  benefits: { title: string; text: string }[];
  /** [start, end) slice of the shared FAQ list shown on this lander. */
  faqSlice: [number, number];
};

/**
 * Google Ads landing pages. Add an entry here and the page exists at
 * /<slug> — campaign-specific H1, metadata and content, no code changes.
 */
export const campaigns: Campaign[] = [
  {
    slug: "car-rental",
    eyebrow: "Car rental, simplified",
    h1: "Get the Right Rental Car for Where You're Going",
    metaTitle: "Car Rental Enquiries, Simplified | RentalOCarz",
    metaDescription:
      "Tell RentalOCarz where you're headed and get matched with a rental car — economy through luxury — via one quick enquiry and a personal quote.",
    heroImage: heroImages["car-rental"],
    intro:
      "Stop juggling comparison tabs. Send a single enquiry and we come back with real vehicle options for your route and dates.",
    vehicleSlugs: ["economy", "compact", "sedan", "suv", "family", "luxury"],
    benefits: [
      {
        title: "Every vehicle class",
        text: "City hatchbacks to eight-seat vans — say what the trip needs and we narrow it down.",
      },
      {
        title: "One short form",
        text: "No sign-ups and no checkout flow, just the details we need to quote.",
      },
      {
        title: "A real reply",
        text: "A person writes back with options and a price for your exact dates.",
      },
    ],
    faqSlice: [0, 4],
  },
  {
    slug: "airport-car-rental",
    eyebrow: "Airport pick-ups",
    h1: "Your Rental Car, Ready When You Land",
    metaTitle: "Airport Car Rental Enquiries | RentalOCarz",
    metaDescription:
      "Flying in soon? Request an airport rental with one enquiry — share the airport, flight time and dates and receive a personal quote.",
    heroImage: heroImages["airport-car-rental"],
    intro:
      "Give us your arrival airport and time. We propose a pick-up plan that fits your landing, so the car is arranged before you board.",
    vehicleSlugs: ["economy", "sedan", "suv", "family"],
    benefits: [
      {
        title: "Built around your flight",
        text: "Share when you land and the pick-up is planned around it.",
      },
      {
        title: "Any length of stay",
        text: "From a one-day hop to a multi-week visit.",
      },
      {
        title: "Know before you fly",
        text: "You get clear instructions on where and how to collect the car.",
      },
    ],
    faqSlice: [0, 4],
  },
  {
    slug: "suv-rental",
    eyebrow: "Room to spread out",
    h1: "An SUV That Handles the Whole Trip",
    metaTitle: "SUV Rental Enquiries | RentalOCarz",
    metaDescription:
      "Need space for passengers, bags and long miles? Request an SUV rental through one enquiry and get a personal quote for your dates.",
    heroImage: heroImages["suv-rental"],
    intro:
      "Five to seven seats, proper luggage space and a comfortable ride for long distances — share your route and we pick the SUV to match.",
    vehicleSlugs: ["suv", "family"],
    benefits: [
      {
        title: "Space that counts",
        text: "Seats and cargo room for families, groups and gear.",
      },
      {
        title: "Made for miles",
        text: "Comfortable choices for highways, hills and everything in between.",
      },
      {
        title: "Fitted to your route",
        text: "Tell us the terrain and distance and we recommend the right model.",
      },
    ],
    faqSlice: [3, 7],
  },
  {
    slug: "luxury-car-rental",
    eyebrow: "Premium rentals",
    h1: "Luxury Car Rental for Moments That Matter",
    metaTitle: "Luxury Car Rental Enquiries | RentalOCarz",
    metaDescription:
      "Weddings, client visits, milestone trips — request a luxury rental with one enquiry and receive matched options and a quote.",
    heroImage: heroImages["luxury-car-rental"],
    intro:
      "A wedding, a key client or the trip you have been saving for — tell us the occasion and we suggest cars with the presence to suit it.",
    vehicleSlugs: ["luxury", "sedan"],
    benefits: [
      {
        title: "Matched to the occasion",
        text: "Share the event and we propose models with the right look and feel.",
      },
      {
        title: "Quiet and straightforward",
        text: "One enquiry and one clear quote — no showroom runaround.",
      },
      {
        title: "Requests welcome",
        text: "Have a model in mind? We will try to source it or offer the closest match.",
      },
    ],
    faqSlice: [3, 7],
  },
  {
    slug: "monthly-car-rental",
    eyebrow: "Long-term rentals",
    h1: "Monthly Car Rental Without Owning a Car",
    metaTitle: "Monthly Car Rental Enquiries | RentalOCarz",
    metaDescription:
      "Staying a while? Request a monthly rental with one enquiry — flexible periods and a personal quote, with none of the ownership hassle.",
    heroImage: heroImages["monthly-car-rental"],
    intro:
      "Moving cities, on a long assignment or escaping winter — a monthly rental keeps you mobile without buying, insuring and reselling a car.",
    vehicleSlugs: ["economy", "sedan", "suv"],
    benefits: [
      {
        title: "Flexible terms",
        text: "One month or several — choose the dates that match your stay.",
      },
      {
        title: "One quote for it all",
        text: "See what the full period looks like before you commit.",
      },
      {
        title: "Room to adjust",
        text: "Needs change mid-stay? Ask about swapping the car or changing the period.",
      },
    ],
    faqSlice: [0, 4],
  },
];

export function getCampaign(slug: string): Campaign | undefined {
  return campaigns.find((c) => c.slug === slug);
}
