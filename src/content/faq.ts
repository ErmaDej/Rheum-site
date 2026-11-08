import type { L } from "@/config/clinic";

/** General FAQs. Answers avoid unconfirmed facts (hours, prices, insurance). AM-DRAFT. */
export const faqs: { q: L; a: L }[] = [
  {
    q: { en: "How do I make an appointment?", am: "ቀጠሮ እንዴት እይዛለሁ?" },
    a: {
      en: "Please call the clinic on one of the numbers listed on this page. You can also message the clinic on Telegram.",
      am: "እባክዎ በዚህ ገጽ ላይ ካሉት ቁጥሮች በአንዱ ወደ ክሊኒኩ ይደውሉ። በቴሌግራምም መጻፍ ይችላሉ።",
    },
  },
  {
    q: { en: "What is a rheumatologist?", am: "የሩማቶሎጂ ሐኪም ማን ነው?" },
    a: {
      en: "A rheumatologist is a physician who specialises in conditions of the joints, muscles, bones and immune system, such as arthritis, gout and lupus.",
      am: "የሩማቶሎጂ ሐኪም በመገጣጠሚያዎች፣ ጡንቻዎች፣ አጥንቶችና የበሽታ መከላከል ሥርዓት ችግሮች ላይ፣ እንደ ሪህና ሉፐስ፣ የሰለጠነ ሐኪም ነው።",
    },
  },
  {
    q: { en: "What should I bring to my first visit?", am: "ለመጀመሪያ ጉብኝቴ ምን ይዤ ልምጣ?" },
    a: {
      en: "Bring any previous test results, imaging reports, prescriptions and a list of the medicines you currently take.",
      am: "ቀደም ሲል የተደረጉ ምርመራዎችን፣ የምስል ሪፖርቶችን፣ የመድኃኒት ማዘዣዎችንና የሚወስዷቸውን መድኃኒቶች ዝርዝር ይዘው ይምጡ።",
    },
  },
  {
    q: { en: "Can this website diagnose my symptoms?", am: "ይህ ድረ-ገጽ ምልክቶቼን መመርመር ይችላል?" },
    a: {
      en: "No. The information here is general. Only a clinician who examines you can make a diagnosis.",
      am: "አይችልም። እዚህ ያለው መረጃ አጠቃላይ ነው። ምርመራ ሊያደርግ የሚችለው እርስዎን የሚመረምር ሐኪም ብቻ ነው።",
    },
  },
  {
    q: { en: "What are the opening hours?", am: "የሥራ ሰዓቱ ስንት ነው?" },
    a: {
      en: "Please call the clinic to confirm current opening hours.",
      am: "ወቅታዊውን የሥራ ሰዓት ለማረጋገጥ እባክዎ ወደ ክሊኒኩ ይደውሉ።",
    },
  },
];
