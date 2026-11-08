import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import entrance from "@/assets/clinic_entrance.jpg.asset.json";
import { clinic } from "@/config/clinic";
import { useI18n } from "@/i18n/LanguageProvider";
import { Eyebrow, SectionReveal } from "./primitives";

export function ContactSection({ headingLevel = 2 }: { headingLevel?: 1 | 2 }) {
  const { t, l } = useI18n();
  const H = headingLevel === 1 ? "h1" : "h2";
  const telegram = clinic.social.find((s) => s.id === "telegram")!;
  return (
    <section aria-labelledby="contact-title" className="bg-card py-20 lg:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
        <SectionReveal>
          <Eyebrow>{t("contact.eyebrow")}</Eyebrow>
          <H id="contact-title" className="display-lg mt-4 text-foreground">{t("contact.title")}</H>
          <dl className="mt-10 space-y-7">
            <div className="flex gap-4">
              <dt><Phone className="size-5 text-primary" aria-label={t("contact.phones")} /></dt>
              <dd className="flex flex-col gap-1">
                {clinic.phones.map((p) => (
                  <a key={p.tel} href={`tel:${p.tel}`} className="text-2xl font-semibold tabular-nums text-foreground hover:text-primary">{p.display}</a>
                ))}
              </dd>
            </div>
            <div className="flex gap-4">
              <dt><MapPin className="size-5 text-primary" aria-label={t("contact.address")} /></dt>
              <dd>
                <p className="text-foreground">{l(clinic.location)}</p>
                <a href={clinic.mapUrl} target="_blank" rel="noreferrer" className="mt-2 inline-block font-semibold text-primary underline-offset-4 hover:underline">{t("contact.openMap")}</a>
                <p className="mt-1 text-xs text-muted-foreground">{t("contact.mapNote")}</p>
              </dd>
            </div>
            <div className="flex gap-4">
              <dt><Clock className="size-5 text-primary" aria-label={t("contact.hours")} /></dt>
              <dd className="text-muted-foreground">{clinic.openingHours ? l(clinic.openingHours) : t("contact.hoursPending")}</dd>
            </div>
            <div className="flex gap-4">
              <dt><Mail className="size-5 text-primary" aria-label={t("contact.email")} /></dt>
              <dd><a href={`mailto:${clinic.email}`} className="text-foreground hover:text-primary">{clinic.email}</a></dd>
            </div>
          </dl>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href={`tel:${clinic.phones[0].tel}`} className="inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-6 font-semibold text-primary-foreground"><Phone className="size-4" aria-hidden />{t("cta.callClinic")}</a>
            <a href={telegram.url} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-primary/30 px-6 font-semibold text-primary"><Send className="size-4" aria-hidden />{t("cta.telegram")}</a>
          </div>
        </SectionReveal>
        <SectionReveal delay={120}>
          <img src={entrance.url} alt={t("contact.photoAlt")} loading="lazy" width={1489} height={1060} className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lift" />
        </SectionReveal>
      </div>
    </section>
  );
}
