import { useI18n, type Lang } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

const options: { id: Lang; label: string; full: string }[] = [
  { id: "en", label: "EN", full: "English" },
  { id: "am", label: "አማ", full: "አማርኛ" },
];

export function LanguageSwitcher({ onDark }: { onDark?: boolean }) {
  const { lang, setLang, t } = useI18n();
  return (
    <div
      role="group"
      aria-label={t("lang.label")}
      className={cn("flex rounded-full border p-0.5 text-xs font-semibold", onDark ? "border-line-dark" : "border-border")}
    >
      {options.map((o) => (
        <button
          key={o.id}
          type="button"
          lang={o.id}
          aria-pressed={lang === o.id}
          aria-label={o.full}
          onClick={() => setLang(o.id)}
          className={cn(
            "min-h-9 min-w-10 rounded-full px-2.5 transition-colors",
            lang === o.id
              ? onDark ? "bg-on-dark text-midnight" : "bg-primary text-primary-foreground"
              : onDark ? "text-on-dark-muted hover:text-on-dark" : "text-muted-foreground hover:text-foreground",
          )}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
