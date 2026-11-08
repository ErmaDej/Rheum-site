import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowRight, Phone } from "lucide-react";
import { primaryPhone, type L } from "@/config/clinic";
import { useI18n } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/utils";
import { AnatomyScene, JOINTS } from "./AnatomyScene";

type Hotspot = { id: string; at: readonly [number, number]; label: L; condition: string };

// Educational labels only. Never diagnostic. AM-DRAFT.
const HOTSPOTS: Hotspot[] = [
  { id: "hands", at: JOINTS.handL, condition: "rheumatoid-arthritis", label: { en: "Hands & wrists — small joints", am: "እጅና አንጓ — ትናንሽ መገጣጠሚያዎች" } },
  { id: "shoulders", at: JOINTS.shoulderR, condition: "fibromyalgia", label: { en: "Shoulders & muscles", am: "ትከሻና ጡንቻዎች" } },
  { id: "spine", at: [200, 300], condition: "lupus", label: { en: "Whole-body immune health", am: "የመላ ሰውነት የበሽታ መከላከል ጤና" } },
  { id: "knees", at: JOINTS.kneeR, condition: "back-shoulder-knee-pain", label: { en: "Knees & back", am: "ጉልበትና ጀርባ" } },
  { id: "feet", at: JOINTS.footL, condition: "gout", label: { en: "Feet & toes", am: "እግርና ጣቶች" } },
];

export function AnatomyHeroExperience() {
  const { t, l } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);
  const figureRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [active, setActive] = useState<string | null>(null);
  const [exiting, setExiting] = useState(false);

  // Subtle pointer parallax (fine pointers only, no reduced motion).
  useEffect(() => {
    const fig = figureRef.current;
    const sec = sectionRef.current;
    if (!fig || !sec) return;
    const ok = window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)").matches;
    if (!ok) return;
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;
        fig.style.transform = `perspective(1200px) rotateY(${x * 8}deg) rotateX(${-y * 4}deg) translate3d(${x * 12}px, ${y * 8}px, 0)`;
      });
    };
    sec.addEventListener("pointermove", onMove);
    return () => { sec.removeEventListener("pointermove", onMove); cancelAnimationFrame(raf); };
  }, []);

  // Pause all motion while hero is off-screen or motion is reduced.
  useEffect(() => {
    const sec = sectionRef.current;
    const svg = svgRef.current;
    if (!sec || !svg) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) { svg.pauseAnimations?.(); sec.classList.add("scene-paused"); return; }
    const io = new IntersectionObserver(([e]) => {
      if (!e) return;
      sec.classList.toggle("scene-paused", !e.isIntersecting);
      if (e.isIntersecting) svg.unpauseAnimations?.(); else svg.pauseAnimations?.();
    });
    io.observe(sec);
    return () => io.disconnect();
  }, []);

  const explore = () => {
    setExiting(true);
    window.setTimeout(() => {
      document.getElementById("main")?.scrollIntoView({ behavior: "smooth" });
      window.setTimeout(() => setExiting(false), 1400);
    }, 250);
  };

  const activeSpot = HOTSPOTS.find((h) => h.id === active);

  return (
    <section ref={sectionRef} aria-labelledby="hero-title" className={cn("relative isolate overflow-hidden bg-hero text-on-dark", exiting && "hero-exiting")}>
      <div className="container-page relative grid min-h-[100svh] items-center gap-8 pb-24 pt-24 lg:grid-cols-[1.05fr_1fr] lg:pt-20">
        <div className="relative z-10 max-w-xl">
          <p className="eyebrow text-cyan">{t("hero.eyebrow")}</p>
          <h1 id="hero-title" className="display-xl mt-5 text-balance">{t("hero.title")}</h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-on-dark-muted">{t("hero.body")}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <button type="button" onClick={explore} className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-cyan px-6 font-semibold text-midnight transition-transform hover:-translate-y-0.5">
              {t("cta.explore")} <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </button>
            <Link to="/contact" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-line-dark px-6 font-semibold text-on-dark transition-colors hover:bg-on-dark/10">
              {t("cta.contact")}
            </Link>
          </div>
          <a href={`tel:${primaryPhone.tel}`} className="mt-6 inline-flex items-center gap-2 text-sm text-on-dark-muted hover:text-on-dark">
            <Phone className="size-4 text-cyan" aria-hidden /> {primaryPhone.display}
          </a>
        </div>

        <div className="relative mx-auto h-[62svh] w-full max-w-[380px] lg:h-[82svh] lg:max-w-[460px]">
          <div ref={figureRef} className="anatomy-figure relative h-full w-full transition-transform duration-300 ease-out will-change-transform">
            <AnatomyScene ref={svgRef} title={t("hero.figureAlt")} />
            <ul aria-label={t("hero.hotspotsLabel")} className="absolute inset-0">
              {HOTSPOTS.map((h) => (
                <li key={h.id} className="absolute" style={{ left: `${(h.at[0] / 400) * 100}%`, top: `${(h.at[1] / 820) * 100}%` }}>
                  <button
                    type="button"
                    aria-expanded={active === h.id}
                    aria-controls="hotspot-panel"
                    aria-label={l(h.label)}
                    onClick={() => setActive((a) => (a === h.id ? null : h.id))}
                    onMouseEnter={() => setActive(h.id)}
                    className={cn("-translate-x-1/2 -translate-y-1/2 flex size-11 items-center justify-center rounded-full", active === h.id && "ring-2 ring-cyan/70")}
                  >
                    <span className="size-3 rounded-full border border-on-dark bg-on-dark/20" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div id="hotspot-panel" aria-live="polite" className="absolute inset-x-0 bottom-0 z-10 flex justify-center">
            {activeSpot && (
              <div className="glass-dark flex items-center gap-4 rounded-xl border border-line-dark px-4 py-3 text-sm shadow-lift">
                <span className="font-medium">{l(activeSpot.label)}</span>
                <Link to="/conditions/$slug" params={{ slug: activeSpot.condition }} className="inline-flex items-center gap-1 font-semibold text-cyan hover:underline">
                  {t("cta.learnMore")} <ArrowRight className="size-3.5" aria-hidden />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-6 z-10 flex flex-col items-center gap-2">
        <a href="#main" className="flex flex-col items-center gap-2 text-xs uppercase tracking-[0.2em] text-on-dark-muted hover:text-on-dark">
          <span>{t("hero.skip")}</span>
          <ArrowDown className="anim-scroll-cue size-4" aria-hidden />
        </a>
      </div>
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-midnight/60" />
    </section>
  );
}
