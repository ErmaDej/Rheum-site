import { createFileRoute } from "@tanstack/react-router";
import { ContainerPage, type ContainerPageProps } from "@/lib/utils";
import { services } from "@/content/services";
import { useI18n } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
});

function ServicesPage() {
  const { t } = useI18n();

  return (
    <section id="services" className="pt-24 pb-24">
      <ContainerPage>
        <div className="max-w-2xl mx-auto mb-16">
          <h2 className="display-lg font-bold text-foreground mb-4">{t("services.title")}</h2>
          <p className="text-lg text-muted-foreground mb-8">{t("services.lead")}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.slug}
                className="p-6 rounded-2xl border border-background bg-background hover:bg-card transition-colors"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 17c1.654-3.26 5.268-3.26 6.922 0l3.178 6.445c-.516 1.25-1.813 2.093-2.71 1.667L18.5 19l-5.743 2.19L8.134 22l1.128-4.707c.9-1.25 1.137-2.813.7-4.25zM12 3l5.038 10.09L18.5 15l-5.528 2.177 1.062-5.688L12 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{service.title.en}</h3>
                <p className="text-muted-foreground line-clamp-2">{service.summary.en}</p>
                <a
                  href={"/condition/" + service.slug}
                  className="mt-4 inline-flex items-center gap-2 text-primary transition-colors underline"
                >
                  {t("cta.learnMore")}
                </a>
              </div>
            ))}
          </div>
        </div>
      </ContainerPage>
    </section>
  );
}
