/**
 * UI dictionary. English is the source; Amharic must have every key (enforced by the type
 * and by src/test/i18n.test.ts). Lines marked AM-DRAFT need professional review.
 * Unmarked Amharic is taken from the clinic's own brochure or signage.
 */
export const en = {
  "nav.home": "Home",
  "nav.services": "Services",
  "nav.conditions": "Conditions",
  "nav.about": "About",
  "nav.resources": "Patient Resources",
  "nav.contact": "Contact",
  "nav.menu": "Menu",
  "nav.close": "Close menu",
  "nav.skip": "Skip to content",
  "lang.label": "Language",
  "cta.call": "Call",
  "cta.callClinic": "Call the clinic",
  "cta.directions": "Directions",
  "cta.explore": "Explore Our Care",
  "cta.contact": "Contact the Clinic",
  "cta.learnMore": "Learn more",
  "cta.allServices": "All services",
  "cta.allConditions": "All conditions",
  "cta.telegram": "Message on Telegram",
  "hero.eyebrow": "Rheumatology · Internal Medicine · Addis Ababa",
  "hero.title": "Understand Your Body. Move Toward Better Health.",
  "hero.body": "Specialist-led rheumatology and internal medicine care, with a focus on understanding your health and supporting your journey toward better wellbeing.",
  "hero.skip": "Skip intro",
  "hero.scroll": "Scroll",
  "hero.hotspotsLabel": "Explore areas of the body",
  "hero.figureAlt": "Illustration of the human body showing joints, bones and nerve pathways",
  "home.introEyebrow": "About the clinic",
  "home.introTitle": "A clinic devoted to joints, muscles and the whole person.",
  "home.introBody": "Rheum is a rheumatology clinic in Addis Ababa that also provides general internal medicine and subspeciality care. The clinic describes its approach as Royalty Care: treatment based on evidence, delivered with a deep understanding of what people deserve while they are in pain.",
  "home.servicesEyebrow": "What we offer",
  "home.servicesTitle": "Services",
  "home.conditionsEyebrow": "Areas of care",
  "home.conditionsTitle": "Conditions we help people understand",
  "home.conditionsBody": "Plain-language overviews of common rheumatology concerns. They are general information, not a diagnosis.",
  "home.approachEyebrow": "Our approach",
  "home.approachTitle": "Royalty Care",
  "home.approach1t": "Evidence first",
  "home.approach1b": "Care decisions grounded in current medical evidence.",
  "home.approach2t": "The whole body",
  "home.approach2b": "Joints, muscles and immune health are connected to everything else — so is internal medicine.",
  "home.approach3t": "Dignity in pain",
  "home.approach3b": "Patients are treated with respect, patience and clear explanations.",
  "home.visitEyebrow": "Your visit",
  "home.visitTitle": "What to expect",
  "home.visit1": "Call ahead to ask about availability.",
  "home.visit2": "Bring previous test results, prescriptions and a list of your current medicines.",
  "home.visit3": "Note when your symptoms started and what makes them better or worse.",
  "home.visit4": "Your clinician will take a history, examine you, and explain any recommended tests.",
  "home.resourcesTitle": "Prepare for your appointment",
  "home.resourcesBody": "Practical guidance and answers to common questions.",
  "home.faqTitle": "Frequently asked questions",
  "contact.eyebrow": "Contact & visit",
  "contact.title": "Talk to the clinic",
  "contact.phones": "Phone",
  "contact.address": "Location",
  "contact.email": "Email",
  "contact.social": "Follow the clinic",
  "contact.hours": "Opening hours",
  "contact.hoursPending": "Please call the clinic to confirm current opening hours.",
  "contact.mapNote": "Map location provided for convenience. Please call to confirm directions.",
  "contact.openMap": "Open in Google Maps",
  "contact.photoAlt": "The clinic's entrance gate with blue Rheum signage",
  "services.title": "Our Services",
  "services.lead": "General internal medicine and rheumatology services, as listed by the clinic.",
  "conditions.title": "Conditions",
  "conditions.lead": "Educational overviews to help you prepare for a conversation with a clinician.",
  "condition.what": "What it is",
  "condition.symptoms": "Signs that may warrant a medical assessment",
  "condition.evaluation": "How clinicians generally evaluate it",
  "condition.when": "When to seek care",
  "condition.related": "Related service",
  "about.title": "About the Clinic",
  "about.lead": "A pioneering rheumatology clinic in Ethiopia, also providing general internal medicine and subspeciality care.",
  "about.missionTitle": "Our mission",
  "about.mission": "\u201cWe provide Royalty Care. We treat based on evidence only, and we deeply understand what human beings deserve while they are in pain.\u201d",
  "about.missionSource": "From the clinic's brochure",
  "about.teamTitle": "Our team",
  "about.teamPending": "Individual clinician profiles will be published once the clinic confirms names, titles and biographies.",
  "about.spacesTitle": "Inside the clinic",
  "about.reception": "Reception desk with the Rheum logo",
  "about.waiting": "Bright waiting area",
  "about.sign": "Bilingual clinic sign with phone numbers",
  "about.staff": "Clinic staff gathered in the reception",
  "about.doctors": "Four clinicians from the Rheum team in white coats",
  "resources.title": "Patient Resources",
  "resources.lead": "Practical guidance for your visit, and answers to common questions.",
  "resources.prepTitle": "Preparing for your visit",
  "resources.reviewNote": "Educational articles will be added after clinical review.",
  "crumb.home": "Home",
  "footer.disclaimerTitle": "Medical information disclaimer",
  "footer.disclaimer": "Information on this website is general and educational. It is not a diagnosis or a substitute for consultation with a qualified clinician.",
  "footer.emergency": "If you have urgent or emergency symptoms, seek immediate local medical care. Do not wait for a website or social-media response.",
  "footer.rights": "All rights reserved.",
  "review.badge": "Pending clinical review",
  "notfound.title": "Page not found",
  "notfound.body": "The page you are looking for doesn't exist.",
} as const;

export type DictKey = keyof typeof en;

export const am: Record<DictKey, string> = {
  "nav.home": "መነሻ",
  "nav.services": "አገልግሎቶች",
  "nav.conditions": "የጤና ችግሮች", // AM-DRAFT
  "nav.about": "ስለ እኛ",
  "nav.resources": "ለታካሚዎች", // AM-DRAFT
  "nav.contact": "አድራሻ",
  "nav.menu": "ማውጫ",
  "nav.close": "ማውጫውን ዝጋ",
  "nav.skip": "ወደ ይዘቱ ይዝለሉ", // AM-DRAFT
  "lang.label": "ቋንቋ",
  "cta.call": "ይደውሉ",
  "cta.callClinic": "ወደ ክሊኒኩ ይደውሉ",
  "cta.directions": "አቅጣጫ",
  "cta.explore": "አገልግሎታችንን ይመልከቱ", // AM-DRAFT
  "cta.contact": "ክሊኒኩን ያግኙ",
  "cta.learnMore": "ተጨማሪ ያንብቡ",
  "cta.allServices": "ሁሉም አገልግሎቶች",
  "cta.allConditions": "ሁሉም የጤና ችግሮች", // AM-DRAFT
  "cta.telegram": "በቴሌግራም ይጻፉ",
  "hero.eyebrow": "ሩማቶሎጂ · የውስጥ ደዌ · አዲስ አበባ",
  "hero.title": "ሰውነትዎን ይረዱ። ወደ ተሻለ ጤና ይራመዱ።", // AM-DRAFT
  "hero.body": "በስፔሻሊስት ሐኪሞች የሚሰጥ የሩማቶሎጂ እና የውስጥ ደዌ ህክምና — ጤናዎን እንዲረዱ እና ወደ ተሻለ ደህንነት እንዲጓዙ እንደግፋለን።", // AM-DRAFT
  "hero.skip": "መግቢያውን ዝለል",
  "hero.scroll": "ወደ ታች",
  "hero.hotspotsLabel": "የሰውነት ክፍሎችን ይመልከቱ", // AM-DRAFT
  "hero.figureAlt": "መገጣጠሚያዎችን፣ አጥንቶችን እና ነርቮችን የሚያሳይ የሰው አካል ሥዕል", // AM-DRAFT
  "home.introEyebrow": "ስለ ክሊኒኩ",
  "home.introTitle": "ለመገጣጠሚያዎች፣ ለጡንቻዎች እና ለሙሉ ሰው የቆመ ክሊኒክ።", // AM-DRAFT
  "home.introBody": "ሩሁም በሀገራችን በኢትዮጵያ የመጀመሪያውና ፈር ቀዳጅ የሆነ የሩማቶሎጂ ክሊኒክ ሲሆን በተጨማሪም ጠቅላላ የውስጥ ደዌ እና ሌሎች የሰብስፔሻሊቲ ህክምና አገልግሎቶችን ይሰጣል።",
  "home.servicesEyebrow": "የምንሰጣቸው",
  "home.servicesTitle": "የምንሰጣቸው አገልግሎቶች",
  "home.conditionsEyebrow": "የህክምና ዘርፎች", // AM-DRAFT
  "home.conditionsTitle": "እንዲረዱዋቸው የምናግዛቸው የጤና ችግሮች", // AM-DRAFT
  "home.conditionsBody": "ስለ ተለመዱ የሩማቶሎጂ ችግሮች ቀላል ማብራሪያ። አጠቃላይ መረጃ እንጂ ምርመራ አይደሉም።", // AM-DRAFT
  "home.approachEyebrow": "አቀራረባችን",
  "home.approachTitle": "Royalty Care",
  "home.approach1t": "በማስረጃ ላይ የተመሠረተ", // AM-DRAFT
  "home.approach1b": "የህክምና ውሳኔዎች ወቅታዊ በሆነ የህክምና ማስረጃ ላይ ይመሠረታሉ።", // AM-DRAFT
  "home.approach2t": "ሙሉ ሰውነት", // AM-DRAFT
  "home.approach2b": "መገጣጠሚያዎች፣ ጡንቻዎችና የበሽታ መከላከል ሥርዓት ከመላው ሰውነት ጋር የተሳሰሩ ናቸው።", // AM-DRAFT
  "home.approach3t": "በህመም ጊዜ ክብር", // AM-DRAFT
  "home.approach3b": "ታካሚዎች በአክብሮት፣ በትዕግስት እና ግልጽ በሆነ ማብራሪያ ይስተናገዳሉ።", // AM-DRAFT
  "home.visitEyebrow": "ጉብኝትዎ",
  "home.visitTitle": "ምን ይጠብቁ", // AM-DRAFT
  "home.visit1": "ቀጠሮ ስለመኖሩ ለመጠየቅ አስቀድመው ይደውሉ።", // AM-DRAFT
  "home.visit2": "ቀደም ሲል የተደረጉ ምርመራዎችን፣ የመድኃኒት ማዘዣዎችን እና የሚወስዷቸውን መድኃኒቶች ዝርዝር ይዘው ይምጡ።", // AM-DRAFT
  "home.visit3": "ምልክቶቹ መቼ እንደጀመሩና ምን እንደሚያባብሳቸው ወይም እንደሚያቀልላቸው ያስታውሱ።", // AM-DRAFT
  "home.visit4": "ሐኪምዎ ታሪክዎን ይጠይቃል፣ ይመረምርዎታል፣ አስፈላጊ ምርመራዎችንም ያብራራል።", // AM-DRAFT
  "home.resourcesTitle": "ለቀጠሮዎ ይዘጋጁ", // AM-DRAFT
  "home.resourcesBody": "ተግባራዊ መመሪያዎች እና ለተለመዱ ጥያቄዎች መልሶች።", // AM-DRAFT
  "home.faqTitle": "ተደጋግመው የሚጠየቁ ጥያቄዎች",
  "contact.eyebrow": "አድራሻ እና ጉብኝት",
  "contact.title": "ክሊኒኩን ያነጋግሩ", // AM-DRAFT
  "contact.phones": "ስልክ",
  "contact.address": "አድራሻ",
  "contact.email": "ኢሜይል",
  "contact.social": "ክሊኒኩን ይከተሉ",
  "contact.hours": "የሥራ ሰዓት",
  "contact.hoursPending": "ወቅታዊውን የሥራ ሰዓት ለማረጋገጥ እባክዎ ወደ ክሊኒኩ ይደውሉ።", // AM-DRAFT
  "contact.mapNote": "ካርታው ለማገዝ ብቻ የቀረበ ነው። አቅጣጫውን ለማረጋገጥ እባክዎ ይደውሉ።", // AM-DRAFT
  "contact.openMap": "በGoogle ካርታ ይክፈቱ",
  "contact.photoAlt": "ሰማያዊ የሩሁም ምልክት ያለበት የክሊኒኩ መግቢያ በር", // AM-DRAFT
  "services.title": "የምንሰጣቸው አገልግሎቶች",
  "services.lead": "ክሊኒኩ የሚሰጣቸው የውስጥ ደዌ እና የሩማቶሎጂ አገልግሎቶች።", // AM-DRAFT
  "conditions.title": "የጤና ችግሮች", // AM-DRAFT
  "conditions.lead": "ከሐኪም ጋር ለሚያደርጉት ውይይት እንዲዘጋጁ የሚያግዙ አጠቃላይ መረጃዎች።", // AM-DRAFT
  "condition.what": "ምንድን ነው?", // AM-DRAFT
  "condition.symptoms": "የህክምና ምርመራ ሊያስፈልጋቸው የሚችሉ ምልክቶች", // AM-DRAFT
  "condition.evaluation": "ሐኪሞች በአጠቃላይ እንዴት ይመረምሩታል", // AM-DRAFT
  "condition.when": "መቼ ህክምና መፈለግ አለብዎ", // AM-DRAFT
  "condition.related": "ተዛማጅ አገልግሎት", // AM-DRAFT
  "about.title": "ስለ ክሊኒኩ",
  "about.lead": "በኢትዮጵያ ፈር ቀዳጅ የሆነ የሩማቶሎጂ ክሊኒክ፣ ጠቅላላ የውስጥ ደዌ እና የሰብስፔሻሊቲ ህክምናም ይሰጣል።",
  "about.missionTitle": "ተልዕኳችን",
  "about.mission": "\u201cRoyalty Care እንሰጣለን። በማስረጃ ላይ ብቻ ተመሥርተን እናክማለን፣ ሰዎች በህመም ጊዜ የሚገባቸውን በጥልቀት እንረዳለን።\u201d", // AM-DRAFT
  "about.missionSource": "ከክሊኒኩ በራሪ ወረቀት",
  "about.teamTitle": "ቡድናችን",
  "about.teamPending": "ክሊኒኩ ስሞችን፣ ማዕረጎችን እና የሕይወት ታሪኮችን ሲያረጋግጥ የሐኪሞች መግለጫ ይታተማል።", // AM-DRAFT
  "about.spacesTitle": "በክሊኒኩ ውስጥ",
  "about.reception": "የሩሁም አርማ ያለበት የእንግዳ መቀበያ", // AM-DRAFT
  "about.waiting": "ብሩህ የመጠበቂያ ክፍል", // AM-DRAFT
  "about.sign": "ስልክ ቁጥሮች ያሉበት የክሊኒኩ ባለሁለት ቋንቋ ምልክት", // AM-DRAFT
  "about.staff": "በእንግዳ መቀበያው የተሰበሰቡ የክሊኒኩ ሠራተኞች", // AM-DRAFT
  "about.doctors": "ነጭ ጋዋን የለበሱ አራት የሩሁም ሐኪሞች", // AM-DRAFT
  "resources.title": "ለታካሚዎች", // AM-DRAFT
  "resources.lead": "ለጉብኝትዎ ተግባራዊ መመሪያ እና ለተለመዱ ጥያቄዎች መልሶች።", // AM-DRAFT
  "resources.prepTitle": "ለጉብኝትዎ መዘጋጀት", // AM-DRAFT
  "resources.reviewNote": "ትምህርታዊ ጽሑፎች በሐኪም ከተገመገሙ በኋላ ይጨመራሉ።", // AM-DRAFT
  "crumb.home": "መነሻ",
  "footer.disclaimerTitle": "የህክምና መረጃ ማሳሰቢያ", // AM-DRAFT
  "footer.disclaimer": "በዚህ ድረ-ገጽ ላይ ያለው መረጃ አጠቃላይና ትምህርታዊ ነው። ምርመራ ወይም ብቃት ካለው ሐኪም ጋር የሚደረግ ምክክር ምትክ አይደለም።", // AM-DRAFT
  "footer.emergency": "አስቸኳይ ወይም የድንገተኛ ምልክቶች ካሉዎት ወዲያውኑ በአቅራቢያዎ ህክምና ያግኙ። የድረ-ገጽ ወይም የማኅበራዊ ሚዲያ ምላሽ አይጠብቁ።", // AM-DRAFT
  "footer.rights": "መብቱ በሕግ የተጠበቀ ነው።",
  "review.badge": "በሐኪም ግምገማ ላይ", // AM-DRAFT
  "notfound.title": "ገጹ አልተገኘም",
  "notfound.body": "የሚፈልጉት ገጽ የለም።",
};
