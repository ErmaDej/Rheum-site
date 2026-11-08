import { createFileRoute } from '@tanstack/react-router'
import { ContainerPage, type ContainerPageProps } from "@/lib/utils";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { conditions, getCondition } from "@/content/conditions";
import { useI18n } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/conditions")({
  component: ConditionsPage,
});

function ConditionsPage() {
  const { t } = useI18n();

  return (
    <section id="conditions" className="pt-24 pb-24">
      <ContainerPage>
        <SiteHeader />
        <div className="max-w-2xl mx-auto mb-16">
          <h2 className="display-lg font-bold text-foreground mb-4">
            {t("conditions.title")}</h2>
          <p className="text-lg text-muted-foreground mb-8">
            {t("conditions.lead")}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {conditions.map((condition) => (
              <div
                key={condition.slug}
                className="p-6 rounded-2xl border border-background bg-background hover:bg-card transition-colors"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 17c1.654-3.26 5.268-3.26 6.922 0l3.178 6.445c-.516 1.25-1.813 2.093-2.71 1.667L18.5 19l-5.743 2.19L8.134 22l1.128-4.707c.9-1.25 1.137-2.813.7-4.25zM12 3l5.038 10.09L18.5 15l-5.528 2.177 1.062-5.688L12 3z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {condition.title.en}</h3>
                <p className="text-muted-foreground line-clamp-2">
                  {condition.summary.en}</p>
                <div className="mt-3">
                  <details className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <dt className="text-muted-foreground mb-1">
                        {t("condition.what")}</dt>
                      <dd className="text-primary">
                        {condition.what.en}</dd>
                    </div>
                    <div>
                      <dt className="text-muted-foreground mb-1">
                        {t("condition.symptoms")}</dt>
                      <dd>
                        {condition.symptoms.map((s, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <span className="text-primary flex-shrink-0">•</span>
                            <span>{s}</span>
                          </div>
                        ))}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-muted-foreground mb-1">
                        {t("condition.evaluation")}</dt>
                      <dd className="text-primary">
                        {condition.evaluation.en}</dd>
                    </div>
                    <div>
                      <dt className="text-muted-foreground mb-1">
                        {t("condition.when")}</dt>
                      <dd className="text-primary">
                        {condition.when.en}</dd>
                    </div>
                  </details>
                </div>
              </div>
            ))}
          </div>
        </div>
        <SiteFooter />
      </ContainerPage>
    </section>
  );
}

export default ConditionsPage;