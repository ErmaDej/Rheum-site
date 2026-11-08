import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { media } from "@/assets/media";
import { ScrollReveal } from "@/components/experience/ScrollReveal";
import { BodyMap } from "@/components/site/BodyMap";
import { PageHero } from "@/components/site/PageHero";
import { conditions } from "@/content/conditions";
import { useI18n } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/conditions")({
  head: () => ({
    meta: [
      { title: "Conditions | Rheum Rheumatology Clinic, Addis Ababa" },
      {
        name: "description",
        content:
          "Plain-language overviews of rheumatoid arthritis, gout, lupus, fibromyalgia and back, shoulder and knee pain — with what clinicians look for.",
      },
    ],
  }),
  component: ConditionsPage,
});

function ConditionsPage() {
  const { t, l } = useI18n();

  return (
    <>
      <PageHero
        eyebrow={t("nav.conditions")}
        title={t("conditions.title")}
        lead={t("conditions.lead")}
        image={media.xrayFigure}
        imageAlt={t("hero.figureAlt")}
      />

      <section className="py-20 sm:py-24">
        <div className="container-page">
          <ScrollReveal>
            <BodyMap />
          </ScrollReveal>
        </div>
      </section>

      <section
        id="conditions-list"
        className="scroll-mt-24 border-t border-border bg-card/40 py-20 sm:py-24"
      >
        <div className="container-page">
          <ScrollReveal className="mb-10 max-w-2xl">
            <p className="eyebrow text-primary">{t("nav.conditions")}</p>
            <h2 className="display-md mt-4 text-foreground">{t("conditions.title")}</h2>
          </ScrollReveal>

          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {conditions.map((condition, index) => (
              <ScrollReveal as="li" key={condition.slug} delay={index * 80}>
                <article className="group flex h-full flex-col rounded-2xl border border-border bg-background p-6 transition-[transform,border-color] duration-500 hover:-translate-y-1.5 hover:border-primary/50">
                  <span className="text-xs font-semibold tabular-nums text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold leading-snug text-foreground">
                    {l(condition.title)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {l(condition.summary)}
                  </p>

                  <details className="mt-4">
                    <summary className="cursor-pointer list-none text-sm font-semibold text-primary marker:hidden">
                      <span className="inline-flex items-center gap-1.5">
                        {t("cta.learnMore")}
                        <ArrowRight className="size-3.5" aria-hidden />
                      </span>
                    </summary>
                    <dl className="mt-3 space-y-3 border-t border-border pt-3 text-sm">
                      <div>
                        <dt className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                          {t("condition.what")}
                        </dt>
                        <dd className="mt-1 text-foreground">{l(condition.what)}</dd>
                      </div>
                      <div>
                        <dt className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                          {t("condition.symptoms")}
                        </dt>
                        <dd className="mt-1">
                          <ul className="space-y-1">
                            {condition.symptoms.map((symptom, i) => (
                              <li key={i} className="flex items-start gap-2 text-muted-foreground">
                                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                                <span>{l(symptom)}</span>
                              </li>
                            ))}
                          </ul>
                        </dd>
                      </div>
                      <div>
                        <dt className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                          {t("condition.evaluation")}
                        </dt>
                        <dd className="mt-1 text-foreground">{l(condition.evaluation)}</dd>
                      </div>
                      <div>
                        <dt className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                          {t("condition.when")}
                        </dt>
                        <dd className="mt-1 text-foreground">{l(condition.when)}</dd>
                      </div>
                    </dl>
                  </details>
                </article>
              </ScrollReveal>
            ))}
          </ul>

          <ScrollReveal className="mt-14 rounded-3xl border border-border bg-background p-8 text-center sm:p-10">
            <p className="eyebrow text-primary">{t("bodyMap.eyebrow")}</p>
            <h2 className="display-md mt-3 text-foreground">{t("cta.contact")}</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
              {t("contact.hoursPending")}
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
