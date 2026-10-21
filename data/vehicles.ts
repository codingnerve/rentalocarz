export type Vehicle = {
  slug:
    | "suv"
    | "luxury"
    | "sedan"
    | "family"
    | "economy"
    | "compact"
    | "electric"
    | "convertible";
  name: string;
  tagline: string;
  description: string;
  image: string;
  seats?: string;
  passengers: number;
  bags: number;
  transmission: string;
  fuel: string;
  highlight: string;
  startingPrice: number;
  featured?: boolean;
};

export const vehicles: Vehicle[] = [
  {
    slug: "suv",
    name: "SUV",
    tagline: "Seven seats. Zero compromise.",
    description:
      "Generous cargo room, a relaxed ride and sure-footed handling make an SUV the easy pick for family road trips and group getaways.",
    image: "/images/vehicles/suv.jpg",
    seats: "7 seats",
    passengers: 7,
    bags: 4,
    transmission: "Automatic",
    fuel: "Fuel Efficient",
    highlight: "Built for Road Trips",
    startingPrice: 59,
    featured: true,
  },
  {
    slug: "economy",
    name: "Economy",
    tagline: "Go far, spend less.",
    description:
      "Reach your destination without stretching the budget. Economy cars sip fuel and slot into tight parking spaces.",
    image: "/images/vehicles/economy.jpg",
    seats: "5 seats",
    passengers: 5,
    bags: 2,
    transmission: "Automatic",
    fuel: "Fuel Efficient",
    highlight: "Best Value",
    startingPrice: 35,
  },
  {
    slug: "sedan",
    name: "Sedan",
    tagline: "The dependable all-rounder.",
    description:
      "Comfortable, efficient and easy to drive — a sedan suits city errands and airport runs equally well.",
    image: "/images/vehicles/sedan.jpg",
    seats: "5 seats",
    passengers: 5,
    bags: 3,
    transmission: "Automatic",
    fuel: "Fuel Efficient",
    highlight: "Comfortable Cabin",
    startingPrice: 45,
  },
  {
    slug: "compact",
    name: "Compact",
    tagline: "Built for tight streets.",
    description:
      "Compact cars thread through traffic and squeeze into small spots while still giving you a comfortable seat.",
    image: "/images/vehicles/compact.jpg",
    seats: "5 seats",
    passengers: 5,
    bags: 2,
    transmission: "Automatic",
    fuel: "Fuel Efficient",
    highlight: "Best Value",
    startingPrice: 38,
  },
  {
    slug: "electric",
    name: "Electric (EV)",
    tagline: "Quiet, smooth, emission-free.",
    description:
      "Instant torque, a tech-forward cabin and no tailpipe emissions — an electric car makes cleaner travel feel effortless.",
    image: "/images/vehicles/electric.jpg",
    seats: "5 seats",
    passengers: 5,
    bags: 3,
    transmission: "Automatic",
    fuel: "100% Electric",
    highlight: "Zero Emissions",
    startingPrice: 55,
  },
  {
    slug: "luxury",
    name: "Luxury",
    tagline: "Make an entrance.",
    description:
      "Refined interiors, advanced tech and a composed drive. Choose a luxury car for client travel or a special occasion.",
    image: "/images/vehicles/luxury.jpg",
    seats: "5 seats",
    passengers: 5,
    bags: 3,
    transmission: "Automatic",
    fuel: "Premium Comfort",
    highlight: "Premium Ride",
    startingPrice: 95,
  },
  {
    slug: "convertible",
    name: "Convertible",
    tagline: "Top down, road ahead.",
    description:
      "Drop the roof and feel the sun on a scenic coastal highway or a weekend escape you will remember.",
    image: "/images/vehicles/convertible.jpg",
    seats: "4 seats",
    passengers: 4,
    bags: 2,
    transmission: "Automatic",
    fuel: "Performance V6",
    highlight: "Open-Air Fun",
    startingPrice: 109,
  },
  {
    slug: "family",
    name: "Family Minivan",
    tagline: "Space for the whole crew.",
    description:
      "Roomy minivans and large people-carriers that keep every passenger comfortable, however long the drive.",
    image: "/images/vehicles/family.jpg",
    seats: "8 seats",
    passengers: 8,
    bags: 5,
    transmission: "Automatic",
    fuel: "Family Cruiser",
    highlight: "Max Space",
    startingPrice: 69,
  },
];

/** Look up a vehicle by slug. Throws if the slug doesn't exist. */
export function getVehicle(slug: Vehicle["slug"]): Vehicle {
  const vehicle = vehicles.find((v) => v.slug === slug);
  if (!vehicle) throw new Error(`Unknown vehicle slug: "${slug}"`);
  return vehicle;
}
