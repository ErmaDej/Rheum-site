import { Link } from "@tanstack/react-router";
import { useEffect, useRef, type ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { useI18n } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

/** Fades content in once when it enters the viewport. Respects reduced motion via CSS. */
export function SectionReveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
      if (!e) return;
        if (e.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={cn("reveal", className)} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function Eyebrow({ children, onDark }: { children: ReactNode; onDark?: boolean }) {
  return <p className={cn("eyebrow", onDark ? "text-cyan" : "text-primary")}>{children}</p>;
}

export function Breadcrumbs({ items }: { items: { label: string; to?: "/services" | "/conditions" }[] }) {
  const { t } = useI18n();
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
      <ol className="flex flex-wrap items-center gap-1">
        <li><Link to="/" className="hover:text-foreground">{t("crumb.home")}</Link></li>
        {items.map((it) => (
          <li key={it.label} className="flex items-center gap-1">
            <ChevronRight className="size-3.5" aria-hidden />
            {it.to ? <Link to={it.to} className="hover:text-foreground">{it.label}</Link> : <span aria-current="page" className="text-foreground">{it.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHeader({ title, lead, crumbs, children }: { title: string; lead?: string; crumbs: { label: string; to?: "/services" | "/conditions" }[]; children?: ReactNode }) {
  return (
    <section className="border-b border-border bg-card pb-14 pt-28 lg:pt-36">
      <div className="container-page">
        <Breadcrumbs items={crumbs} />
        <h1 className="display-lg mt-6 max-w-4xl text-foreground">{title}</h1>
        {lead && <p className="prose-clinic mt-5 text-lg leading-relaxed text-muted-foreground">{lead}</p>}
        {children}
      </div>
    </section>
  );
}

export function ReviewBadge() {
  const { t } = useI18n();
  return (
    <span className="inline-flex items-center rounded-full border border-coral/50 bg-coral/10 px-3 py-1 text-xs font-semibold text-foreground">
      {t("review.badge")}
    </span>
  );
}
