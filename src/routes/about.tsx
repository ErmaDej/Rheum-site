import { createFileRoute } from '@tanstack/react-router'
import { ContainerPage, type ContainerPageProps } from "@/lib/utils";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { clinic } from "@/config/clinic";
import { useI18n } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  const { t, l } = useI18n();

  return (
    <section id="about" className="pt-24 pb-24">
      <ContainerPage>
        <SiteHeader />
        <div className="max-w-2xl mx-auto mb-16">
          <h2 className="display-lg font-bold text-foreground mb-4">
            {t("about.title")}</h2>
          <p className="text-lg text-muted-foreground mb-8">
            {l(clinic.name)}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {t("about.missionTitle")}</h3>
              <p className="text-muted-foreground">
                {t("about.mission")}</p>
              <p className="mt-4 text-sm text-muted-foreground">
                {t("about.missionSource")}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {t("about.teamTitle")}</h3>
              <p className="text-muted-foreground">
                {t("about.teamPending")}</p>
            </div>
          </div>
          <div className="mt-8 p-6 rounded-2xl border border-background bg-background">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              {t("about.spacesTitle")}</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-muted-foreground">
                  {t("about.reception")}</p>
              </div>
              <div>
                <p className="text-muted-foreground">
                  {t("about.waiting")}</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-muted-foreground">
                {t("about.sign")}</p>
            </div>
          </div>
        </div>
        <SiteFooter />
      </ContainerPage>
    </section>
  );
}

export default AboutPage;