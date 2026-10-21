/**
 * Central image registry. Every visual asset is referenced through this
 * module so real commercial photography (.webp) can replace the branded
 * SVG placeholders without touching component code.
 */
export const vehicleImages = {
  economy: "/images/vehicles/economy.jpg",
  compact: "/images/vehicles/compact.jpg",
  sedan: "/images/vehicles/sedan.jpg",
  suv: "/images/vehicles/suv.jpg",
  luxury: "/images/vehicles/luxury.jpg",
  family: "/images/vehicles/family.jpg",
} as const;

export const journeyImages = {
  airport: "/images/journeys/airport.jpg",
  business: "/images/journeys/business.jpg",
  weekend: "/images/journeys/weekend.jpg",
  "road-trip": "/images/journeys/road-trip.jpg",
} as const;

export const heroImages = {
  home: "/images/heroes/home.jpg",
  "car-rental": "/images/heroes/car-rental.jpg",
  "airport-car-rental": "/images/heroes/airport-car-rental.jpg",
  "suv-rental": "/images/heroes/suv-rental.jpg",
  "luxury-car-rental": "/images/heroes/luxury-car-rental.jpg",
  "monthly-car-rental": "/images/heroes/monthly-car-rental.jpg",
  cta: "/images/heroes/cta.jpg",
} as const;

export const travelImages = {
  story: "/images/travel/story.jpg",
  locations: "/images/travel/locations.jpg",
} as const;
