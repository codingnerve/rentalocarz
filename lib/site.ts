/**
 * Central site configuration.
 *
 * Contact details can be overridden per environment; the defaults are the
 * live RentalOCarz channels. Call/WhatsApp CTAs hide themselves when a
 * channel is empty and fall back to the quote form.
 */
export const site = {
  name: "RentalOCarz",
  domain: "rentalocarz.com",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://rentalocarz.com",
  tagline: "Pick the car. Own the road.",
  topbarTagline:
    process.env.NEXT_PUBLIC_TOPBAR_TAGLINE ??
    "Independent rental booking help for travel across the U.S.",
  description:
    "RentalOCarz helps travelers line up the right rental car for any trip — airport arrivals, weekend escapes, road trips and long stays — through one quick enquiry and a personal quote.",
  phone: process.env.NEXT_PUBLIC_PHONE ?? "+18883839487",
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY ?? "(888) 383-9487",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? "", // digits only, e.g. "15551234567"
  email: process.env.NEXT_PUBLIC_EMAIL ?? "info@rentalocarz.com",
} as const;

export function telHref(): string | null {
  return site.phone ? `tel:${site.phone}` : null;
}

export function whatsappHref(): string | null {
  return site.whatsapp ? `https://wa.me/${site.whatsapp}` : null;
}
