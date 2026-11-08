import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";

import { media } from "@/assets/media";
import { ScrollReveal } from "@/components/experience/ScrollReveal";
import { PageHero } from "@/components/site/PageHero";
import { primaryPhone } from "@/config/clinic";
import { faqs } from "@/content/faq";
import { useI18n } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Patient resources | Rheum Rheumatology Clinic" },
      {
        name: "description",
        content:
          "How to prepare for a visit to Rheum and answers to common questions about appointments, rheumatology and what to bring.",
      },
    ],
  }),
  component: ResourcesPage,
});

const PREP_KEYS = ["home.visit1", "home.visit2", "home.visit3", "home.visit4"] as const;

function ResourcesPage() {
  const { t, l } = useI18n();

  return (
    <>
      <PageHero
        eyebrow={t("nav.resources")}
        title={t("resources.title")}
        lead={t("resources.lead")}
        image={media.waitingArea}
        imageAlt={t("about.waiting")}
      />

      <section className="py-20 sm:py-24">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            {/* Preparation */}
            <ScrollReveal>
              <div className="rounded-3xl border border-border bg-card p-7">
                <p className="eyebrow text-primary">{t("nav.resources")}</p>
                <h2 className="display-md mt-3 text-foreground">{t("resources.prepTitle")}</h2>
                <ul className="mt-6 space-y-3">
                  {PREP_KEYS.map((key, index) => (
                    <li
                      key={key}
                      className="flex items-start gap-3 rounded-2xl border border-border bg-background p-4"
                      style={{ animationDelay: `${index * 70}ms` }}
                    >
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                      <span className="text-sm leading-relaxed text-muted-foreground">
                        {t(key)}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 rounded-2xl border border-primary/30 bg-primary/10 p-5">
                  <p className="text-sm leading-relaxed text-foreground">{t("footer.emergency")}</p>
                </div>

                <a
                  href={`tel:${primaryPhone.tel}`}
                  className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-6 font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <Phone className="size-4" aria-hidden />
                  {primaryPhone.display}
                </a>
              </div>
            </ScrollReveal>

            {/* FAQ */}
            <ScrollReveal delay={120}>
              <div>
                <p className="eyebrow text-primary">{t("home.faqTitle")}</p>
                <h2 className="display-md mt-3 text-foreground">{t("home.faqTitle")}</h2>

                <div className="mt-6 space-y-3">
                  {faqs.map((faq, index) => (
                    <details
                      key={index}
                      className="group rounded-2xl border border-border bg-card px-5 py-4 transition-colors duration-300 hover:border-primary/40 open:border-primary/50"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-medium text-foreground marker:hidden">
                        <span>{l(faq.q)}</span>
                        <span
                          aria-hidden
                          className="inline-flex size-7 shrink-0 items-center justify-center rounded-full border border-border text-primary transition-transform duration-300 group-open:rotate-45"
                        >
                          +
                        </span>
                      </summary>
                      <p className="mt-3 border-t border-border pt-3 text-sm leading-relaxed text-muted-foreground">
                        {l(faq.a)}
                      </p>
                    </details>
                  ))}
                </div>

                <p className="mt-6 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  {t("resources.reviewNote")}
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal className="mt-14 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-border bg-card p-7">
            <div>
              <p className="text-lg font-semibold text-foreground">{t("cta.callClinic")}</p>
              <p className="mt-1 text-sm text-muted-foreground">{t("contact.hoursPending")}</p>
            </div>
            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-6 font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
            >
              {t("cta.contact")}
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
