import { Link } from "@tanstack/react-router";
import {
  Activity,
  ArrowRight,
  Bone,
  CalendarCheck,
  ClipboardList,
  Siren,
  Stethoscope,
} from "lucide-react";
import type { Service } from "@/content/services";
import type { Condition } from "@/content/conditions";
import { useI18n } from "@/i18n/LanguageProvider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { L } from "@/config/clinic";

const icons = {
  pulse: Activity,
  alert: Siren,
  calendar: CalendarCheck,
  stethoscope: Stethoscope,
  joint: Bone,
  clipboard: ClipboardList,
};

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  const { l, t } = useI18n();
  const Icon = icons[service.icon];
  return (
    <Link
      to="/services"
      className="group flex h-full flex-col gap-4 border-t border-border py-6 transition-colors hover:border-primary"
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold tabular-nums text-muted-foreground">
          {String(index + 1).padStart(2, "0")}
        </span>
        <Icon className="size-5 text-primary" aria-hidden />
      </div>
      <h3 className="display-md text-foreground">{l(service.title)}</h3>
      <p className="text-muted-foreground">{l(service.summary)}</p>
      <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-primary">
        {t("cta.learnMore")}{" "}
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
      </span>
    </Link>
  );
}

export function ConditionCard({ condition }: { condition: Condition }) {
  const { l } = useI18n();
  return (
    <Link
      to="/conditions"
      className="group flex items-start justify-between gap-6 rounded-xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift"
    >
      <div>
        <h3 className="text-xl font-semibold text-foreground">{l(condition.title)}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{l(condition.summary)}</p>
      </div>
      <ArrowRight
        className="mt-1 size-5 shrink-0 text-primary transition-transform group-hover:translate-x-1"
        aria-hidden
      />
    </Link>
  );
}

export function FAQAccordion({ items }: { items: { q: L; a: L }[] }) {
  const { l } = useI18n();
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((f, i) => (
        <AccordionItem key={i} value={`f${i}`}>
          <AccordionTrigger className="text-left text-base font-semibold">
            {l(f.q)}
          </AccordionTrigger>
          <AccordionContent className="text-base leading-relaxed text-muted-foreground">
            {l(f.a)}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
