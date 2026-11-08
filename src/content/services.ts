import type { L } from "@/config/clinic";

/**
 * Services exactly as listed in the clinic's brochure. Do not add services that are not
 * confirmed by the clinic. Descriptions are general drafts (AM-DRAFT where noted) and need
 * clinic review.
 */
export type Service = {
  slug: string;
  title: L;
  summary: L;
  body: L[];
  icon: "pulse" | "alert" | "calendar" | "stethoscope" | "joint" | "clipboard";
};

export const services: Service[] = [
  {
    slug: "rheumatology",
    icon: "joint",
    title: {
      en: "Rheumatology and Subspeciality Care",
      am: "የቁርጥማት፣ የመገጣጠሚያ እና አያያዥ ጡንቻዎች እና ከኢሚዩኒቲ ጋር የተያያዙ ችግሮች ህክምና",
    },
    summary: {
      en: "Assessment and care for conditions affecting the joints, muscles, connective tissues and the immune system.",
      am: "መገጣጠሚያዎችን፣ ጡንቻዎችን፣ አያያዥ ሕብረ ሕዋሳትንና የበሽታ መከላከል ሥርዓትን የሚያጠቁ ችግሮች ምርመራና ህክምና።", // AM-DRAFT
    },
    body: [
      {
        en: "Rheumatology focuses on conditions such as inflammatory arthritis, gout, lupus and other immune-related diseases that can affect joints, muscles and organs.",
        am: "ሩማቶሎጂ እንደ ብግነታዊ የመገጣጠሚያ ህመም፣ ሪህ፣ ሉፐስ እና ሌሎች መገጣጠሚያዎችን፣ ጡንቻዎችንና የአካል ክፍሎችን ሊያጠቁ በሚችሉ ከኢሚዩኒቲ ጋር የተያያዙ በሽታዎች ላይ ያተኩራል።", // AM-DRAFT
      },
      {
        en: "A visit typically includes a detailed history, a physical examination and, where appropriate, laboratory or imaging tests to guide a management plan.",
        am: "ጉብኝቱ በአብዛኛው ዝርዝር ታሪክ፣ የአካል ምርመራ እና አስፈላጊ ሲሆን የላቦራቶሪ ወይም የምስል ምርመራዎችን ያካትታል።", // AM-DRAFT
      },
    ],
  },
  {
    slug: "internal-medicine",
    icon: "stethoscope",
    title: { en: "General Internal Medicine Care", am: "የውስጥ ደዌ ህክምና" },
    summary: {
      en: "Diagnosis and management of adult medical conditions affecting the body's internal organs.",
      am: "በአዋቂዎች የውስጥ አካላትን የሚያጠቁ የጤና ችግሮች ምርመራና ህክምና።", // AM-DRAFT
    },
    body: [
      {
        en: "Internal medicine looks at adult health as a whole, covering a broad range of conditions and how they interact.",
        am: "የውስጥ ደዌ ህክምና የአዋቂዎችን ጤና በሙሉነት ይመለከታል፤ ሰፊ የጤና ችግሮችንና እርስ በርስ ያላቸውን ግንኙነት ያካትታል።", // AM-DRAFT
      },
    ],
  },
  {
    slug: "chronic-illness",
    icon: "calendar",
    title: { en: "Follow-up and Management of Chronic Illness", am: "የረጅም ጊዜ ህመሞች ክትትልና ህክምና" }, // AM-DRAFT
    summary: {
      en: "Ongoing review and support for long-term conditions.",
      am: "ለረጅም ጊዜ ህመሞች ቀጣይ ክትትልና ድጋፍ።", // AM-DRAFT
    },
    body: [
      {
        en: "Many rheumatic and internal medicine conditions are long-term. Regular follow-up helps clinicians review symptoms, medicines and test results over time.",
        am: "ብዙ የሩማቲክና የውስጥ ደዌ ችግሮች የረጅም ጊዜ ናቸው። መደበኛ ክትትል ሐኪሞች ምልክቶችን፣ መድኃኒቶችንና የምርመራ ውጤቶችን በጊዜ ሂደት እንዲገመግሙ ይረዳል።", // AM-DRAFT
      },
    ],
  },
  {
    slug: "acute-care",
    icon: "pulse",
    title: { en: "Acute Medical Illness Care and Management", am: "የአጣዳፊ ህመሞች ህክምና" }, // AM-DRAFT
    summary: {
      en: "Assessment and treatment of sudden medical illnesses in adults.",
      am: "በድንገት የሚከሰቱ የአዋቂዎች ህመሞች ምርመራና ህክምና።", // AM-DRAFT
    },
    body: [
      {
        en: "Please call the clinic before visiting so the team can advise you on the best next step.",
        am: "ቡድኑ ቀጣዩን ተገቢ እርምጃ እንዲመክርዎ እባክዎ ከመምጣትዎ በፊት ወደ ክሊኒኩ ይደውሉ።", // AM-DRAFT
      },
    ],
  },
  {
    slug: "emergency",
    icon: "alert",
    title: { en: "Emergency Service", am: "የድንገተኛ ህክምና" },
    summary: {
      en: "Listed by the clinic as an available service. Call the clinic directly.",
      am: "ክሊኒኩ ከሚሰጣቸው አገልግሎቶች አንዱ። በቀጥታ ወደ ክሊኒኩ ይደውሉ።", // AM-DRAFT
    },
    body: [
      {
        en: "The scope and hours of emergency service must be confirmed by phone. In a life-threatening situation, go to the nearest emergency department.",
        am: "የድንገተኛ አገልግሎቱ ወሰንና ሰዓት በስልክ መረጋገጥ አለበት። ሕይወትን አደጋ ላይ በሚጥል ሁኔታ በአቅራቢያ ወዳለ የድንገተኛ ክፍል ይሂዱ።", // AM-DRAFT
      },
    ],
  },
  {
    slug: "medical-checkup",
    icon: "clipboard",
    title: { en: "Full Medical Checkup", am: "ጠቅላላ የጤና ምርመራ" },
    summary: {
      en: "A general health review for adults.",
      am: "ለአዋቂዎች አጠቃላይ የጤና ግምገማ።", // AM-DRAFT
    },
    body: [
      {
        en: "Ask the clinic by phone which checks are included and how to prepare.",
        am: "ምን ምርመራዎች እንደሚካተቱና እንዴት እንደሚዘጋጁ ክሊኒኩን በስልክ ይጠይቁ።", // AM-DRAFT
      },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
