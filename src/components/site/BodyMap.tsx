import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";

import { JOINTS } from "@/components/anatomy/AnatomyScene";
import { getCondition } from "@/content/conditions";
import type { L } from "@/config/clinic";
import { useI18n } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

type Region = {
  id: string;
  at: readonly [number, number];
  label: L;
  slug: string;
};

/**
 * Educational mapping only. Each region points at the condition the clinic
 * already publishes an overview for — nothing here is diagnostic.
 */
const REGIONS: Region[] = [
  {
    id: "hands",
    at: JOINTS.handL,
    slug: "rheumatoid-arthritis",
    label: { en: "Hands & wrists", am: "እጅና አንጓ" },
  },
  {
    id: "shoulders",
    at: JOINTS.shoulderR,
    slug: "fibromyalgia",
    label: { en: "Shoulders & muscles", am: "ትከሻና ጡንቻዎች" },
  },
  {
    id: "spine",
    at: [200, 300] as const,
    slug: "lupus",
    label: { en: "Whole-body immune health", am: "የመላ ሰውነት በሽታ መከላከል" },
  },
  {
    id: "knees",
    at: JOINTS.kneeR,
    slug: "back-shoulder-knee-pain",
    label: { en: "Knees, back & shoulders", am: "ጉልበት፣ ጀርባና ትከሻ" },
  },
  {
    id: "feet",
    at: JOINTS.footL,
    slug: "gout",
    label: { en: "Feet & toes", am: "እግርና ጣቶች" },
  },
];

/**
 * Front-view body map. The figure coordinates come from the same 400x820
 * viewBox as AnatomyScene, so the hotspots sit exactly on the joints.
 */
export function BodyMap({ className }: { className?: string }) {
  const { t, l } = useI18n();
  const [activeId, setActiveId] = useState<string>(REGIONS[0]?.id ?? "");
  const active = useMemo(
    () => REGIONS.find((region) => region.id === activeId) ?? REGIONS[0],
    [activeId],
  );
  const condition = active ? getCondition(active.slug) : undefined;

  return (
    <div
      className={cn(
        "grid gap-8 rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-10",
        className,
      )}
    >
      {/* figure */}
      <div className="relative mx-auto w-full max-w-[19rem]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_45%,oklch(0.72_0.14_210/16%),transparent_65%)] blur-2xl"
        />
        <svg
          viewBox="0 0 400 820"
          role="img"
          aria-label={t("bodyMap.title")}
          className="relative h-[26rem] w-full sm:h-[30rem]"
        >
          <defs>
            <linearGradient id="map-skin" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="var(--cyan)" stopOpacity="0.28" />
              <stop offset="60%" stopColor="var(--teal)" stopOpacity="0.18" />
              <stop offset="100%" stopColor="var(--deep)" stopOpacity="0.14" />
            </linearGradient>
            <filter id="map-glow" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* silhouette */}
          <g
            fill="none"
            stroke="url(#map-skin)"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path
              d={`M${JOINTS.shoulderL} L${JOINTS.elbowL} L${JOINTS.wristL} L${JOINTS.handL}`}
              strokeWidth="26"
            />
            <path
              d={`M${JOINTS.shoulderR} L${JOINTS.elbowR} L${JOINTS.wristR} L${JOINTS.handR}`}
              strokeWidth="26"
            />
            <path
              d={`M${JOINTS.hipL} L${JOINTS.kneeL} L${JOINTS.ankleL} L${JOINTS.footL}`}
              strokeWidth="36"
            />
            <path
              d={`M${JOINTS.hipR} L${JOINTS.kneeR} L${JOINTS.ankleR} L${JOINTS.footR}`}
              strokeWidth="36"
            />
          </g>
          <path
            aria-hidden
            d="M146 148 C 126 154, 128 205, 142 262 C 152 320, 156 366, 158 420 C 175 436, 225 436, 242 420 C 244 366, 248 320, 258 262 C 272 205, 274 154, 254 148 C 230 140, 170 140, 146 148 Z"
            fill="url(#map-skin)"
            stroke="var(--cyan)"
            strokeOpacity="0.3"
          />
          <circle
            cx="200"
            cy="76"
            r="36"
            fill="url(#map-skin)"
            stroke="var(--cyan)"
            strokeOpacity="0.3"
          />
          <path
            d="M200 116 L200 404"
            stroke="var(--cyan)"
            strokeOpacity="0.45"
            strokeWidth="2"
            strokeDasharray="5 3"
          />
          {[190, 210, 230, 250, 270].map((y, i) => (
            <g
              key={y}
              stroke="var(--cyan)"
              strokeOpacity="0.22"
              strokeWidth="1"
              fill="none"
              aria-hidden
            >
              <path
                d={`M200 ${y} C ${180 - i * 2} ${y - 4}, ${160 - i} ${y + 4}, ${158 + i * 2} ${y + 16}`}
              />
              <path
                d={`M200 ${y} C ${220 + i * 2} ${y - 4}, ${240 + i} ${y + 4}, ${242 - i * 2} ${y + 16}`}
              />
            </g>
          ))}

          {/* hotspots */}
          <g>
            {REGIONS.map((region) => {
              const isActive = region.id === activeId;
              return (
                <g
                  key={region.id}
                  role="button"
                  tabIndex={0}
                  aria-label={l(region.label)}
                  aria-pressed={isActive}
                  onClick={() => setActiveId(region.id)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setActiveId(region.id);
                    }
                  }}
                  className="cursor-pointer outline-none"
                >
                  <circle cx={region.at[0]} cy={region.at[1]} r="26" fill="transparent" />
                  <circle
                    cx={region.at[0]}
                    cy={region.at[1]}
                    r={isActive ? 15 : 11}
                    fill={isActive ? "var(--cyan)" : "transparent"}
                    fillOpacity="0.18"
                    className="transition-all duration-300"
                  />
                  <circle
                    cx={region.at[0]}
                    cy={region.at[1]}
                    r={isActive ? 7 : 5}
                    fill={isActive ? "var(--cyan)" : "var(--on-dark)"}
                    filter="url(#map-glow)"
                    className="transition-all duration-300"
                  />
                  {isActive && (
                    <circle
                      cx={region.at[0]}
                      cy={region.at[1]}
                      r="18"
                      fill="none"
                      stroke="var(--cyan)"
                      strokeOpacity="0.6"
                      className="anim-glow-pulse"
                    />
                  )}
                </g>
              );
            })}
          </g>
        </svg>

        <p className="mt-2 text-center text-xs uppercase tracking-[0.18em] text-muted-foreground">
          {t("bodyMap.hint")}
        </p>
      </div>

      {/* detail panel */}
      <div className="flex flex-col justify-center">
        <p className="eyebrow text-primary">{t("bodyMap.eyebrow")}</p>
        <h3 className="display-md mt-3 text-foreground">{t("bodyMap.title")}</h3>
        <p className="mt-3 max-w-prose text-sm leading-relaxed text-muted-foreground">
          {t("bodyMap.body")}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {REGIONS.map((region) => (
            <button
              key={region.id}
              type="button"
              onClick={() => setActiveId(region.id)}
              aria-pressed={region.id === activeId}
              className={cn(
                "rounded-full border px-3.5 py-2 text-sm transition-colors duration-300",
                region.id === activeId
                  ? "border-primary bg-primary/15 text-primary"
                  : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground",
              )}
            >
              {l(region.label)}
            </button>
          ))}
        </div>

        {condition && active && (
          <div
            key={active.id}
            className="anim-rise mt-6 rounded-2xl border border-border bg-background p-5"
          >
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {l(active.label)}
            </p>
            <h4 className="mt-2 text-xl font-semibold text-foreground">{l(condition.title)}</h4>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {l(condition.summary)}
            </p>
            <dl className="mt-4 grid gap-2 text-sm">
              <div>
                <dt className="text-muted-foreground">{t("condition.what")}</dt>
                <dd className="text-foreground">{l(condition.what)}</dd>
              </div>
            </dl>
            <a
              href="#conditions-list"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              {t("cta.learnMore")}
              <ArrowRight className="size-4" aria-hidden />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
