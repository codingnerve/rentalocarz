export type RentalLocation = {
  city: string;
  state?: string;
  country: string;
  slug: string;
  image: string;
  airportCode: string;
  startingPrice: number;
  highlight: string;
  isUsa?: boolean;
};

export const locations: RentalLocation[] = [
  {
    city: "Orlando",
    state: "Florida",
    country: "United States",
    slug: "orlando",
    image: "/images/locations/orlando-parks.jpg",
    airportCode: "MCO",
    startingPrice: 25,
    highlight: "Parks, Resorts & Sunshine",
    isUsa: true,
  },
  {
    city: "Miami",
    state: "Florida",
    country: "United States",
    slug: "miami",
    image: "/images/locations/miami.jpg",
    airportCode: "MIA",
    startingPrice: 31,
    highlight: "Beaches & Ocean Drive",
    isUsa: true,
  },
  {
    city: "New York",
    state: "New York",
    country: "United States",
    slug: "new-york",
    image: "/images/locations/new-york.jpg",
    airportCode: "JFK / LGA",
    startingPrice: 39,
    highlight: "The City & Tri-State Area",
    isUsa: true,
  },
  {
    city: "Chicago",
    state: "Illinois",
    country: "United States",
    slug: "chicago",
    image: "/images/locations/chicago.jpg",
    airportCode: "ORD / MDW",
    startingPrice: 34,
    highlight: "The Loop & Lakefront",
    isUsa: true,
  },
  {
    city: "Los Angeles",
    state: "California",
    country: "United States",
    slug: "los-angeles",
    image: "/images/locations/los-angeles.jpg",
    airportCode: "LAX",
    startingPrice: 33,
    highlight: "Beaches & Highway 1",
    isUsa: true,
  },
  {
    city: "Las Vegas",
    state: "Nevada",
    country: "United States",
    slug: "las-vegas",
    image: "/images/locations/las-vegas-strip.jpg",
    airportCode: "LAS",
    startingPrice: 28,
    highlight: "The Strip & Red Rock",
    isUsa: true,
  },
  {
    city: "Dubai",
    country: "United Arab Emirates",
    slug: "dubai",
    image: "/images/locations/dubai.jpg",
    airportCode: "DXB",
    startingPrice: 45,
    highlight: "Luxury City & Desert",
    isUsa: false,
  },
  {
    city: "London",
    country: "United Kingdom",
    slug: "london",
    image: "/images/locations/london.jpg",
    airportCode: "LHR",
    startingPrice: 42,
    highlight: "Historic Hub & Countryside",
    isUsa: false,
  },
  {
    city: "Singapore",
    country: "Singapore",
    slug: "singapore",
    image: "/images/locations/singapore.jpg",
    airportCode: "SIN",
    startingPrice: 49,
    highlight: "Island City State",
    isUsa: false,
  },
];
