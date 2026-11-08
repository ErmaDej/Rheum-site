import { createFileRoute } from '@tanstack/react-router'
import { ContainerPage } from "@/lib/utils";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { clinic } from "@/config/clinic";
import { useI18n } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const { t, l } = useI18n();

  return (
    <section id="home" className="pt-24 pb-24">
      <ContainerPage>
        <SiteHeader />
        <div className="max-w-2xl mx-auto mb-16">
          <h2 className="display-lg font-bold text-foreground mb-4">{t("home.introTitle")}</h2>
          <p className="text-lg text-muted-foreground mb-6">{t("home.introBody")}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">{t("home.servicesEyebrow")}</h3>
              <p className="text-muted-foreground line-clamp-2">{t("home.servicesTitle")}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">{t("home.conditionsEyebrow")}</h3>
              <p className="text-muted-foreground line-clamp-2">{t("home.conditionsBody")}</p>
            </div>
          </div>
        </div>
        {/* Approach section */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-foreground mb-4">{t("home.approachEyebrow")}</h3>
          <h2 className="display-md font-bold text-foreground mb-6">{t("home.approachTitle")}</h2>
          <div className="grid grid-cols-1 gap-4">
            <div className="p-4 rounded-xl border border-border bg-background hover:bg-card transition-colors">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center mb-3 bg-primary/10">
                <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 17c1.654-3.26 5.268-3.26 6.922 0l3.178 6.445c-.516 1.25-1.813 2.093-2.71 1.667L18.5 19l-5.743 2.19L8.134 22l1.128-4.707c.9-1.25 1.137-2.813.7-4.25zM12 3l5.038 10.09L18.5 15l-5.528 2.177 1.062-5.688L12 3z" />
                </svg>
              </div>
              <h4 className="font-semibold text-foreground mb-2">{t("home.approach1t")}</h4>
              <p className="text-muted-foreground line-clamp-1">{t("home.approach1b")}</p>
            </div>
            <div className="p-4 rounded-xl border border-border bg-background hover:bg-card transition-colors">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center mb-3 bg-primary/10">
                <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 17c1.654-3.26 5.268-3.26 6.922 0l3.178 6.445c-.516 1.25-1.813 2.093-2.71 1.667L18.5 19l-5.743 2.19L8.134 22l1.128-4.707c.9-1.25 1.137-2.813.7-4.25zM12 3l5.038 10.09L18.5 15l-5.528 2.177 1.062-5.688L12 3z" />
                </svg>
              </div>
              <h4 className="font-semibold text-foreground mb-2">{t("home.approach2t")}</h4>
              <p className="text-muted-foreground line-clamp-1">{t("home.approach2b")}</p>
            </div>
            <div className="p-4 rounded-xl border border-border bg-background hover:bg-card transition-colors">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center mb-3 bg-primary/10">
                <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 17c1.654-3.26 5.268-3.26 6.922 0l3.178 6.445c-.516 1.25-1.813 2.093-2.71 1.667L18.5 19l-5.743 2.19L8.134 22l1.128-4.707c.9-1.25 1.137-2.813.7-4.25zM12 3l5.038 10.09L18.5 15l-5.528 2.177 1.062-5.688L12 3z" />
                </svg>
              </div>
              <h4 className="font-semibold text-foreground mb-2">{t("home.approach3t")}</h4>
              <p className="text-muted-foreground line-clamp-1">{t("home.approach3b")}</p>
            </div>
          </div>
        </div>
        {/* Visit section */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-foreground mb-4">{t("home.visitEyebrow")}</h3>
          <h2 className="display-md font-bold text-foreground mb-6">{t("home.visitTitle")}</h2>
          <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
            <li>{t("home.visit1")}</li>
            <li>{t("home.visit2")}</li>
            <li>{t("home.visit3")}</li>
            <li>{t("home.visit4")}</li>
          </ol>
        </div>
        {/* Resources section */}
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-4">{t("home.resourcesTitle")}</h3>
          <p className="text-muted-foreground mb-4">{t("home.resourcesBody")}</p>
          <a
            href="/resources"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t("cta.explore")}
            <svg className="size-4" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
            </svg>
          </a>
        </div>
        <SiteFooter />
      </ContainerPage>
    </section>
  );
}

export default Index;