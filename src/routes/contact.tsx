import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Navigation, Phone } from "lucide-react";

import { media } from "@/assets/media";
import { ScrollReveal } from "@/components/experience/ScrollReveal";
import { PageHero } from "@/components/site/PageHero";
import { clinic, primaryPhone } from "@/config/clinic";
import { useI18n } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Rheum Rheumatology Clinic, Addis Ababa" },
      {
        name: "description",
        content:
          "Phone numbers, email, social channels and directions to Rheum Rheumatology and Internal Medicine Speciality Clinic in Addis Ababa.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t, l } = useI18n();

  return (
    <>
      <PageHero
        eyebrow={t("contact.eyebrow")}
        title={t("contact.title")}
        lead={t("contact.hoursPending")}
        image={media.clinicSign}
        imageAlt={t("about.sign")}
      >
        <div className="flex flex-wrap gap-3">
          <a
            href={`tel:${primaryPhone.tel}`}
            className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-cyan px-6 font-semibold text-midnight transition-transform duration-300 hover:-translate-y-0.5"
          >
            <Phone className="size-4" aria-hidden />
            {primaryPhone.display}
          </a>
          <a
            href={clinic.mapUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center gap-2 rounded-full border border-line-dark bg-white/5 px-6 font-semibold text-on-dark transition-colors duration-300 hover:border-cyan/50 hover:bg-white/10"
          >
            <Navigation className="size-4 text-cyan" aria-hidden />
            {t("cta.directions")}
          </a>
        </div>
      </PageHero>

      <section className="py-20 sm:py-24">
        <div className="container-page grid gap-6 lg:grid-cols-[1fr_1fr]">
          {/* Phone */}
          <ScrollReveal>
            <div className="h-full rounded-3xl border border-border bg-card p-7">
              <span className="inline-flex size-11 items-center justify-center rounded-xl border border-border bg-primary/10 text-primary">
                <Phone className="size-5" aria-hidden />
              </span>
              <h2 className="mt-5 text-lg font-semibold text-foreground">{t("contact.phones")}</h2>
              <ul className="mt-4 space-y-2">
                {clinic.phones.map((phone, index) => (
                  <li key={phone.tel}>
                    <a
                      href={`tel:${phone.tel}`}
                      className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-background px-4 py-3 transition-colors duration-300 hover:border-primary/50"
                    >
                      <span className="text-base font-semibold tabular-nums text-foreground group-hover:text-primary">
                        {phone.display}
                      </span>
                      <span className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                        {index === 0 ? t("cta.callClinic") : t("cta.call")}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              <h2 className="mt-7 text-lg font-semibold text-foreground">{t("contact.email")}</h2>
              <a
                href={`mailto:${clinic.email}`}
                className="mt-3 inline-flex items-center gap-2 text-sm text-primary hover:underline"
              >
                <Mail className="size-4" aria-hidden />
                {clinic.email}
              </a>

              <h2 className="mt-7 text-lg font-semibold text-foreground">{t("contact.social")}</h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {clinic.social.map((social) => (
                  <li key={social.id}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors duration-300 hover:border-primary/50 hover:text-primary"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Location + map */}
          <ScrollReveal delay={120}>
            <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card">
              <div className="relative isolate overflow-hidden bg-midnight p-7 text-on-dark">
                <div aria-hidden className="grid-lines absolute inset-0 opacity-40" />
                <div
                  aria-hidden
                  className="anim-aurora absolute -right-10 -top-10 size-48 rounded-full bg-[radial-gradient(circle,oklch(0.72_0.15_210/35%),transparent_65%)] blur-2xl"
                />
                <div className="relative">
                  <p className="eyebrow text-cyan">{t("contact.address")}</p>
                  <h2 className="mt-3 text-xl font-semibold">{t("contact.mapTitle")}</h2>
                  <p className="mt-3 flex items-start gap-2 text-sm leading-relaxed text-on-dark-muted">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-cyan" aria-hidden />
                    {l(clinic.location)}
                  </p>

                  {/* stylised locator */}
                  <div className="mt-6 overflow-hidden rounded-2xl border border-line-dark bg-deep/40">
                    <svg
                      viewBox="0 0 320 150"
                      className="h-36 w-full"
                      role="img"
                      aria-label={t("contact.mapTitle")}
                    >
                      <defs>
                        <linearGradient id="roads" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="var(--cyan)" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="var(--teal)" stopOpacity="0.15" />
                        </linearGradient>
                      </defs>
                      <g stroke="url(#roads)" strokeWidth="1" fill="none" opacity="0.8">
                        {Array.from({ length: 7 }).map((_, i) => (
                          <line key={`h${i}`} x1="0" y1={18 + i * 20} x2="320" y2={18 + i * 20} />
                        ))}
                        {Array.from({ length: 11 }).map((_, i) => (
                          <line key={`v${i}`} x1={16 + i * 30} y1="0" x2={16 + i * 30} y2="150" />
                        ))}
                      </g>
                      <path
                        d="M0 92 L120 92 L150 64 L320 64"
                        stroke="var(--cyan)"
                        strokeWidth="2"
                        fill="none"
                        opacity="0.5"
                      />
                      <circle
                        cx="152"
                        cy="70"
                        r="26"
                        fill="var(--cyan)"
                        opacity="0.12"
                        className="anim-glow-pulse"
                      />
                      <circle cx="152" cy="70" r="7" fill="var(--cyan)" />
                      <circle
                        cx="152"
                        cy="70"
                        r="14"
                        fill="none"
                        stroke="var(--cyan)"
                        strokeOpacity="0.6"
                      />
                    </svg>
                  </div>

                  <p className="mt-3 text-xs leading-relaxed text-on-dark-muted/80">
                    {t("contact.mapNote")}
                  </p>

                  <a
                    href={clinic.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-cyan px-5 text-sm font-semibold text-midnight transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    <Navigation className="size-4" aria-hidden />
                    {t("contact.openMap")}
                  </a>
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-between gap-4 p-7">
                <div>
                  <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground">
                    <Clock className="size-4 text-primary" aria-hidden />
                    {t("contact.hours")}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {t("contact.hoursPending")}
                  </p>
                </div>
                <img
                  src={media.clinicEntrance}
                  alt={t("contact.photoAlt")}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[16/9] w-full rounded-2xl border border-border object-cover"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
