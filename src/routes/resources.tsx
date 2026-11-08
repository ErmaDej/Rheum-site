import { createFileRoute } from "@tanstack/react-router";
import { ContainerPage } from "@/lib/utils";
import { faqs } from "@/content/faq";
import { useI18n } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/resources")({
  component: ResourcesPage,
});

function ResourcesPage() {
  const { t } = useI18n();

  return (
    <section id="resources" className="pt-24 pb-24">
      <ContainerPage>
        <div className="max-w-2xl mx-auto mb-16">
          <h2 className="display-lg font-bold text-foreground mb-4">{t("resources.title")}</h2>
          <p className="text-lg text-muted-foreground mb-8">{t("resources.lead")}</p>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {t("resources.prepTitle")}
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>{t("home.visit1")}</li>
                <li>{t("home.visit2")}</li>
                <li>{t("home.visit3")}</li>
                <li>{t("home.visit4")}</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">{t("home.faqTitle")}</h3>
              <dl className="grid grid-cols-2 gap-4">
                {faqs.map((faq, i) => (
                  <div key={i} className="group">
                    <dt className="text-primary font-medium cursor-pointer group-hover:text-teal transition-colors">
                      {faq.q.en}
                    </dt>
                    <dd className="text-muted-foreground line-clamp-2">{faq.a.en}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </ContainerPage>
    </section>
  );
}
