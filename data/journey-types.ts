import { journeyImages } from "./images";

export type JourneyType = {
  slug: "airport" | "business" | "weekend" | "road-trip";
  name: string;
  blurb: string;
  image: string;
};

export const journeyTypes: JourneyType[] = [
  {
    slug: "airport",
    name: "Airport Arrival",
    blurb: "Step off the plane and into a car that is already sorted.",
    image: journeyImages.airport,
  },
  {
    slug: "business",
    name: "Business Trips",
    blurb: "Dependable, presentable cars for a full calendar of meetings.",
    image: journeyImages.business,
  },
  {
    slug: "weekend",
    name: "Weekend Escapes",
    blurb: "A short break, one car, and nothing to untangle.",
    image: journeyImages.weekend,
  },
  {
    slug: "road-trip",
    name: "Road Trips",
    blurb: "Room, comfort and range for the scenic route.",
    image: journeyImages["road-trip"],
  },
];
