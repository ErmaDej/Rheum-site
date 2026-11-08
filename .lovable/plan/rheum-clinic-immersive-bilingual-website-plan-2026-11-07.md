# Rheum Clinic — Immersive Bilingual Website Plan

## Inputs found
- Only the brief was uploaded. **No logo, photos, 3D model or Amharic copy were supplied.**
- The current project is a blank starter. Nothing exists yet that needs to be kept.
- I have not looked at the social or website links. Nothing in this plan comes from them.

## 1. Visual direction: "Clinical Precision, Human Warmth"
- **Two settings:** a dark navy cinematic hero that fades into a light ivory editorial site.
- **Colors (provisional; adjusted once the real logo arrives):** midnight #081B2A, deep blue #12344A, clinical teal #0E9F9A, luminous cyan #69D9E8, ivory #F5F8FA, slate text #344754. Coral is used only for joint markers. All colors are stored as named theme colors, so the whole site can be re-themed in one place.
- **Typography:** Manrope for English, Noto Sans Ethiopic for Amharic, both with system fallbacks. Headlines are large and editorial with tight tracking, on a fluid type scale.
- **Shared style settings:** spacing scale, container widths (prose 68ch, page 1240px), modest corner rounding, soft layered shadows, and one set of motion timings (fast, base, slow).
- **What to avoid:** repeated three-column card grids, decorative blobs and glass on every panel. Glass is used only on the header over the dark hero.

## 2. Sitemap and visitor journey
```text
/                     Home (anatomy hero -> intro -> services -> conditions -> approach -> visit -> resources -> FAQ -> contact)
/services             Overview
/services/$slug       Rheumatology, Internal Medicine (only the two confirmed specialties)
/conditions           Index
/conditions/$slug     Gout, Rheumatoid arthritis, Lupus (SLE), Fibromyalgia, Back/shoulder/knee pain
/about                Mission and approach; team section shows "details pending confirmation"
/resources            Visit preparation, FAQ. Articles are marked "pending clinical review"
/contact              Phones, location description, map link, social links
```
- **Visitor journey:** hero, then understand the specialty, then explore a service or condition, then call or get directions.
- **Always one tap away:** Call and Directions buttons in the header, plus a fixed bar on mobile.
- Internal pages have breadcrumbs. The footer carries the medical disclaimer and the emergency notice.

## 3. Anatomy hero approach
- No licensed 3D model was supplied, so the hero uses a **layered, animated SVG illustration** instead.
- **Layers:**
  - Body silhouette with a soft volumetric gradient
  - Simplified skeleton
  - Glowing joints (hands, wrists, shoulders, spine, hips, knees, feet)
  - Fine nerve paths with small light points travelling along them
  - Faint connective lines and a light particle field
- **Motion:**
  - On desktop, the figure shifts slightly as the pointer moves. On touch screens it stays still.
  - Animation pauses when the hero is off screen.
  - Hotspots are keyboard-focusable buttons. Each shows a short label and links to the matching condition or service. There is no diagnosis wording.
  - "Explore Our Care" shrinks and fades the scene, moves from dark to light, and scrolls smoothly to the intro. Normal scrolling always works.
  - A "Skip intro" link jumps straight to the content.
- **Fallbacks:**
  - Reduced-motion setting: a static version of the same picture.
  - The headline and buttons are plain page text, so they show even if animation fails.
- **3D later:** if a licensed GLB model is supplied, an optional 3D scene can load in its place, with the SVG kept as the poster and fallback. Nothing 3D is added now.

## 4. Components and code structure
- **Components:** SiteHeader, LanguageSwitcher, MobileNav, StickyContactBar, AnatomyHeroExperience, AnatomyScene, AnatomyHotspot, SectionReveal (a light reveal on scroll), ServiceCard, ConditionCard, TeamMemberCard, FAQAccordion, ContactSection, Breadcrumbs, SiteFooter, Disclaimer.
- **Data modules:**
  - `src/config/clinic.ts`: phones, location text, map link, social links and team, each fact flagged `verified: false`
  - `src/content/services.ts` and `src/content/conditions.ts`: one bilingual record per entry, rendered by shared page templates
- **Motion:** CSS plus a small IntersectionObserver hook. No animation library and no Three.js for now.
- **Scope:** no backend, login, database or forms, as the brief asks.

## 5. English–Amharic localization
- **Translation system:**
  - A language provider stores the choice locally, with English as the default.
  - The choice is read after the page loads, which avoids a mismatch flash.
  - The page's `lang` attribute switches between `en` and `am`. Text stays left-to-right.
- **Dictionaries:**
  - All interface text lives in `src/i18n/en.ts` and `src/i18n/am.ts`, with typed keys so nothing can be missed.
  - Long page text sits in the content files as `{ en, am }` pairs.
  - Missing Amharic falls back to English and shows a development warning.
- **Amharic draft:** I will write an Amharic draft and mark it `// AM-DRAFT: needs human review`. A visible "translation in review" note can be switched on.
- **Fonts and layout:** the Ethiopic font is loaded only for Amharic. Line height and button widths get a small adjustment for Amharic and are tested on mobile.
- **Page titles:** English page titles are rendered on the server. Amharic titles update in the browser.

## 6. Verification checklist (shipped as `VERIFICATION.md` and shown in code comments)
- Phones 097 312 5594 / 097 312 5609 are still current
- Kirkos location description is current, and the map pin https://maps.app.goo.gl/uKd5gPvx9pqD9jnK8 is correct (Dembel is not shown)
- Opening hours (none shown until provided)
- Dr. Berhanu Demelash: approval for name, title, bio and photo (none shown until then)
- The confirmed services list
- Clinical review of every condition and resource article
- Professional review of all Amharic text
- Official logo file and favicon
- Final domain, for canonical URLs, the sitemap and structured data
- Structured data published only after the facts above are approved

## 7. Phases
1. **Foundation:** design settings, fonts, language system, clinic config, header, footer, mobile nav and contact bar, placeholder wordmark.
2. **Anatomy hero and home page,** with every section and the move from dark to light.
3. **Services and conditions** pages from their templates, plus About.
4. **Resources, Contact,** per-page titles and descriptions, sitemap, robots.txt, verification document.
5. **Polish:** accessibility pass, Amharic layout check, performance tuning, Playwright screenshots at 360, 768 and 1440 widths.

## Risks
- The SVG hero quality depends on careful hand-drawn paths. I will keep it stylized but anatomically sensible.
- Amharic quality needs a native reviewer.
- Without the real logo, colors stay provisional.

## Accessibility and testing
- **Accessibility:** WCAG 2.2 AA, meaning visible focus, keyboard-operable hotspots and menus, a skip link, contrast checked on both dark and light backgrounds, and full reduced-motion support.
- **Tests:**
  - Vitest checks that every English key has an Amharic entry, and that unverified facts are never rendered as "verified".
  - Playwright checks there is no sideways scrolling at 360px and that every link resolves.

## Open questions (answers improve the result but don't block Phase 1)
- Can you upload the official logo (SVG or PNG) and any real clinic or team photos? Until then I'll use a neutral text wordmark.
- Do you have reviewed Amharic copy, or should I write a draft marked for review?
