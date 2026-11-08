import type { L } from "@/config/clinic";

/**
 * Educational condition overviews. ALL text is a general draft and must be reviewed by a
 * clinician before publication (reviewed: false). Amharic is AM-DRAFT throughout.
 */
export type Condition = {
  slug: string;
  joint: string; // matches an anatomy hotspot id
  reviewed: boolean;
  title: L;
  summary: L;
  what: L;
  symptoms: L[];
  evaluation: L;
  when: L;
  service: string;
};

export const conditions: Condition[] = [
  {
    slug: "rheumatoid-arthritis",
    joint: "hands",
    reviewed: false,
    service: "rheumatology",
    title: { en: "Rheumatoid Arthritis", am: "ሩማቶይድ አርትራይተስ" },
    summary: {
      en: "A long-term immune condition that mainly affects the small joints of the hands and feet.",
      am: "በዋናነት የእጅና የእግር ትናንሽ መገጣጠሚያዎችን የሚያጠቃ የረጅም ጊዜ የበሽታ መከላከል ሥርዓት ችግር።",
    },
    what: {
      en: "Rheumatoid arthritis (RA) happens when the immune system causes inflammation in the lining of the joints. Over time, untreated inflammation can damage joints.",
      am: "ሩማቶይድ አርትራይተስ የበሽታ መከላከል ሥርዓት በመገጣጠሚያዎች ሽፋን ላይ ብግነት ሲያስከትል ይከሰታል። ሳይታከም ከቆየ መገጣጠሚያዎችን ሊጎዳ ይችላል።",
    },
    symptoms: [
      { en: "Pain and swelling in several joints, often on both sides", am: "በብዙ መገጣጠሚያዎች፣ ብዙ ጊዜ በሁለቱም ጎኖች ህመምና እብጠት" },
      { en: "Morning stiffness lasting more than 30 minutes", am: "ከ30 ደቂቃ በላይ የሚቆይ የጠዋት ድርቀት" },
      { en: "Tiredness or a general feeling of being unwell", am: "ድካም ወይም አጠቃላይ የሕመም ስሜት" },
    ],
    evaluation: {
      en: "Clinicians generally take a history, examine the joints, and may request blood tests and imaging.",
      am: "ሐኪሞች በአጠቃላይ ታሪክ ይወስዳሉ፣ መገጣጠሚያዎችን ይመረምራሉ፣ የደም እና የምስል ምርመራዎችንም ሊያዝዙ ይችላሉ።",
    },
    when: {
      en: "Seek assessment if joint swelling or stiffness lasts more than a few weeks.",
      am: "የመገጣጠሚያ እብጠት ወይም ድርቀት ከጥቂት ሳምንታት በላይ ከቆየ ምርመራ ያድርጉ።",
    },
  },
  {
    slug: "gout",
    joint: "feet",
    reviewed: false,
    service: "rheumatology",
    title: { en: "Gout", am: "ሪህ" },
    summary: {
      en: "Sudden, intense joint pain caused by uric acid crystals, often in the big toe.",
      am: "በዩሪክ አሲድ ክሪስታሎች የሚከሰት ድንገተኛ ኃይለኛ የመገጣጠሚያ ህመም፣ ብዙ ጊዜ በአውራ ጣት።",
    },
    what: {
      en: "Gout is a type of inflammatory arthritis. When uric acid builds up in the body, crystals can form in a joint and trigger a painful flare.",
      am: "ሪህ የብግነታዊ የመገጣጠሚያ ህመም ዓይነት ነው። ዩሪክ አሲድ በሰውነት ሲከማች በመገጣጠሚያ ውስጥ ክሪስታሎች ተፈጥረው ህመም ያስነሳሉ።",
    },
    symptoms: [
      { en: "Sudden pain, redness and swelling in one joint", am: "በአንድ መገጣጠሚያ ድንገተኛ ህመም፣ መቅላትና እብጠት" },
      { en: "A joint that is very tender to touch", am: "ሲነካ በጣም የሚያም መገጣጠሚያ" },
      { en: "Repeated flares over months or years", am: "በወራት ወይም በዓመታት ውስጥ የሚደጋገም ህመም" },
    ],
    evaluation: {
      en: "Evaluation usually includes a history, joint examination and blood tests; sometimes joint fluid is examined.",
      am: "ምርመራው በአብዛኛው ታሪክ፣ የመገጣጠሚያ ምርመራና የደም ምርመራን ያካትታል።",
    },
    when: {
      en: "Seek care promptly for a hot, swollen joint, especially with fever.",
      am: "የሞቀና ያበጠ መገጣጠሚያ ካለ፣ በተለይ ከትኩሳት ጋር፣ በፍጥነት ህክምና ያግኙ።",
    },
  },
  {
    slug: "lupus",
    joint: "spine",
    reviewed: false,
    service: "rheumatology",
    title: { en: "Lupus (SLE)", am: "ሉፐስ (SLE)" },
    summary: {
      en: "An autoimmune disease that can affect the joints, skin, kidneys and other organs.",
      am: "መገጣጠሚያዎችን፣ ቆዳን፣ ኩላሊትንና ሌሎች አካላትን ሊያጠቃ የሚችል የራስ-ተከላካይ በሽታ።",
    },
    what: {
      en: "Systemic lupus erythematosus (SLE) occurs when the immune system attacks the body's own tissues. It varies widely from person to person.",
      am: "ሉፐስ የበሽታ መከላከል ሥርዓት የሰውነትን ሕብረ ሕዋሳት ሲያጠቃ ይከሰታል። ከሰው ወደ ሰው በእጅጉ ይለያያል።",
    },
    symptoms: [
      { en: "Joint pain and swelling", am: "የመገጣጠሚያ ህመምና እብጠት" },
      { en: "Rashes, especially after sun exposure", am: "በተለይ ከፀሐይ በኋላ የሚወጣ ሽፍታ" },
      { en: "Unexplained fever, tiredness or mouth ulcers", am: "ምክንያቱ ያልታወቀ ትኩሳት፣ ድካም ወይም የአፍ ቁስል" },
    ],
    evaluation: {
      en: "Clinicians consider symptoms across the body and may request blood and urine tests.",
      am: "ሐኪሞች በመላ ሰውነት ያሉ ምልክቶችን ይመለከታሉ፣ የደምና የሽንት ምርመራ ሊያዝዙ ይችላሉ።",
    },
    when: {
      en: "Seek assessment for several of these symptoms together, or if they keep coming back.",
      am: "ከእነዚህ ምልክቶች ብዙዎቹ አብረው ከታዩ ወይም ከተደጋገሙ ምርመራ ያድርጉ።",
    },
  },
  {
    slug: "fibromyalgia",
    joint: "shoulders",
    reviewed: false,
    service: "rheumatology",
    title: { en: "Fibromyalgia", am: "ፋይብሮማያልጂያ" },
    summary: {
      en: "Widespread muscle pain and tiredness, often with poor sleep.",
      am: "በሰፊው የሚሰማ የጡንቻ ህመምና ድካም፣ ብዙ ጊዜ ከእንቅልፍ ማጣት ጋር።",
    },
    what: {
      en: "Fibromyalgia is a long-term condition in which the body processes pain signals differently. It does not damage joints, but it can strongly affect daily life.",
      am: "ፋይብሮማያልጂያ ሰውነት የህመም ምልክቶችን በተለየ መንገድ የሚያስተናግድበት የረጅም ጊዜ ችግር ነው። መገጣጠሚያን አይጎዳም፣ ነገር ግን የዕለት ኑሮን በእጅጉ ሊጎዳ ይችላል።",
    },
    symptoms: [
      { en: "Pain in many areas of the body for months", am: "ለወራት በብዙ የሰውነት ክፍሎች የሚሰማ ህመም" },
      { en: "Fatigue and unrefreshing sleep", am: "ድካምና የማያሳርፍ እንቅልፍ" },
      { en: "Difficulty concentrating", am: "ትኩረት የማድረግ ችግር" },
    ],
    evaluation: {
      en: "Diagnosis is clinical and often involves ruling out other conditions with an examination and tests.",
      am: "ምርመራው ክሊኒካዊ ሲሆን ብዙ ጊዜ ሌሎች ችግሮችን በምርመራ ማስወገድን ያካትታል።",
    },
    when: {
      en: "Seek assessment if widespread pain is affecting your sleep, work or daily activities.",
      am: "ሰፊ ህመም እንቅልፍዎን፣ ሥራዎን ወይም የዕለት እንቅስቃሴዎን ከጎዳ ምርመራ ያድርጉ።",
    },
  },
  {
    slug: "back-shoulder-knee-pain",
    joint: "knees",
    reviewed: false,
    service: "rheumatology",
    title: { en: "Back, Shoulder and Knee Pain", am: "የጀርባ፣ የትከሻ እና የጉልበት ህመም" },
    summary: {
      en: "Common musculoskeletal complaints with many possible causes.",
      am: "ብዙ ምክንያቶች ሊኖሯቸው የሚችሉ የተለመዱ የጡንቻና አጥንት ችግሮች።",
    },
    what: {
      en: "Pain in the back, shoulders or knees can come from muscles, tendons, joints or inflammation. Identifying the cause guides appropriate care.",
      am: "የጀርባ፣ የትከሻ ወይም የጉልበት ህመም ከጡንቻዎች፣ ጅማቶች፣ መገጣጠሚያዎች ወይም ብግነት ሊመጣ ይችላል። ምክንያቱን ማወቅ ተገቢውን ህክምና ይመራል።",
    },
    symptoms: [
      { en: "Pain lasting more than a few weeks", am: "ከጥቂት ሳምንታት በላይ የሚቆይ ህመም" },
      { en: "Stiffness, swelling or reduced movement", am: "ድርቀት፣ እብጠት ወይም የእንቅስቃሴ መቀነስ" },
      { en: "Pain that wakes you at night", am: "በሌሊት የሚያነቃ ህመም" },
    ],
    evaluation: {
      en: "Clinicians examine movement and the affected joint, and may recommend blood tests or imaging.",
      am: "ሐኪሞች እንቅስቃሴንና የተጎዳውን መገጣጠሚያ ይመረምራሉ፣ የደም ወይም የምስል ምርመራ ሊመክሩ ይችላሉ።",
    },
    when: {
      en: "Seek urgent care for pain after a fall or injury, with fever, or with new weakness or numbness.",
      am: "ከመውደቅ ወይም ጉዳት በኋላ፣ ከትኩሳት ጋር፣ ወይም አዲስ ድክመት ወይም መደንዘዝ ካለ አስቸኳይ ህክምና ያግኙ።",
    },
  },
];

export const getCondition = (slug: string) => conditions.find((c) => c.slug === slug);
