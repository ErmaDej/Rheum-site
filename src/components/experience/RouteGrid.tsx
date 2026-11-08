import { Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  BookOpen,
  HeartPulse,
  House,
  MapPin,
  Stethoscope,
  Users,
} from "lucide-react";

import type { DictKey } from "@/i18n/dict";
import { useI18n } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

type RouteEntry = {
  to: "/" | "/services" | "/conditions" | "/about" | "/resources" | "/contact";
  label: DictKey;
  blurb: DictKey;
  icon: typeof House;
  /** Tailwind gradient stop pair used for the hover wash. */
  tint: string;
};

const ROUTES: RouteEntry[] = [
  { to: "/", label: "nav.home", blurb: "route.homeBlurb", icon: House, tint: "from-cyan/25" },
  {
    to: "/services",
    label: "nav.services",
    blurb: "route.servicesBlurb",
    icon: Stethoscope,
    tint: "from-sky-400/25",
  },
  {
    to: "/conditions",
    label: "nav.conditions",
    blurb: "route.conditionsBlurb",
    icon: HeartPulse,
    tint: "from-rose-400/25",
  },
  {
    to: "/about",
    label: "nav.about",
    blurb: "route.aboutBlurb",
    icon: Users,
    tint: "from-indigo-400/25",
  },
  {
    to: "/resources",
    label: "nav.resources",
    blurb: "route.resourcesBlurb",
    icon: BookOpen,
    tint: "from-teal-300/25",
  },
  {
    to: "/contact",
    label: "nav.contact",
    blurb: "route.contactBlurb",
    icon: MapPin,
    tint: "from-amber-300/25",
  },
];

/**
 * The launch pad under the hero. Each card is a real router link, so it works
 * with keyboard, middle-click and prefetch; the motion is decoration only.
 */
export function RouteGrid({ className }: { className?: string }) {
  const { t } = useI18n();

  return (
    <ul className={cn("grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {ROUTES.map((route, index) => {
        const Icon = route.icon;
        return (
          <li key={route.to}>
            <Link
              // Route paths are a closed set generated from the route tree.
              to={route.to}
              className={cn(
                "group relative flex h-full min-h-[8.5rem] flex-col justify-between overflow-hidden rounded-2xl border border-line-dark bg-white/5 p-5",
                "transition-[transform,border-color,background-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                "hover:-translate-y-1.5 hover:border-cyan/50 hover:bg-white/10",
                "focus-visible:-translate-y-1.5 focus-visible:border-cyan/60",
                "anim-rise",
              )}
              style={{ animationDelay: `${140 + index * 80}ms` }}
            >
              {/* hover wash */}
              <span
                aria-hidden
                className={cn(
                  "pointer-events-none absolute inset-0 bg-gradient-to-br to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                  route.tint,
                )}
              />
              {/* corner sweep */}
              <span
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 size-24 rounded-full bg-cyan/20 blur-2xl transition-transform duration-700 group-hover:scale-150"
              />

              <span className="relative flex items-start justify-between">
                <span className="inline-flex size-11 items-center justify-center rounded-xl border border-line-dark bg-midnight/60 text-cyan transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                  <Icon className="size-5" aria-hidden />
                </span>
                <ArrowUpRight
                  className="size-4 text-on-dark-muted transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan"
                  aria-hidden
                />
              </span>

              <span className="relative mt-5 block">
                <span className="block text-base font-semibold text-on-dark">{t(route.label)}</span>
                <span className="mt-1 block text-sm leading-snug text-on-dark-muted">
                  {t(route.blurb)}
                </span>
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
