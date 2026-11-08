import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import logo from "@/assets/rheum_logo.jpg.asset.json";
import { primaryPhone } from "@/config/clinic";
import { useI18n } from "@/i18n/LanguageProvider";
import type { DictKey } from "@/i18n/dict";
import { cn } from "@/lib/utils";
import { LanguageSwitcher } from "./LanguageSwitcher";

export const navItems = [
  { to: "/", key: "nav.home" },
  { to: "/services", key: "nav.services" },
  { to: "/conditions", key: "nav.conditions" },
  { to: "/about", key: "nav.about" },
  { to: "/resources", key: "nav.resources" },
  { to: "/contact", key: "nav.contact" },
] as const;

export function BrandMark({ onDark }: { onDark?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="Rheum — home">
      <img src={logo.url} alt="" width={40} height={40} className="size-10 rounded-full" />
      <span className={cn("flex flex-col border-l pl-3 leading-tight", onDark ? "border-on-dark/40" : "border-primary/40")}>
        <span className={cn("text-lg font-bold tracking-tight", onDark ? "text-on-dark" : "text-primary")}>Rheum</span>
        <span className={cn("text-[0.68rem] font-medium", onDark ? "text-on-dark-muted" : "text-muted-foreground")}>
          Internal Medicine Speciality Clinic
        </span>
      </span>
    </Link>
  );
}

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > window.innerHeight * 0.75);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const dark = overlay && !scrolled;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        dark ? "glass-dark border-b border-line-dark" : "border-b border-border bg-background/90 backdrop-blur",
      )}
    >
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-md focus:bg-card focus:px-4 focus:py-2 focus:text-foreground">
        {t("nav.skip")}
      </a>
      <div className="container-page flex h-16 items-center justify-between gap-4 lg:h-20">
        <BrandMark onDark={dark} />
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  activeOptions={{ exact: n.to === "/" }}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    dark ? "text-on-dark-muted hover:text-on-dark data-[status=active]:text-on-dark" : "text-muted-foreground hover:text-foreground data-[status=active]:text-primary",
                  )}
                >
                  {t(n.key)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <LanguageSwitcher onDark={dark} />
          <a
            href={`tel:${primaryPhone.tel}`}
            className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            <Phone className="size-4" aria-hidden /> {primaryPhone.display}
          </a>
          <button
            type="button"
            className={cn("inline-flex size-11 items-center justify-center rounded-full lg:hidden", dark ? "text-on-dark" : "text-foreground")}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t("nav.close") : t("nav.menu")}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}