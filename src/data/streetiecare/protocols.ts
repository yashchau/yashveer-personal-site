import type { Protocol } from "./types";

const vetDisclaimerFaq = {
  question: "Is this a substitute for a vet visit?",
  answer:
    "No. Use this as a calm first-response checklist, then speak with a qualified veterinarian or relevant professional.",
};

const defaultDont = [
  "Do not give human medicine unless a qualified veterinarian has specifically advised it.",
  "Do not crowd, chase, or corner a scared animal.",
  "Do not move a seriously injured animal unless transport is necessary and you can do it safely.",
];

function withDefaults(protocol: Protocol): Protocol {
  return {
    ...protocol,
    dont: protocol.dont.length > 0 ? protocol.dont : defaultDont,
    faqs: protocol.faqs.length > 0 ? protocol.faqs : [vetDisclaimerFaq],
  };
}

export const streetieProtocols: Protocol[] = [
  withDefaults({
    id: "street-dog-injured",
    title: "What to do if a street dog is injured",
    summary: "A simple first-response guide for injury, pain, limping, bleeding, or weakness.",
    urgency: "High",
    category: "Medical",
    estimatedTime: "10-20 minutes to stabilize and arrange help",
    whenToUse: [
      "A dog is limping, crying, bleeding, unable to stand, or visibly injured.",
      "You are not sure whether the case needs a vet, ambulance, or local carer.",
    ],
    firstSteps: [
      "Stay calm and keep people away from the animal.",
      "Take a photo or short video from a safe distance.",
      "Call an emergency vet or ambulance if there is bleeding, collapse, or severe pain.",
    ],
    steps: [
      {
        title: "Secure the area",
        body: "Ask bystanders to give space. If the animal is on a road, slow traffic only if it is safe for you.",
      },
      {
        title: "Share clear details",
        body: "Send location pin, photo, injury description, animal temperament, and whether the animal can move.",
      },
      {
        title: "Prepare for transport",
        body: "Use a blanket, board, or crate only if the animal can be moved without worsening the injury.",
      },
      {
        title: "Track bills and updates",
        body: "Keep estimates, prescriptions, bills, photos, and daily updates if volunteers are helping fund the case.",
      },
    ],
    dont: defaultDont,
    relatedResourceIds: [
      "eastside-24x7-animal-hospital",
      "streetie-animal-ambulance-east",
      "sample-rescue-volunteer-network",
    ],
    faqs: [
      {
        question: "Should I feed water or food immediately?",
        answer:
          "Avoid food or water if surgery or sedation may be needed. Ask the vet or emergency desk first.",
      },
      vetDisclaimerFaq,
    ],
    tags: ["injured", "sick", "bleeding", "weak", "vet", "ambulance", "emergency"],
  }),
  withDefaults({
    id: "dog-hit-by-vehicle",
    title: "What to do if a dog is hit by a vehicle",
    summary: "Prioritize traffic safety, urgent vet triage, and careful transport.",
    urgency: "Emergency",
    category: "Medical",
    estimatedTime: "Immediate action",
    whenToUse: [
      "A dog has been hit by a car, bike, auto, or scooter.",
      "The animal is on the road, cannot move, is bleeding, or is in shock.",
    ],
    firstSteps: [
      "Call an emergency vet or animal ambulance first.",
      "Do not drag the animal by the legs.",
      "Keep the animal warm and quiet while help is arranged.",
    ],
    steps: [
      {
        title: "Make the road safer",
        body: "Ask one person to slow traffic while another calls for help. Do not put yourself in danger.",
      },
      {
        title: "Check breathing from a distance",
        body: "Look for chest movement. Avoid putting your hand near the mouth of a scared or painful dog.",
      },
      {
        title: "Use a flat support if moving is unavoidable",
        body: "A board, thick sheet, or stretcher reduces spinal movement compared with lifting by limbs.",
      },
      {
        title: "Go to the nearest capable clinic",
        body: "For trauma, speed and capability matter more than convenience. Share ETA with the clinic.",
      },
    ],
    dont: [
      "Do not pour water into the mouth.",
      "Do not give painkillers from a human medicine box.",
      "Do not delay transport while waiting for perfect information.",
    ],
    relatedResourceIds: ["eastside-24x7-animal-hospital", "streetie-animal-ambulance-east"],
    faqs: [
      {
        question: "What if the dog bites because of pain?",
        answer:
          "Pain can make any animal defensive. Keep distance, use a barrier, and wait for trained help if handling is unsafe.",
      },
      vetDisclaimerFaq,
    ],
    tags: ["hit by vehicle", "accident", "trauma", "ambulance", "bleeding", "road"],
  }),
  withDefaults({
    id: "suspected-rabies-protocol",
    title: "Suspected rabies protocol",
    summary: "Keep distance, avoid handling, isolate the area, and call qualified help immediately.",
    urgency: "Emergency",
    category: "Medical",
    estimatedTime: "Immediate safety steps",
    whenToUse: [
      "An animal is unusually aggressive, disoriented, drooling heavily, or unable to swallow.",
      "There has been a bite and rabies is suspected.",
    ],
    firstSteps: [
      "Do not touch, feed, bathe, or restrain the animal yourself.",
      "Move people and other animals away calmly.",
      "Call an emergency vet, municipal helpline, or qualified rescue contact.",
    ],
    steps: [
      {
        title: "Create distance",
        body: "Keep a visual watch from a safe place. Do not provoke the animal for photos.",
      },
      {
        title: "Report exact location",
        body: "Share landmarks, direction of movement, bite history if known, and whether people or animals were exposed.",
      },
      {
        title: "For a bite, seek human medical care",
        body: "Wash the wound with soap and running water, then go for post-exposure medical advice immediately.",
      },
      {
        title: "Avoid rumor spread",
        body: "Share verified facts with local groups. Panic can lead to cruelty against healthy animals.",
      },
    ],
    dont: [
      "Do not attempt capture yourself.",
      "Do not spread unverified claims that a healthy animal has rabies.",
      "Do not delay human medical care after a bite.",
    ],
    relatedResourceIds: [
      "eastside-24x7-animal-hospital",
      "local-vaccination-drive-desk",
      "sample-rescue-volunteer-network",
    ],
    faqs: [
      {
        question: "Is every aggressive dog rabid?",
        answer:
          "No. Fear, pain, motherhood, territory, or past abuse can also cause aggression. Still, unusual neurological signs need qualified help.",
      },
      vetDisclaimerFaq,
    ],
    tags: ["rabies", "rabis", "bite", "aggressive", "drooling", "vaccination", "ARV"],
  }),
  withDefaults({
    id: "dog-bite-wound-protocol",
    title: "Dog bite wound protocol",
    summary: "Reduce infection risk and get a vet to assess puncture wounds quickly.",
    urgency: "High",
    category: "Medical",
    estimatedTime: "Same day vet review",
    whenToUse: [
      "A street dog has a puncture wound, torn skin, swelling, pus, or pain after a fight.",
      "You notice maggots, smell, or a wound hidden under fur.",
    ],
    firstSteps: [
      "Take photos from a safe distance.",
      "Call a vet for wound cleaning and antibiotic advice.",
      "Arrange transport if the dog is dull, feverish, or the wound is deep.",
    ],
    steps: [
      {
        title: "Look for hidden injuries",
        body: "Bite wounds can seal over while infection grows underneath. Swelling, heat, smell, or lethargy matters.",
      },
      {
        title: "Prevent licking if possible",
        body: "Use a cone only if the dog can tolerate it safely. Do not force equipment on a scared street animal.",
      },
      {
        title: "Follow the full prescription",
        body: "Incomplete antibiotic courses can make infection worse. Keep medicine logs if multiple volunteers help.",
      },
    ],
    dont: [
      "Do not pack turmeric, coffee, powder, or household chemicals into wounds.",
      "Do not squeeze abscesses without veterinary guidance.",
      "Do not ignore small punctures if the dog becomes dull or swollen.",
    ],
    relatedResourceIds: ["domlur-urgent-vet-clinic", "dr-sample-allopathy-vet"],
    faqs: [
      {
        question: "Can I clean the wound at home?",
        answer:
          "For minor surface dirt, saline may help, but deep bite wounds need a vet because infection can be hidden.",
      },
      vetDisclaimerFaq,
    ],
    tags: ["bite wound", "wound", "infection", "pus", "dog fight", "vet"],
  }),
  withDefaults({
    id: "tick-treatment-basics",
    title: "Tick treatment basics",
    summary: "Use vet-safe tick products and watch for fever, weakness, and anemia.",
    urgency: "Medium",
    category: "Medical",
    estimatedTime: "1-3 days for basic cleanup and monitoring",
    whenToUse: ["A dog has visible ticks, scratching, pale gums, fever, or weakness."],
    firstSteps: [
      "Ask a vet or pharmacy for a dog-safe tick product.",
      "Check gums, appetite, and energy.",
      "Escalate quickly if the dog is weak, pale, feverish, or not eating.",
    ],
    steps: [
      {
        title: "Use species-safe products",
        body: "Products safe for dogs may be unsafe for cats. Confirm animal type and weight before using anything.",
      },
      {
        title: "Clean bedding and resting spots",
        body: "Ticks can return from blankets, sand, parking areas, or nearby bedding.",
      },
      {
        title: "Monitor for tick fever",
        body: "Lethargy, fever, pale gums, nosebleeds, or appetite loss need veterinary care.",
      },
    ],
    dont: [
      "Do not use kerosene, diesel, phenyl, or harsh chemicals.",
      "Do not use dog tick medicine on cats unless a vet confirms it is safe.",
      "Do not assume visible tick removal has treated tick fever.",
    ],
    relatedResourceIds: ["hal-second-stage-vet-pharmacy", "dr-sample-allopathy-vet"],
    faqs: [vetDisclaimerFaq],
    tags: ["tick", "ticks", "tick fever", "skin", "pharmacy", "weak"],
  }),
  withDefaults({
    id: "deworming-basics",
    title: "Deworming basics",
    summary: "Plan deworming with correct weight, age, pregnancy status, and vet advice.",
    urgency: "Routine",
    category: "Medical",
    estimatedTime: "15 minutes to plan, repeat as advised",
    whenToUse: [
      "A puppy, kitten, or adult animal has a pot belly, worms in stool, poor coat, or poor growth.",
      "You are preparing for vaccination or adoption.",
    ],
    firstSteps: [
      "Estimate weight as accurately as possible.",
      "Ask a vet for correct medicine and dose.",
      "Keep a date record for follow-up doses.",
    ],
    steps: [
      {
        title: "Check age and condition",
        body: "Very young, weak, pregnant, or sick animals need extra caution and a vet-led plan.",
      },
      {
        title: "Give the correct dose",
        body: "Dewormer dose depends on weight and product. Underdosing may not work; overdosing can harm.",
      },
      {
        title: "Coordinate with vaccination",
        body: "Many vets prefer deworming before vaccination. Ask what schedule fits the animal.",
      },
    ],
    dont: [
      "Do not guess medicine dose from another animal.",
      "Do not deworm a collapsed or severely sick animal without vet advice.",
      "Do not skip record keeping for community dogs.",
    ],
    relatedResourceIds: ["hal-second-stage-vet-pharmacy", "dr-sample-allopathy-vet"],
    faqs: [vetDisclaimerFaq],
    tags: ["deworming", "worms", "puppy", "kitten", "vaccination"],
  }),
  withDefaults({
    id: "skin-issue-basics",
    title: "Skin issue basics",
    summary: "Separate mange, allergy, fungal infection, wounds, and ticks with veterinary help.",
    urgency: "Medium",
    category: "Medical",
    estimatedTime: "Vet review within a few days",
    whenToUse: ["Hair loss, itching, scabs, red skin, wounds, smell, or repeated scratching."],
    firstSteps: [
      "Take clear photos in daylight.",
      "Check for ticks, wounds, pus, or severe itching.",
      "Ask a vet before using creams or shampoos.",
    ],
    steps: [
      {
        title: "Document the pattern",
        body: "Note whether the skin issue is on ears, paws, back, belly, tail, or all over.",
      },
      {
        title: "Protect from rain and dirt",
        body: "Dry bedding and a cleaner resting spot can help while treatment starts.",
      },
      {
        title: "Follow up visibly",
        body: "Skin cases can take weeks. Photos every 7 days make progress and relapse easier to judge.",
      },
    ],
    dont: [
      "Do not apply steroid creams, antiseptics, or oils without vet advice.",
      "Do not bathe weak puppies or sick animals casually.",
      "Do not assume all hair loss is mange.",
    ],
    relatedResourceIds: ["domlur-urgent-vet-clinic", "dr-sample-allopathy-vet"],
    faqs: [vetDisclaimerFaq],
    tags: ["skin", "mange", "itching", "ticks", "hair loss", "fungal"],
  }),
  withDefaults({
    id: "abc-sterilization-process",
    title: "ABC / sterilization process",
    summary: "Plan humane capture, surgery, recovery, and release back to the same territory.",
    urgency: "Routine",
    category: "ABC / Vaccination",
    estimatedTime: "3-7 days including recovery",
    whenToUse: [
      "A community dog or cat is eligible for sterilization.",
      "Your lane has repeated litters and local carers can coordinate recovery.",
    ],
    firstSteps: [
      "Confirm the animal is healthy enough for surgery.",
      "Coordinate with local feeders so the animal is not fed immediately before pickup if advised.",
      "Plan same-territory release after recovery.",
    ],
    steps: [
      {
        title: "Identify and schedule",
        body: "Share photo, sex, area, temperament, and known health issues with the ABC centre.",
      },
      {
        title: "Capture humanely",
        body: "Use trained handlers when needed. Avoid chasing, loud crowds, or unsafe rope handling.",
      },
      {
        title: "Track surgery and recovery",
        body: "Ask for surgery date, recovery status, vaccination details, and release date.",
      },
      {
        title: "Release to the same place",
        body: "Return the animal to its original territory unless a qualified authority advises otherwise.",
      },
    ],
    dont: [
      "Do not relocate healthy community animals.",
      "Do not send lactating mothers without checking puppy dependency.",
      "Do not release before recovery clearance.",
    ],
    relatedResourceIds: ["bbmp-sample-abc-centre-east", "old-airport-road-pet-cab"],
    faqs: [
      {
        question: "What is ABC?",
        answer:
          "ABC means Animal Birth Control. It generally refers to sterilization, vaccination, recovery, and return of community dogs to their territory.",
      },
      vetDisclaimerFaq,
    ],
    tags: ["ABC", "sterilization", "sterilisation", "vaccination", "release", "community dog"],
  }),
  withDefaults({
    id: "vaccination-process",
    title: "Vaccination process",
    summary: "Plan anti-rabies and core vaccination safely with records and follow-up.",
    urgency: "Routine",
    category: "ABC / Vaccination",
    estimatedTime: "30-60 minutes per small group",
    whenToUse: [
      "A community dog or cat needs anti-rabies vaccination.",
      "You are preparing an animal for adoption, foster, or boarding.",
    ],
    firstSteps: [
      "Check if the animal is sick, pregnant, very young, or recently operated.",
      "Use a qualified vet or vaccination camp.",
      "Record date, vaccine, batch if available, and next due date.",
    ],
    steps: [
      {
        title: "Plan the route",
        body: "Coordinate with feeders so the animal can be located calmly at the usual time.",
      },
      {
        title: "Use clear identification",
        body: "Photos, collar notes, or area maps help avoid duplicate or missed animals.",
      },
      {
        title: "Keep records",
        body: "A shared sheet or group note with photos and dates helps the whole locality.",
      },
    ],
    dont: [
      "Do not vaccinate an obviously sick animal without vet review.",
      "Do not assume vaccination is complete without records.",
      "Do not crowd dogs during a camp.",
    ],
    relatedResourceIds: ["local-vaccination-drive-desk", "dr-sample-allopathy-vet"],
    faqs: [vetDisclaimerFaq],
    tags: ["vaccination", "rabies", "anti rabies", "ARV", "rabis", "camp"],
  }),
  withDefaults({
    id: "i-lost-my-dog",
    title: "I lost my dog",
    summary: "Act quickly with posters, local search loops, vet calls, and group alerts.",
    urgency: "High",
    category: "Lost & Found",
    estimatedTime: "First 2 hours matter most",
    whenToUse: ["Your dog slipped out, ran away, or is missing from home, boarding, or a walk."],
    firstSteps: [
      "Search the immediate area calmly with familiar people.",
      "Prepare a clear poster with photo, area, date, phone, and reward if any.",
      "Alert nearby vets, guards, feeders, walkers, and local groups.",
    ],
    steps: [
      {
        title: "Start from the last confirmed location",
        body: "Walk slow circles outward. Many dogs hide nearby before moving far.",
      },
      {
        title: "Use one phone number",
        body: "Keep the number reachable. Ask callers for photo or live location before traveling.",
      },
      {
        title: "Check predictable shelters",
        body: "Look near food stalls, parks, apartment basements, parking lots, and familiar routes.",
      },
      {
        title: "Refresh alerts",
        body: "Repost morning and evening with updated last-sighting map and verified details.",
      },
    ],
    dont: [
      "Do not delay because you feel embarrassed.",
      "Do not share your full home address publicly.",
      "Do not chase if the dog is scared; sit low, use familiar voice, and use food.",
    ],
    relatedResourceIds: ["bangalore-lost-found-pets-sample", "domlur-urgent-vet-clinic"],
    faqs: [
      {
        question: "Should I offer a reward?",
        answer:
          "A reward can help, but avoid paying before physically verifying the dog. Ask for clear current photos.",
      },
    ],
    tags: ["lost dog", "missing dog", "poster", "microchip", "found dog", "Indiranagar"],
  }),
  withDefaults({
    id: "i-found-a-dog",
    title: "I found a dog",
    summary: "Keep the dog safe nearby, check identifiers, and avoid accidental relocation.",
    urgency: "Medium",
    category: "Lost & Found",
    estimatedTime: "30-90 minutes for first alerts",
    whenToUse: ["You found a friendly, confused, collared, or unfamiliar dog in your area."],
    firstSteps: [
      "Do not move the dog far unless there is immediate danger.",
      "Check collar, tag, leash, harness, or phone number from a safe distance.",
      "Take clear photos and share exact found location.",
    ],
    steps: [
      {
        title: "Keep the location accurate",
        body: "Owners search near the lost point. A small location error can waste hours.",
      },
      {
        title: "Ask nearby people",
        body: "Security guards, shopkeepers, walkers, and feeders often recognize local pets.",
      },
      {
        title: "Visit a vet for microchip scan",
        body: "If safe to transport, ask a nearby clinic to check for a microchip.",
      },
      {
        title: "Screen claimants",
        body: "Ask for old photos, vet records, unique marks, or the dog's response before handover.",
      },
    ],
    dont: [
      "Do not hand over the dog to someone who cannot prove ownership.",
      "Do not relocate the dog across the city without documenting the reason.",
      "Do not post only a vague description without photos and location.",
    ],
    relatedResourceIds: ["bangalore-lost-found-pets-sample", "old-airport-road-pet-cab"],
    faqs: [vetDisclaimerFaq],
    tags: ["found dog", "lost dog", "collar", "tag", "microchip", "location"],
  }),
  withDefaults({
    id: "i-want-to-adopt",
    title: "I want to adopt",
    summary: "Adopt thoughtfully with home readiness, vet planning, and follow-up support.",
    urgency: "Routine",
    category: "Adoption",
    estimatedTime: "1-2 weeks for a careful adoption",
    whenToUse: ["You want to adopt a street puppy, kitten, adult dog, or rescued animal."],
    firstSteps: [
      "Discuss long-term care, budget, family agreement, and landlord rules.",
      "Meet the animal more than once when possible.",
      "Ask for vaccination, deworming, sterilization, and medical history.",
    ],
    steps: [
      {
        title: "Prepare your home",
        body: "Set up safe sleeping space, bowls, leash, collar, litter if needed, and balcony or gate safety.",
      },
      {
        title: "Plan vet basics",
        body: "Schedule a first vet check, vaccination plan, deworming, tick prevention, and sterilization if pending.",
      },
      {
        title: "Respect adjustment time",
        body: "New animals may hide, cry, refuse food, or toilet indoors briefly. Keep routines calm.",
      },
    ],
    dont: [
      "Do not adopt as a surprise gift.",
      "Do not separate very young pups or kittens from the mother without a welfare reason.",
      "Do not skip ID tag and leash safety in the first weeks.",
    ],
    relatedResourceIds: ["adopt-a-streetie-support", "east-bangalore-foster-circle"],
    faqs: [vetDisclaimerFaq],
    tags: ["adoption", "adopt", "puppy", "kitten", "screening", "home check"],
  }),
  withDefaults({
    id: "i-have-an-animal-for-adoption",
    title: "I have an animal for adoption",
    summary: "Create a clear profile, screen adopters, and keep post-adoption follow-up simple.",
    urgency: "Routine",
    category: "Adoption",
    estimatedTime: "Several days to several weeks",
    whenToUse: ["You are trying to rehome a rescued puppy, kitten, adult dog, or cat."],
    firstSteps: [
      "Get clear photos and a short video in good light.",
      "Write age estimate, sex, temperament, health status, location, and vaccination status.",
      "Use an adoption form before sharing exact foster location.",
    ],
    steps: [
      {
        title: "Make the profile honest",
        body: "Mention medical needs, energy level, toilet training, compatibility, and any fear issues.",
      },
      {
        title: "Screen carefully",
        body: "Ask about prior pet experience, family agreement, rental rules, daily routine, and vet access.",
      },
      {
        title: "Do follow-ups",
        body: "Check day 1, week 1, month 1, and after sterilization or vaccination milestones.",
      },
    ],
    dont: [
      "Do not hand over without proof of identity and basic screening.",
      "Do not hide health or behavior issues.",
      "Do not use pressure language that creates rushed decisions.",
    ],
    relatedResourceIds: ["adopt-a-streetie-support", "safe-paws-boarding", "east-bangalore-foster-circle"],
    faqs: [vetDisclaimerFaq],
    tags: ["adoption", "foster", "screening", "form", "follow-up"],
  }),
  withDefaults({
    id: "fundraising-good-practices",
    title: "Fundraising good practices",
    summary: "Keep medical fundraising transparent, specific, and easy to audit.",
    urgency: "Medium",
    category: "Community Care",
    estimatedTime: "30 minutes to set up a clean case post",
    whenToUse: ["A case needs donations for emergency treatment, surgery, boarding, or medicines."],
    firstSteps: [
      "Get a written estimate or prescription.",
      "Post one clear case summary with photos and clinic details.",
      "Update donors with bills, payment proof, and recovery status.",
    ],
    steps: [
      {
        title: "State the exact need",
        body: "Say what amount is needed, what it covers, and who will pay the provider.",
      },
      {
        title: "Use a simple ledger",
        body: "Track amount received, amount spent, balance, bills, and refund or rollover plan.",
      },
      {
        title: "Close the loop",
        body: "Post outcome, bills, remaining funds, and next steps when the case is stable.",
      },
    ],
    dont: [
      "Do not post graphic images without warning.",
      "Do not mix multiple cases in one unclear collection.",
      "Do not continue fundraising after the need is met without explanation.",
    ],
    relatedResourceIds: ["streetie-fundraising-helpdesk"],
    faqs: [vetDisclaimerFaq],
    tags: ["fundraising", "donation", "medical bill", "transparency", "estimate"],
  }),
  withDefaults({
    id: "building-local-streetie-care-group",
    title: "Building a local streetie care group",
    summary: "Organize feeders, vets, transport, records, and emergency roles for your neighborhood.",
    urgency: "Routine",
    category: "Community Care",
    estimatedTime: "1-2 weeks to set up",
    whenToUse: ["Your lane, apartment, or area wants a simple local care system."],
    firstSteps: [
      "List current feeders, carers, vets, transport options, and recurring animal locations.",
      "Create a small WhatsApp group with clear posting rules.",
      "Assign roles for emergency, ABC, vaccination, lost and found, and fundraising.",
    ],
    steps: [
      {
        title: "Map the animals",
        body: "Use photos, names, sex, sterilization status, vaccination date, and normal location.",
      },
      {
        title: "Keep a resource sheet",
        body: "Add vets, pharmacies, transport, fosters, and aftercare contacts with verification dates.",
      },
      {
        title: "Create calm escalation rules",
        body: "Define what counts as emergency, who calls, who transports, and how updates are posted.",
      },
    ],
    dont: [
      "Do not let one person carry every role.",
      "Do not share unverified accusations in community groups.",
      "Do not relocate community animals as a default solution.",
    ],
    relatedResourceIds: ["indiranagar-feeder-circle", "indiranagar-care-pet-store"],
    faqs: [vetDisclaimerFaq],
    tags: ["community", "feeder", "local group", "water bowls", "ABC", "vaccination"],
  }),
  withDefaults({
    id: "how-to-report-animal-cruelty",
    title: "How to report animal cruelty",
    summary: "Document facts, protect yourself, and escalate through appropriate channels.",
    urgency: "High",
    category: "Legal / Cruelty",
    estimatedTime: "30-60 minutes for initial report",
    whenToUse: ["You witness beating, poisoning, abandonment, deliberate injury, or severe neglect."],
    firstSteps: [
      "Move to safety first.",
      "Record date, time, location, names if known, and evidence.",
      "Contact animal welfare support or police guidance if immediate danger continues.",
    ],
    steps: [
      {
        title: "Collect evidence calmly",
        body: "Photos, short videos, witnesses, vehicle numbers, and location pins help. Do not trespass.",
      },
      {
        title: "Write a clear complaint",
        body: "Use facts in order: what happened, when, where, who was involved, and what help is needed.",
      },
      {
        title: "Escalate responsibly",
        body: "Animal welfare bodies, legal volunteers, and police can guide the right reporting path.",
      },
    ],
    dont: [
      "Do not put yourself in physical danger.",
      "Do not post private addresses or threats online.",
      "Do not alter evidence before sharing with authorities.",
    ],
    relatedResourceIds: ["animal-rights-legal-desk", "sample-animal-welfare-board-contact"],
    faqs: [vetDisclaimerFaq],
    tags: ["cruelty", "legal", "animal welfare", "evidence", "FIR", "police"],
  }),
  withDefaults({
    id: "how-to-file-an-fir",
    title: "How to file an FIR",
    summary: "Prepare a concise complaint, evidence, witness details, and escalation notes.",
    urgency: "High",
    category: "Legal / Cruelty",
    estimatedTime: "1-3 hours depending on station and case",
    whenToUse: ["A cruelty or violence case may need police documentation."],
    firstSteps: [
      "Speak with legal or animal welfare support before going if possible.",
      "Carry a written complaint and evidence copies.",
      "Take a calm witness or volunteer with you.",
    ],
    steps: [
      {
        title: "Write the complaint",
        body: "Use simple facts: incident, location, date, time, people involved, animal condition, and requested action.",
      },
      {
        title: "Keep acknowledgements",
        body: "Ask for receiving stamp, diary number, or FIR copy as applicable.",
      },
      {
        title: "Document follow-up",
        body: "Record officer name, station, date, next step, and any medical or rescue action taken.",
      },
    ],
    dont: [
      "Do not exaggerate facts.",
      "Do not go alone if the situation feels unsafe.",
      "Do not rely on social media escalation before basic documentation.",
    ],
    relatedResourceIds: ["animal-rights-legal-desk", "sample-animal-welfare-board-contact"],
    faqs: [vetDisclaimerFaq],
    tags: ["FIR", "police", "legal", "cruelty", "lawyer", "animal welfare"],
  }),
  withDefaults({
    id: "water-bowls-rain-protection",
    title: "Water bowls and rain protection",
    summary: "Set up simple, maintainable water and shelter support without creating conflict.",
    urgency: "Routine",
    category: "Community Care",
    estimatedTime: "1 weekend to set up",
    whenToUse: ["Your area has heat stress, rain exposure, or no clean water for community animals."],
    firstSteps: [
      "Choose low-conflict locations that do not block walkways.",
      "Assign refill and cleaning responsibility.",
      "Use stable bowls and simple rain covers that can be maintained.",
    ],
    steps: [
      {
        title: "Start small",
        body: "Two well-maintained bowls are better than ten dirty bowls.",
      },
      {
        title: "Keep it hygienic",
        body: "Clean daily where possible. Stagnant water can create mosquito issues and neighborhood resistance.",
      },
      {
        title: "Talk to residents",
        body: "Explain who maintains the setup and whom to call if there is a problem.",
      },
    ],
    dont: [
      "Do not place bowls where vehicles crush them.",
      "Do not leave plastic sheets that can injure animals or blow into drains.",
      "Do not create food waste piles near homes.",
    ],
    relatedResourceIds: ["indiranagar-feeder-circle", "indiranagar-care-pet-store"],
    faqs: [vetDisclaimerFaq],
    tags: ["water bowls", "rain protection", "summer", "community", "feeder"],
  }),
  withDefaults({
    id: "mother-dog-newborn-pups",
    title: "Caring for a mother dog and newborn pups",
    summary: "Support the mother safely without moving pups unnecessarily.",
    urgency: "Medium",
    category: "Community Care",
    estimatedTime: "Daily checks for several weeks",
    whenToUse: ["A mother dog has given birth in your lane, basement, construction site, or parking area."],
    firstSteps: [
      "Keep distance and reduce disturbance.",
      "Provide food and water for the mother away from the pups.",
      "Check if the location is immediately unsafe from vehicles, flooding, or cruelty.",
    ],
    steps: [
      {
        title: "Do not rush relocation",
        body: "Mothers may abandon or move pups if disturbed. Relocation needs careful planning and local support.",
      },
      {
        title: "Create a watch schedule",
        body: "Track feeding, pup warmth, mother health, and threats from traffic or people.",
      },
      {
        title: "Plan future ABC",
        body: "Once pups are old enough and the mother is fit, coordinate sterilization and vaccination.",
      },
    ],
    dont: [
      "Do not pick up newborn pups for photos.",
      "Do not feed pups cow milk casually.",
      "Do not separate pups from the mother unless a vet or rescuer advises it for safety.",
    ],
    relatedResourceIds: ["indiranagar-feeder-circle", "sample-streetie-shelter"],
    faqs: [vetDisclaimerFaq],
    tags: ["mother dog", "newborn pups", "puppies", "feeder", "ABC"],
  }),
  withDefaults({
    id: "snake-wildlife-contact-guidance",
    title: "Snake / wildlife contact guidance",
    summary: "Keep people away, do not handle wildlife, and call trained rescue support.",
    urgency: "High",
    category: "Other Animals / Wildlife",
    estimatedTime: "Immediate isolation and call",
    whenToUse: ["You see a snake, injured bird, pigeon, bat, or other wild animal needing help."],
    firstSteps: [
      "Keep distance and prevent crowding.",
      "Do not touch or trap the animal yourself.",
      "Call a trained wildlife rescue contact with exact location and photo if safe.",
    ],
    steps: [
      {
        title: "Create a safe perimeter",
        body: "Move children and pets away. Keep doors closed if the animal is inside a room.",
      },
      {
        title: "Share useful information",
        body: "Send location, animal type, size, injury status, and whether it is confined or moving.",
      },
      {
        title: "Wait for trained help",
        body: "Wildlife handling can harm the animal and the rescuer. Follow the rescue team's instructions.",
      },
    ],
    dont: [
      "Do not try to identify or catch a snake yourself.",
      "Do not feed injured birds or wildlife without guidance.",
      "Do not use glue, nets, sticks, or chemicals.",
    ],
    relatedResourceIds: ["bangalore-wildlife-rescue-sample"],
    faqs: [vetDisclaimerFaq],
    tags: ["snake", "wildlife", "bird", "pigeon", "bat", "rescue"],
  }),
  withDefaults({
    id: "dog-looks-sick-weak",
    title: "Dog looks sick or weak",
    summary: "Watch appetite, gums, breathing, hydration, fever signs, and mobility before escalating.",
    urgency: "High",
    category: "Medical",
    estimatedTime: "Same day vet call if dull or not eating",
    whenToUse: ["A dog is lying down unusually, weak, not eating, vomiting, or breathing differently."],
    firstSteps: [
      "Observe from a safe distance and note changes from normal behavior.",
      "Check whether the dog can stand, walk, drink, and respond.",
      "Call a vet urgently if collapse, pale gums, labored breathing, or repeated vomiting is present.",
    ],
    steps: [
      {
        title: "Collect basic observations",
        body: "Appetite, stool, vomiting, wounds, ticks, heat exposure, and recent surgery all help the vet triage.",
      },
      {
        title: "Offer shade and quiet",
        body: "If safe, provide shade and a calm area. Avoid forcing food or water.",
      },
      {
        title: "Escalate early",
        body: "Street animals can decline quickly. Same-day vet advice is safer than waiting for severe symptoms.",
      },
    ],
    dont: defaultDont,
    relatedResourceIds: ["east-bangalore-home-visit-vet", "compassion-homeopathy-vet", "domlur-urgent-vet-clinic"],
    faqs: [vetDisclaimerFaq],
    tags: ["sick", "weak", "fever", "not eating", "vomiting", "vet"],
  }),
  withDefaults({
    id: "puppies-abandoned",
    title: "Puppies abandoned",
    summary: "Confirm the mother is not nearby before intervening, then keep pups warm and seek help.",
    urgency: "High",
    category: "Foster / Shelter",
    estimatedTime: "Immediate warmth and assessment",
    whenToUse: ["You found pups without a visible mother, especially if they are crying, cold, or exposed."],
    firstSteps: [
      "Watch discreetly to see if the mother returns.",
      "Keep pups warm and dry if they are in danger.",
      "Contact a vet, foster coordinator, or shelter for age-specific feeding advice.",
    ],
    steps: [
      {
        title: "Check for immediate danger",
        body: "Traffic, rain, drains, and direct sun may require careful movement to a nearby safer spot.",
      },
      {
        title: "Avoid wrong feeding",
        body: "Very young pups need age-appropriate feeding; wrong milk or technique can cause aspiration.",
      },
      {
        title: "Find a foster plan",
        body: "Neonatal pups need frequent feeding, warmth, and monitoring. Be honest about capacity.",
      },
    ],
    dont: [
      "Do not assume pups are abandoned if the mother is briefly away.",
      "Do not feed cow milk without advice.",
      "Do not separate from a healthy mother unless there is a clear safety reason.",
    ],
    relatedResourceIds: ["east-bangalore-foster-circle", "sample-streetie-shelter"],
    faqs: [vetDisclaimerFaq],
    tags: ["puppies", "abandoned", "foster", "mother dog", "newborn"],
  }),
  withDefaults({
    id: "dog-aggressive-scared",
    title: "Dog is aggressive or scared",
    summary: "Reduce triggers, avoid chasing, and involve known feeders or trained handlers.",
    urgency: "Medium",
    category: "Community Care",
    estimatedTime: "Depends on situation",
    whenToUse: ["A dog is growling, snapping, hiding, guarding pups, or reacting to people."],
    firstSteps: [
      "Increase distance and ask people not to stare, shout, or throw objects.",
      "Look for pain, pups, food guarding, or a recent frightening event.",
      "Call a known feeder, behavior-aware volunteer, or rescuer if handling is needed.",
    ],
    steps: [
      {
        title: "Remove pressure",
        body: "Most scared dogs calm when space increases. Move crowds away before trying anything else.",
      },
      {
        title: "Use familiar people",
        body: "A regular feeder or local carer may be able to approach safely when strangers cannot.",
      },
      {
        title: "Escalate if there is bite risk",
        body: "If the animal is injured, trapped, or repeatedly lunging, wait for trained support.",
      },
    ],
    dont: [
      "Do not hit, chase, corner, or shout at the dog.",
      "Do not ask children to approach for photos.",
      "Do not label the dog rabid without specific signs and qualified review.",
    ],
    relatedResourceIds: ["sample-rescue-volunteer-network", "indiranagar-feeder-circle"],
    faqs: [vetDisclaimerFaq],
    tags: ["aggressive", "scared", "bite risk", "rabies", "rabis", "feeder"],
  }),
  withDefaults({
    id: "animal-transport-guidance",
    title: "I need animal transport",
    summary: "Choose ambulance, pet cab, or volunteer transport based on urgency and handling risk.",
    urgency: "High",
    category: "Medical",
    estimatedTime: "15-45 minutes to arrange in a good scenario",
    whenToUse: ["An animal needs to reach a clinic, ABC centre, foster, boarding, or shelter."],
    firstSteps: [
      "Decide if this is emergency ambulance or non-critical pet cab transport.",
      "Share exact pickup, drop, animal size, temperament, and whether a carrier is available.",
      "Confirm who will travel with the animal and who will pay.",
    ],
    steps: [
      {
        title: "Match vehicle to case",
        body: "Bleeding, collapse, or trauma needs emergency handling. Stable animals may use a pet cab or private vehicle.",
      },
      {
        title: "Prepare containment",
        body: "Use a crate, carrier, leash, muzzle if safe, towel, or box depending on species and size.",
      },
      {
        title: "Call the destination first",
        body: "Do not transport to a clinic, shelter, or ABC centre without confirming they can receive the animal.",
      },
    ],
    dont: [
      "Do not put a scared loose animal in an open car without containment.",
      "Do not transport wildlife without trained guidance.",
      "Do not move community animals far from their territory unless there is a clear welfare reason.",
    ],
    relatedResourceIds: ["streetie-animal-ambulance-east", "old-airport-road-pet-cab"],
    faqs: [vetDisclaimerFaq],
    tags: ["transport", "ambulance", "pet cab", "carrier", "ABC", "vet"],
  }),
];
