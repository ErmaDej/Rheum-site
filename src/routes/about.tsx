import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, HeartHandshake, MapPin, Users } from "lucide-react";

import { media } from "@/assets/media";
import { ScrollReveal } from "@/components/experience/ScrollReveal";
import { Gallery } from "@/components/site/Gallery";
import { AboutPoster } from "@/components/site/AboutPoster";
import { PageHero } from "@/components/site/PageHero";
import { MedicalRoomStage } from "@/components/three/MedicalRoomStage";
import { clinic } from "@/config/clinic";
import { useI18n } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About the clinic | Rheum Rheumatology, Addis Ababa" },
      {
        name: "description",
        content:
          "Rheum is a pioneering rheumatology clinic in Ethiopia, providing general internal medicine and subspeciality care with an approach it calls Royalty Care.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t, l } = useI18n();

  return (
    <>
      <PageHero
        eyebrow={t("nav.about")}
        title={t("about.title")}
        lead={t("about.lead")}
        image={media.clinicEntrance}
        imageAlt={t("contact.photoAlt")}
      />

      <section className="py-20 sm:py-24">
        <div className="container-page grid gap-6 lg:grid-cols-2">
          <ScrollReveal>
            <article className="h-full rounded-3xl border border-border bg-card p-8">
              <span className="inline-flex size-11 items-center justify-center rounded-xl border border-border bg-primary/10 text-primary">
                <HeartHandshake className="size-5" aria-hidden />
              </span>
              <h2 className="display-md mt-5 text-foreground">{t("about.missionTitle")}</h2>
              <blockquote className="mt-4 border-l-2 border-primary/50 pl-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {t("about.mission")}
              </blockquote>
              <p className="mt-4 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                {t("about.missionSource")}
              </p>
            </article>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <article className="h-full rounded-3xl border border-border bg-card p-8">
              <span className="inline-flex size-11 items-center justify-center rounded-xl border border-border bg-primary/10 text-primary">
                <Users className="size-5" aria-hidden />
              </span>
              <h2 className="display-md mt-5 text-foreground">{t("about.teamTitle")}</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {t("about.teamPending")}
              </p>
              <AboutPoster
                src={media.teamPoster}
                alt={t("about.doctors")}
                className="max-h-[22rem] lg:max-h-[28rem]"
              >
                {/* Faces live at the top of this square photo; object-top keeps them in frame. */}
                <img
                  src={media.teamPoster}
                  alt={t("about.doctors")}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-top"
                />
              </AboutPoster>
            </article>
          </ScrollReveal>
        </div>
      </section>

      {/* 3D walkthrough */}
      <section className="border-t border-border py-20 sm:py-24">
        <div className="container-page grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <ScrollReveal>
            <p className="eyebrow text-primary">{t("about.spacesTitle")}</p>
            <h2 className="display-lg mt-4 text-balance text-foreground">{t("about.roomTitle")}</h2>
            <p className="mt-4 max-w-prose text-muted-foreground">{t("about.roomBody")}</p>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <div className="relative aspect-[16/11] w-full overflow-hidden rounded-3xl border border-border bg-midnight shadow-lift">
              <div aria-hidden className="grid-lines absolute inset-0 opacity-30" />
              <MedicalRoomStage alt={t("about.reception")} />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-midnight/80 to-transparent"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Inside the clinic */}
      <section className="border-y border-border bg-card/40 py-20 sm:py-24">
        <div className="container-page">
          <ScrollReveal className="mb-10 max-w-2xl">
            <p className="eyebrow text-primary">{t("about.spacesTitle")}</p>
            <h2 className="display-lg mt-4 text-balance text-foreground">
              {t("about.galleryTitle")}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <Gallery />
          </ScrollReveal>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 sm:py-24">
        <div className="container-page grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
          <ScrollReveal>
            <p className="eyebrow text-primary">{t("contact.address")}</p>
            <h2 className="display-md mt-4 text-foreground">{t("contact.mapTitle")}</h2>
            <p className="mt-4 flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
              {l(clinic.location)}
            </p>
            <p className="mt-4 max-w-prose text-sm text-muted-foreground">{t("contact.mapNote")}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={clinic.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-6 font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
              >
                <MapPin className="size-4" aria-hidden />
                {t("contact.openMap")}
              </a>
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center gap-2 rounded-full border border-border px-6 font-semibold text-foreground transition-colors duration-300 hover:border-primary/50 hover:text-primary"
              >
                {t("cta.contact")}
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <div className="overflow-hidden rounded-3xl border border-border shadow-lift">
              <img
                src={media.clinicSign}
                alt={t("about.sign")}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
