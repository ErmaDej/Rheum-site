import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Bone, ClipboardList, ShieldCheck, Sparkles, Stethoscope } from "lucide-react";

import { media } from "@/assets/media";
import { HeroLaunch } from "@/components/experience/HeroLaunch";
import { ScrollReveal } from "@/components/experience/ScrollReveal";
import { Gallery } from "@/components/site/Gallery";
import { useI18n } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rheum | Rheumatology & Internal Medicine Clinic, Addis Ababa" },
      {
        name: "description",
        content:
          "Specialist-led rheumatology and internal medicine care in Addis Ababa. Explore services, conditions and how a visit works.",
      },
    ],
  }),
  component: HomePage,
});

const APPROACH = [
  { title: "home.approach1t", body: "home.approach1b", icon: ShieldCheck },
  { title: "home.approach2t", body: "home.approach2b", icon: Bone },
  { title: "home.approach3t", body: "home.approach3b", icon: Sparkles },
] as const;

const VISIT_STEPS = ["home.visit1", "home.visit2", "home.visit3", "home.visit4"] as const;

function HomePage() {
  const { t } = useI18n();

  return (
    <>
      <HeroLaunch />

      {/* Intro / about */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 top-0 size-[30rem] rounded-full bg-[radial-gradient(circle,oklch(0.72_0.15_210/10%),transparent_65%)] blur-3xl"
        />
        <div className="container-page grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <ScrollReveal>
            <p className="eyebrow text-primary">{t("home.introEyebrow")}</p>
            <h2 className="display-lg mt-4 max-w-xl text-balance text-foreground">
              {t("home.introTitle")}
            </h2>
            <p className="mt-6 max-w-prose text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t("home.introBody")}
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <Link
                to="/services"
                className="card-lift group rounded-2xl border border-border bg-card p-5"
              >
                <Stethoscope className="size-5 text-primary" aria-hidden />
                <p className="mt-4 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  {t("home.servicesEyebrow")}
                </p>
                <p className="mt-1 flex items-center gap-2 text-lg font-semibold text-foreground">
                  {t("home.servicesTitle")}
                  <ArrowRight
                    className="size-4 text-primary transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden
                  />
                </p>
              </Link>
              <Link
                to="/conditions"
                className="card-lift group rounded-2xl border border-border bg-card p-5"
              >
                <Bone className="size-5 text-primary" aria-hidden />
                <p className="mt-4 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  {t("home.conditionsEyebrow")}
                </p>
                <p className="mt-1 flex items-center gap-2 text-lg font-semibold text-foreground">
                  {t("home.conditionsTitle")}
                  <ArrowRight
                    className="size-4 text-primary transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden
                  />
                </p>
              </Link>
            </div>
            <p className="mt-4 max-w-prose text-sm text-muted-foreground">
              {t("home.conditionsBody")}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={140} className="relative mx-auto w-full max-w-md">
            <div
              aria-hidden
              className="absolute inset-6 rounded-[2.5rem] bg-[radial-gradient(circle,oklch(0.72_0.15_210/28%),transparent_65%)] blur-3xl"
            />
            <div className="anim-holo-float relative aspect-square w-full">
              <div
                aria-hidden
                className="anim-orbit-slow absolute inset-[8%] rounded-full border border-primary/20"
              />
              <img
                src={media.xrayFigure}
                alt={t("hero.figureAlt")}
                loading="lazy"
                decoding="async"
                className="relative h-full w-full object-contain opacity-95 [mask-image:radial-gradient(closest-side,black_60%,transparent_95%)] [-webkit-mask-image:radial-gradient(closest-side,black_60%,transparent_95%)]"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Approach */}
      <section className="relative overflow-hidden border-y border-border bg-card/40 py-20 sm:py-24">
        <div className="container-page">
          <ScrollReveal className="max-w-2xl">
            <p className="eyebrow text-primary">{t("home.approachEyebrow")}</p>
            <h2 className="display-lg mt-4 text-foreground">{t("home.approachTitle")}</h2>
          </ScrollReveal>

          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {APPROACH.map((item, index) => {
              const Icon = item.icon;
              return (
                <ScrollReveal as="li" key={item.title} delay={index * 110}>
                  <div className="group h-full rounded-2xl border border-border bg-background p-6 transition-[border-color,transform] duration-500 hover:-translate-y-1.5 hover:border-primary/50">
                    <span className="inline-flex size-11 items-center justify-center rounded-xl border border-border bg-primary/10 text-primary transition-transform duration-500 group-hover:scale-110">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold text-foreground">{t(item.title)}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {t(item.body)}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 sm:py-28">
        <div className="container-page">
          <ScrollReveal className="mb-10 max-w-2xl">
            <p className="eyebrow text-primary">{t("home.galleryEyebrow")}</p>
            <h2 className="display-lg mt-4 text-balance text-foreground">
              {t("home.galleryTitle")}
            </h2>
            <p className="mt-4 max-w-prose text-muted-foreground">{t("home.galleryBody")}</p>
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <Gallery />
          </ScrollReveal>
        </div>
      </section>

      {/* Visit */}
      <section className="border-y border-border bg-card/40 py-20 sm:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <ScrollReveal>
            <p className="eyebrow text-primary">{t("home.visitEyebrow")}</p>
            <h2 className="display-lg mt-4 text-foreground">{t("home.visitTitle")}</h2>
            <Link
              to="/resources"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary/50 px-5 py-3 text-sm font-semibold text-primary transition-colors duration-300 hover:bg-primary/10"
            >
              <ClipboardList className="size-4" aria-hidden />
              {t("resources.prepTitle")}
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </ScrollReveal>

          <ol className="space-y-4">
            {VISIT_STEPS.map((key, index) => (
              <ScrollReveal as="li" key={key} delay={index * 90}>
                <div className="flex items-start gap-4 rounded-2xl border border-border bg-background p-5">
                  <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-primary/40 text-sm font-semibold tabular-nums text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="pt-1.5 text-sm leading-relaxed text-muted-foreground">{t(key)}</p>
                </div>
              </ScrollReveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Resources CTA */}
      <section className="relative overflow-hidden py-20 sm:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_70%_at_50%_120%,oklch(0.72_0.15_210/16%),transparent_65%)]"
        />
        <div className="container-page relative">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow text-primary">{t("home.resourcesTitle")}</p>
            <h2 className="display-md mt-4 text-balance text-foreground">{t("home.faqTitle")}</h2>
            <p className="mt-4 text-muted-foreground">{t("home.resourcesBody")}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/resources"
                className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-6 font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
              >
                {t("cta.explore")}
                <ArrowRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center gap-2 rounded-full border border-border px-6 font-semibold text-foreground transition-colors duration-300 hover:border-primary/50 hover:text-primary"
              >
                {t("cta.contact")}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
