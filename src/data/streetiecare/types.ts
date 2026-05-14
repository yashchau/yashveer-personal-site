export type StreetieArea =
  | "All Bangalore"
  | "Indiranagar"
  | "Jeevan Bima Nagar"
  | "HAL 2nd Stage"
  | "Domlur"
  | "Old Airport Road"
  | "Koramangala"
  | "Ulsoor";

export type AnimalType = "Dog" | "Cat" | "Bird" | "Wildlife" | "Other";

export type UrgencyLevel = "Emergency" | "High" | "Medium" | "Routine";

export type VerificationStatus = "Sample data — verify before use";

export interface Resource {
  id: string;
  name: string;
  category: string;
  areas: StreetieArea[];
  timings: string;
  isEmergency: boolean;
  animalTypes: AnimalType[];
  phone: string;
  whatsapp?: string;
  email?: string;
  address: string;
  description: string;
  tags: string[];
  lastUpdated: string;
  verificationStatus: VerificationStatus;
  relatedProtocolIds: string[];
}

export interface ProtocolStep {
  title: string;
  body: string;
}

export interface ProtocolFaq {
  question: string;
  answer: string;
}

export interface Protocol {
  id: string;
  title: string;
  summary: string;
  urgency: UrgencyLevel;
  category: string;
  estimatedTime: string;
  whenToUse: string[];
  firstSteps: string[];
  steps: ProtocolStep[];
  dont: string[];
  relatedResourceIds: string[];
  faqs: ProtocolFaq[];
  tags: string[];
}

export interface StreetieFaq {
  id: string;
  question: string;
  answer: string;
  category: string;
  tags: string[];
}

export interface StreetieContact {
  id: string;
  name: string;
  role: string;
  area: StreetieArea | "Multiple areas";
  phone: string;
  whatsapp: string;
  email: string;
  bestTime: string;
  canHelpWith: string[];
  tags: string[];
}

export interface QuickHelpItem {
  title: string;
  description: string;
  href: string;
  tone: "danger" | "warning" | "primary" | "secondary" | "neutral";
}
