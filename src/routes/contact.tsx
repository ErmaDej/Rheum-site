import { createFileRoute } from "@tanstack/react-router";
import { ContainerPage, type ContainerPageProps } from "@/lib/utils";
import { clinic, primaryPhone } from "@/config/clinic";
import { useI18n } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  const { t, l } = useI18n();

  return (
    <section id="contact" className="pt-24 pb-24">
      <ContainerPage>
        <div className="max-w-2xl mx-auto mb-16">
          <h2 className="display-lg font-bold text-foreground mb-4">{t("contact.title")}</h2>
          <p className="text-lg text-muted-foreground mb-8">{t("contact.hoursPending")}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">{t("contact.eyebrow")}</h3>
              <dl className="grid grid-cols-2 gap-4 text-sm">
                <dt className="text-muted-foreground">{t("contact.phones")}</dt>
                <dd>
                  {primaryPhone.tel ? (
                    <a href={`tel:${primaryPhone.tel}`} className="text-primary hover:underline">
                      {primaryPhone.display}
                    </a>
                  ) : null}
                </dd>
                <dd>
                  {clinic.phones[1] ? (
                    <a
                      href={`tel:${clinic.phones[1].tel}`}
                      className="text-primary hover:underline"
                    >
                      {clinic.phones[1].display}
                    </a>
                  ) : null}
                </dd>
              </dl>
              <dl className="grid grid-cols-2 gap-4 text-sm">
                <dt className="text-muted-foreground">{t("contact.address")}</dt>
                <dd>{l(clinic.location)}</dd>
              </dl>
              <dl className="grid grid-cols-2 gap-4 text-sm">
                <dt className="text-muted-foreground">{t("contact.email")}</dt>
                <dd>
                  <a href={`mailto:${clinic.email}`} className="text-primary hover:underline">
                    {clinic.email}
                  </a>
                </dd>
              </dl>
              <dl className="grid grid-cols-2 gap-4 text-sm">
                <dt className="text-muted-foreground">{t("contact.social")}</dt>
                <dd>
                  {clinic.social.map((s) => (
                    <a
                      key={s.id}
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary hover:underline hover:underline-offset-4"
                    >
                      {s.label}
                    </a>
                  ))}
                </dd>
              </dl>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">{t("contact.openMap")}</h3>
              <p className="text-muted-foreground text-sm">{t("contact.mapNote")}</p>
              <a
                href={clinic.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-primary underline"
              >
                <svg className="size-4" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                </svg>
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </ContainerPage>
    </section>
  );
}
