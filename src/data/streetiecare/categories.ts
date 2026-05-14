import type { AnimalType, QuickHelpItem, StreetieArea } from "./types";

export const streetieAreas: StreetieArea[] = [
  "All Bangalore",
  "Indiranagar",
  "Jeevan Bima Nagar",
  "HAL 2nd Stage",
  "Domlur",
  "Old Airport Road",
];

export const resourceCategories = [
  "24x7 Hospitals",
  "Clinics",
  "Vet Pharmacies",
  "Pet Stores",
  "Allopathy Vets",
  "Home Visit Vets",
  "Homeopathy Vets",
  "Ambulance Services",
  "ABC / Sterilization Centres",
  "Vaccination",
  "Boarding",
  "Fosters",
  "Shelters",
  "Lost & Found Groups",
  "Rescuers",
  "Pet Cabs / Animal Transport",
  "Adoption Support",
  "Fundraising Support",
  "Local Feeders / Community Carers",
  "Dog Walkers",
  "Pet Sitters",
  "Cremation / Burial",
  "Legal Help",
  "Animal Welfare Bodies",
  "Wildlife Rescue",
] as const;

export const protocolCategories = [
  "Medical",
  "Lost & Found",
  "ABC / Vaccination",
  "Adoption",
  "Foster / Shelter",
  "Legal / Cruelty",
  "Community Care",
  "Other Animals / Wildlife",
] as const;

export const animalTypes: AnimalType[] = ["Dog", "Cat", "Bird", "Wildlife", "Other"];

export const quickHelpItems: QuickHelpItem[] = [
  {
    title: "Injured / sick animal",
    description: "First steps for bleeding, weakness, bite wounds, ticks, and transport.",
    href: "/streetiecare/emergency",
    tone: "danger",
  },
  {
    title: "Emergency vet / ambulance",
    description: "Sample 24x7 clinics, animal transport, and urgent contacts.",
    href: "/streetiecare/resources?category=Ambulance%20Services&emergency=true",
    tone: "danger",
  },
  {
    title: "Lost or found dog",
    description: "Posters, group alerts, collar checks, and safe location sharing.",
    href: "/streetiecare/lost-found",
    tone: "warning",
  },
  {
    title: "ABC / sterilization",
    description: "How to plan capture, surgery, recovery, and release safely.",
    href: "/streetiecare/protocols/abc-sterilization-process",
    tone: "secondary",
  },
  {
    title: "Vaccination / rabies",
    description: "Rabies warning signs, vaccination basics, and bite guidance.",
    href: "/streetiecare/protocols/suspected-rabies-protocol",
    tone: "warning",
  },
  {
    title: "Adoption / foster",
    description: "Screening, forms, follow-ups, and foster options.",
    href: "/streetiecare/adoption",
    tone: "primary",
  },
  {
    title: "Report cruelty",
    description: "Calm evidence collection, reporting, FIR basics, and legal contacts.",
    href: "/streetiecare/legal",
    tone: "danger",
  },
  {
    title: "Local contacts",
    description: "Area coordinator, lost and found, adoption, legal, and general volunteer help.",
    href: "/streetiecare/contact",
    tone: "neutral",
  },
];

export const sampleVerificationStatus = "Sample data — verify before use" as const;
