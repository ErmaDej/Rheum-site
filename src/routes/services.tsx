import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Activity,
  ArrowRight,
  Bone,
  CalendarCheck,
  ClipboardList,
  Siren,
  Stethoscope,
} from "lucide-react";

import { media } from "@/assets/media";
import { ScrollReveal } from "@/components/experience/ScrollReveal";
import { PageHero } from "@/components/site/PageHero";
import { services } from "@/content/services";
import { useI18n } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Rheum Rheumatology Clinic, Addis Ababa" },
      {
        name: "description",
        content:
          "Rheumatology and subspeciality care, general internal medicine, chronic illness, acute care, emergency care and full medical checkups.",
      },
    ],
  }),
  component: ServicesPage,
});

const ICONS = {
  pulse: Activity,
  alert: Siren,
  calendar: CalendarCheck,
  stethoscope: Stethoscope,
  joint: Bone,
  clipboard: ClipboardList,
} as const;

function ServicesPage() {
  const { t, l } = useI18n();

  return (
    <>
      <PageHero
        eyebrow={t("nav.services")}
        title={t("services.title")}
        lead={t("services.lead")}
        image={media.teamPoster}
        imageAlt={t("about.doctors")}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-cyan px-6 font-semibold text-midnight transition-transform duration-300 hover:-translate-y-0.5"
          >
            {t("cta.contact")}
            <ArrowRight
              className="size-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden
            />
          </Link>
          <Link
            to="/conditions"
            className="inline-flex min-h-12 items-center gap-2 rounded-full border border-line-dark bg-white/5 px-6 font-semibold text-on-dark transition-colors duration-300 hover:border-cyan/50 hover:bg-white/10"
          >
            {t("cta.allConditions")}
          </Link>
        </div>
      </PageHero>

      <section className="py-20 sm:py-24">
        <div className="container-page">
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = ICONS[service.icon];
              return (
                <ScrollReveal as="li" key={service.slug} delay={index * 80}>
                  <article
                    className={cn(
                      "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6",
                      "transition-[transform,border-color] duration-500 hover:-translate-y-1.5 hover:border-primary/50",
                    )}
                  >
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -right-12 -top-12 size-28 rounded-full bg-primary/10 blur-2xl transition-transform duration-700 group-hover:scale-150"
                    />
                    <div className="relative flex items-center justify-between">
                      <span className="inline-flex size-12 items-center justify-center rounded-xl border border-border bg-primary/10 text-primary transition-transform duration-500 group-hover:-rotate-6">
                        <Icon className="size-5" aria-hidden />
                      </span>
                      <span className="text-xs font-semibold tabular-nums text-muted-foreground">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h2 className="relative mt-5 text-lg font-semibold leading-snug text-foreground">
                      {l(service.title)}
                    </h2>
                    <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                      {l(service.summary)}
                    </p>

                    {service.body.length > 0 && (
                      <details className="relative mt-4 group/details">
                        <summary className="cursor-pointer list-none text-sm font-semibold text-primary marker:hidden">
                          <span className="inline-flex items-center gap-1.5">
                            {t("cta.learnMore")}
                            <ArrowRight className="size-3.5" aria-hidden />
                          </span>
                        </summary>
                        <div className="mt-3 space-y-2 border-t border-border pt-3">
                          {service.body.map((paragraph, i) => (
                            <p key={i} className="text-sm leading-relaxed text-muted-foreground">
                              {l(paragraph)}
                            </p>
                          ))}
                        </div>
                      </details>
                    )}
                  </article>
                </ScrollReveal>
              );
            })}
          </ul>

          <ScrollReveal className="mt-14 rounded-3xl border border-border bg-card p-8 text-center sm:p-10">
            <p className="eyebrow text-primary">{t("footer.disclaimerTitle")}</p>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {t("footer.disclaimer")}
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-6 font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
            >
              {t("cta.callClinic")}
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
