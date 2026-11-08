import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Phone, Sparkles } from "lucide-react";
import { Suspense, lazy } from "react";

import { media } from "@/assets/media";
import { primaryPhone } from "@/config/clinic";
import { useI18n } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/utils";
import { RouteGrid } from "./RouteGrid";

// three + drei are ~490 kB gzipped. The model is decoration on top of a real
// image, so the bundle loads after first paint and the image covers the gap.
const EcorcheStage = lazy(() =>
  import("@/components/three/EcorcheStage").then((module) => ({ default: module.EcorcheStage })),
);

/**
 * Deterministic star field. Values are derived from the index rather than
 * Math.random so the server and client render identical markup (no hydration
 * mismatch) and the layout is stable between reloads.
 */
const STARS = Array.from({ length: 46 }, (_, i) => {
  const left = (i * 37 + 11) % 100;
  const top = (i * 61 + 7) % 100;
  const size = 1 + (i % 3) * 0.7;
  const delay = (i % 9) * 0.45;
  return { left, top, size, delay };
});

export function HeroLaunch() {
  const { t } = useI18n();

  return (
    <section
      aria-labelledby="hero-title"
      className="nebula relative isolate overflow-hidden bg-midnight text-on-dark"
    >
      {/* depth layers */}
      <div aria-hidden className="grid-lines pointer-events-none absolute inset-0 opacity-60" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_-10%,oklch(0.55_0.16_250/35%),transparent_60%)]"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {STARS.map((star, i) => (
          <span
            key={i}
            className="anim-twinkle absolute rounded-full bg-on-dark"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="container-page relative grid items-center gap-12 pb-16 pt-28 sm:pt-32 lg:min-h-[100svh] lg:grid-cols-[1.02fr_0.98fr] lg:gap-6 lg:pb-24 lg:pt-28">
        {/* copy */}
        <div className="relative z-10 max-w-2xl">
          <p className="anim-rise anim-rise-1 eyebrow inline-flex items-center gap-2 rounded-full border border-line-dark bg-white/5 px-4 py-2 text-cyan">
            <Sparkles className="size-3.5" aria-hidden />
            {t("hero.eyebrow")}
          </p>

          <h1
            id="hero-title"
            className="anim-rise anim-rise-2 display-xl mt-6 text-balance text-glow"
          >
            {t("hero.title")}
          </h1>

          <p className="anim-rise anim-rise-3 mt-6 max-w-xl text-base leading-relaxed text-on-dark-muted sm:text-lg">
            {t("hero.body")}
          </p>

          <div className="anim-rise anim-rise-4 mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#launchpad"
              className="anim-glow-pulse group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-cyan px-6 font-semibold text-midnight transition-transform duration-300 hover:-translate-y-0.5"
            >
              {t("hero.enter")}
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden
              />
            </a>
            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-line-dark bg-white/5 px-6 font-semibold text-on-dark backdrop-blur transition-colors duration-300 hover:border-cyan/50 hover:bg-white/10"
            >
              {t("cta.contact")}
            </Link>
            <a
              href={`tel:${primaryPhone.tel}`}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-4 text-sm font-medium text-on-dark-muted transition-colors hover:text-on-dark sm:px-2"
            >
              <Phone className="size-4 text-cyan" aria-hidden />
              {primaryPhone.display}
            </a>
          </div>
        </div>

        {/* the model */}
        <div className="relative mx-auto w-full max-w-[26rem] sm:max-w-[30rem] lg:max-w-none">
          <div className="relative mx-auto aspect-square w-full max-w-[26rem] sm:max-w-[30rem] lg:max-w-[34rem]">
            <div
              aria-hidden
              className="anim-orbit-slow pointer-events-none absolute inset-[4%] rounded-full border border-cyan/20"
            />
            <div
              aria-hidden
              className="anim-orbit-rev pointer-events-none absolute inset-[12%] rounded-full border border-cyan/10"
            />
            <Suspense
              fallback={
                <img
                  src={media.hologramFigure}
                  alt={t("hero.figureAlt")}
                  className="h-full w-full object-contain [mask-image:radial-gradient(closest-side,black_60%,transparent_94%)] [-webkit-mask-image:radial-gradient(closest-side,black_60%,transparent_94%)]"
                />
              }
            >
              <EcorcheStage alt={t("hero.figureAlt")} />
            </Suspense>
          </div>
          <p className="mt-1 text-center text-[0.7rem] uppercase tracking-[0.24em] text-on-dark-muted/70">
            {t("hero.modelLabel")}
          </p>
        </div>
      </div>

      {/* launch pad */}
      <div
        id="launchpad"
        className="relative scroll-mt-24 border-t border-line-dark bg-midnight/60 backdrop-blur"
      >
        <div className="container-page py-14 sm:py-16">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
            <h2 className="display-md text-on-dark">{t("hero.launchpad")}</h2>
            <a
              href="#main"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-on-dark-muted transition-colors hover:text-cyan"
            >
              {t("hero.skip")}
              <ArrowDown className="anim-scroll-cue size-4" aria-hidden />
            </a>
          </div>
          <RouteGrid />
        </div>
      </div>

      {/* marquee seam into the rest of the page */}
      <div className="relative overflow-hidden border-y border-line-dark bg-white/5 py-3">
        <div className="anim-marquee flex w-max gap-8 whitespace-nowrap text-[0.7rem] uppercase tracking-[0.3em] text-on-dark-muted">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className={cn("flex items-center gap-8")}>
              {t("home.marquee")}
              <span aria-hidden className="size-1 rounded-full bg-cyan/70" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
