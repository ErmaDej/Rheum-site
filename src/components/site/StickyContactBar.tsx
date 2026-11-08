import { MapPin, Phone } from "lucide-react";
import { clinic, primaryPhone } from "@/config/clinic";
import { useI18n } from "@/i18n/LanguageProvider";

/** Always-visible call / directions bar on small screens. */
export function StickyContactBar() {
  const { t } = useI18n();
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-border bg-background/95 p-3 backdrop-blur lg:hidden">
      <a href={`tel:${primaryPhone.tel}`} className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary text-sm font-semibold text-primary-foreground">
        <Phone className="size-4" aria-hidden /> {t("cta.call")}
      </a>
      <a href={clinic.mapUrl} target="_blank" rel="noreferrer" className="flex min-h-12 items-center justify-center gap-2 rounded-full border border-primary/30 text-sm font-semibold text-primary">
        <MapPin className="size-4" aria-hidden /> {t("cta.directions")}
      </a>
    </div>
  );
}
