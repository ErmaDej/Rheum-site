import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Moon, Phone, Sun, X } from "lucide-react";

import { primaryPhone } from "@/config/clinic";
import { useI18n } from "@/i18n/LanguageProvider";
import { useTheme } from "@/theme/ThemeProvider";
import { cn } from "@/lib/utils";
import { LanguageSwitcher } from "./LanguageSwitcher";

// Served from public/ so the logo works locally and in production builds.
const logo = { url: "/rheum_logo.jpg" };

export const navItems = [
  { to: "/", key: "nav.home" },
  { to: "/services", key: "nav.services" },
  { to: "/conditions", key: "nav.conditions" },
  { to: "/about", key: "nav.about" },
  { to: "/resources", key: "nav.resources" },
  { to: "/contact", key: "nav.contact" },
] as const;

export function BrandMark({ onDark = false }: { onDark?: boolean }) {
  return (
    <Link to="/" className="group flex items-center gap-3" aria-label="Rheum — home">
      <span className="relative">
        <span
          aria-hidden
          className="absolute inset-0 rounded-full bg-cyan/30 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100"
        />
        <img
          src={logo.url}
          alt=""
          width={40}
          height={40}
          className="relative size-10 rounded-full ring-1 ring-current/10 transition-transform duration-500 group-hover:scale-105"
        />
      </span>
      <span
        className={cn(
          "flex flex-col border-l pl-3 leading-tight",
          onDark ? "border-on-dark/40" : "border-primary/40",
        )}
      >
        <span
          className={cn(
            "text-lg font-bold tracking-tight",
            onDark ? "text-on-dark" : "text-primary",
          )}
        >
          Rheum
        </span>
        <span
          className={cn(
            "hidden text-[0.68rem] font-medium sm:block",
            onDark ? "text-on-dark-muted" : "text-muted-foreground",
          )}
        >
          Internal Medicine Speciality Clinic
        </span>
      </span>
    </Link>
  );
}

function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const { theme, toggleTheme } = useTheme();
  const { t } = useI18n();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={t("hero.toggleTheme")}
      title={t("hero.toggleTheme")}
      className={cn(
        "group relative inline-flex items-center justify-center rounded-full border border-border bg-card/60 text-foreground transition-colors duration-300 hover:border-primary/60 hover:text-primary",
        compact ? "size-11" : "size-10",
      )}
    >
      <Sun
        className={cn(
          "absolute size-4 transition-all duration-500",
          isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100",
        )}
        aria-hidden
      />
      <Moon
        className={cn(
          "absolute size-4 transition-all duration-500",
          isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0",
        )}
        aria-hidden
      />
    </button>
  );
}

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the drawer whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll behind the drawer, and allow Escape to dismiss it.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const dark = overlay && !scrolled;

  return (
    <header
      data-scrolled={scrolled || undefined}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-500",
        dark
          ? "glass-dark border-b border-line-dark"
          : "border-b border-border bg-background/80 backdrop-blur-xl data-[scrolled]:shadow-[0_10px_30px_-24px_oklch(0.05_0.02_250/80%)]",
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-md focus:bg-card focus:px-4 focus:py-2 focus:text-foreground"
      >
        {t("nav.skip")}
      </a>

      <div className="container-page flex h-16 items-center justify-between gap-4 lg:h-20">
        <BrandMark onDark={dark} />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  className={cn(
                    "group relative inline-flex rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    dark
                      ? "text-on-dark-muted hover:text-on-dark data-[status=active]:text-on-dark"
                      : "text-muted-foreground hover:text-foreground data-[status=active]:text-primary",
                  )}
                >
                  {t(item.key)}
                  <span
                    aria-hidden
                    className="absolute inset-x-3 -bottom-0.5 h-px origin-left scale-x-0 bg-cyan transition-transform duration-300 group-hover:scale-x-100 group-data-[status=active]:scale-x-100"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LanguageSwitcher onDark={dark} />
          <a
            href={`tel:${primaryPhone.tel}`}
            className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 sm:inline-flex"
          >
            <Phone className="size-4" aria-hidden />
            <span className="hidden xl:inline">{primaryPhone.display}</span>
            <span className="xl:hidden">{t("cta.call")}</span>
          </a>
          <button
            type="button"
            className={cn(
              "inline-flex size-11 items-center justify-center rounded-full border border-border transition-colors lg:hidden",
              dark ? "text-on-dark" : "text-foreground",
            )}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t("nav.close") : t("nav.menu")}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        hidden={!open}
        className={cn(
          "lg:hidden",
          open && "anim-rise border-t border-border bg-background/95 backdrop-blur-xl",
        )}
      >
        <nav aria-label="Mobile" className="container-page py-4">
          <ul className="flex flex-col gap-1">
            {navItems.map((item, index) => (
              <li key={item.to} className="anim-rise" style={{ animationDelay: `${index * 45}ms` }}>
                <Link
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium text-foreground transition-colors hover:bg-accent data-[status=active]:bg-accent data-[status=active]:text-primary"
                >
                  {t(item.key)}
                  <span aria-hidden className="text-muted-foreground">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-3 border-t border-border pt-4">
            <a
              href={`tel:${primaryPhone.tel}`}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-5 font-semibold text-primary-foreground"
            >
              <Phone className="size-4" aria-hidden />
              {primaryPhone.display}
            </a>
            <div className="flex items-center justify-between rounded-xl border border-border px-4 py-2">
              <span className="text-sm text-muted-foreground">{t("lang.label")}</span>
              <LanguageSwitcher />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
