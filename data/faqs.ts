export type Faq = {
  question: string;
  answer: string;
};

/**
 * Short FAQ list used on the landing pages (each page shows a slice).
 * Factual answers about the enquiry process only — no invented rental
 * policies, prices or guarantees; policy details come with each quote.
 */
export const faqs: Faq[] = [
  {
    question: "What happens after I send an enquiry?",
    answer:
      "Our team reads your request, looks at what can be arranged for your route and dates, and replies with vehicle options and a personal quote. Nothing is booked and nothing is charged until you say yes.",
  },
  {
    question: "What details should I include?",
    answer:
      "Your name, an email or phone number, where and when you want to pick the car up, and where you will return it. If you already know the vehicle type you want, add it — it speeds up the first reply.",
  },
  {
    question: "Do you handle airport pick-ups?",
    answer:
      "Yes. Put your arrival airport in the enquiry and, if you have it, your flight time. We suggest a pick-up arrangement that matches when you land.",
  },
  {
    question: "Which vehicle types can you arrange?",
    answer:
      "Economy, compact, sedan, SUV, family minivan, electric, convertible and luxury. What is actually on offer depends on the location and dates, so each reply lists real options for your trip.",
  },
  {
    question: "Can I ask for a particular model?",
    answer:
      "Name the category or model in the form. We will try to match it, or tell you the closest alternative for your dates.",
  },
  {
    question: "Is a longer rental possible?",
    answer:
      "Yes — a single day, a week or several months. Enter your pick-up and return dates and the quote covers the whole period.",
  },
  {
    question: "What is the fastest way to reach RentalOCarz?",
    answer:
      "Call (888) 383-9487 or send the quote form on this site. Both go to the same team, and the contact page lists the email address too.",
  },
];
