/**
 * Single source of clinic facts.
 * Sources: the clinic's own brochure and signage photos (uploaded by the owner)
 * plus previously published public info. NOTHING here is confirmed as current —
 * every item must be re-confirmed by the clinic before launch (see VERIFICATION.md).
 */
export type L = { en: string; am: string };

export const clinic = {
  name: {
    en: "Rheum Rheumatology and Internal Medicine Speciality Clinic",
    // From the clinic's Amharic brochure.
    am: "ሩሁም የሩማቶሎጂ እና የውስጥ ደዌ ስፔሻሊቲ ክሊኒክ",
  } satisfies L,
  tagline: { en: "Royalty Care", am: "Royalty Care" } satisfies L,
  // UNVERIFIED: from brochure + signage.
  phones: [
    { tel: "+251973125609", display: "0973 12 56 09" },
    { tel: "+251973125594", display: "0973 12 55 94" },
  ],
  // UNVERIFIED: from brochure.
  email: "medicalrheum@gmail.com",
  // UNVERIFIED: brochure + public posts. Former Dembel location is closed — never show it.
  location: {
    en: "Around Kirkos Tabot Maderia, a short distance down from Kirkos Condominium, next to Kirkos Tele, Addis Ababa.",
    am: "ቂርቆስ ታቦት ማደሪያ አካባቢ፣ ከቂርቆስ ቴሌ ጎን፣ አዲስ አበባ።",
  } satisfies L,
  // UNVERIFIED map pin — clinic must confirm.
  mapUrl: "https://maps.app.goo.gl/uKd5gPvx9pqD9jnK8",
  // Intentionally null until the clinic provides confirmed hours.
  openingHours: null as L | null,
  social: [
    { id: "telegram", label: "Telegram", url: "https://t.me/RheumIMSC" },
    { id: "facebook", label: "Facebook", url: "https://www.facebook.com/Rheumrheumatologyandinternalmedicineclinic" },
    { id: "instagram", label: "Instagram", url: "https://instagram.com/rheum_medical_services/" },
    { id: "tiktok", label: "TikTok", url: "https://www.tiktok.com/@rheumrheumatology" },
  ],
  // The brochure names the founder "Dr. Birhanu D. Desyibelew"; the Telegram page says
  // "Dr. Berhanu Demelash". Spelling, title and bio must be confirmed before showing a profile.
  team: [] as { name: L; title: L; photo?: string }[],
} as const;

export const primaryPhone = clinic.phones[0];
