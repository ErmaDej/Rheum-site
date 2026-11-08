import { Link } from "@tanstack/react-router";
import { AlertTriangle, MapPin, Phone } from "lucide-react";
import { clinic } from "@/config/clinic";
import { useI18n } from "@/i18n/LanguageProvider";
import { BrandMark, navItems } from "./SiteHeader";

export function SiteFooter() {
  const { t, l } = useI18n();
  return (
    <footer className="bg-midnight pb-28 pt-16 text-on-dark-muted lg:pb-12">
      <div className="container-page">
        <div
          role="note"
          className="mb-12 flex gap-4 rounded-xl border border-coral/40 bg-coral/10 p-5 text-on-dark"
        >
          <AlertTriangle className="mt-0.5 size-5 shrink-0 text-coral" aria-hidden />
          <p className="text-sm leading-relaxed">{t("footer.emergency")}</p>
        </div>
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1.2fr]">
          <div className="space-y-4">
            <BrandMark onDark />
            <p className="max-w-sm text-sm">{l(clinic.name)}</p>
          </div>
          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-2 text-sm md:grid-cols-1">
              {navItems.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="hover:text-on-dark">{t(n.key)}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="space-y-3 text-sm">
            {clinic.phones.map((p) => (
              <a key={p.tel} href={`tel:${p.tel}`} className="flex items-center gap-2 hover:text-on-dark">
                <Phone className="size-4 text-cyan" aria-hidden /> {p.display}
              </a>
            ))}
            <p className="flex gap-2"><MapPin className="mt-0.5 size-4 shrink-0 text-cyan" aria-hidden />{l(clinic.location)}</p>
            <ul className="flex flex-wrap gap-x-4 gap-y-1 pt-2">
              {clinic.social.map((s) => (
                <li key={s.id}><a href={s.url} target="_blank" rel="noreferrer" className="underline-offset-4 hover:text-on-dark hover:underline">{s.label}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-line-dark pt-6 text-xs leading-relaxed">
          <p><strong className="text-on-dark">{t("footer.disclaimerTitle")}.</strong> {t("footer.disclaimer")}</p>
          <p className="mt-3">© {new Date().getFullYear()} Rheum. {t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
}
