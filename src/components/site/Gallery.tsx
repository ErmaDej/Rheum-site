import { useEffect, useState } from "react";
import { X } from "lucide-react";

import { media } from "@/assets/media";
import type { DictKey } from "@/i18n/dict";
import { useI18n } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

type Shot = {
  src: string;
  caption: DictKey;
  span?: string;
  ratio?: string;
  /** Object-position; "top" keeps faces in frame when a portrait is cropped wide. */
  position?: string;
  /** For poster portraits, anchor the top edge so faces are never cropped out. */
  objectFit?: "top" | "center";
};

const SHOTS: Shot[] = [
  {
    src: media.waitingArea,
    caption: "about.waiting",
    span: "sm:col-span-2 lg:col-span-2",
    ratio: "aspect-[16/10]",
  },
  { src: media.receptionDesk, caption: "about.reception", ratio: "aspect-[4/3]" },
  { src: media.clinicSign, caption: "about.sign", ratio: "aspect-[4/3]" },
  {
    src: media.teamPoster,
    caption: "about.doctors",
    span: "sm:col-span-2 lg:col-span-3",
    ratio: "aspect-[16/9]",
    position: "top",
  },
];

export function Gallery({ className }: { className?: string }) {
  const { t } = useI18n();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const openShot = openIndex === null ? undefined : SHOTS[openIndex];

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenIndex(null);
      if (event.key === "ArrowRight")
        setOpenIndex((i) => (i === null ? i : (i + 1) % SHOTS.length));
      if (event.key === "ArrowLeft")
        setOpenIndex((i) => (i === null ? i : (i - 1 + SHOTS.length) % SHOTS.length));
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [openIndex]);

  return (
    <>
      <ul className={cn("grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
        {SHOTS.map((shot, index) => (
          /* The ratio lives on the grid item so every card fills its cell, and the
              image is absolutely positioned — no letterboxing when rows stretch. */
          <li key={shot.src} className={cn("relative", shot.span, shot.ratio ?? "aspect-[4/3]")}>
            <button
              type="button"
              onClick={() => setOpenIndex(index)}
              className="group absolute inset-0 overflow-hidden rounded-2xl border border-border bg-card text-left shadow-soft"
              aria-label={t(shot.caption)}
            >
              <img
                src={shot.src}
                alt={t(shot.caption)}
                loading="lazy"
                decoding="async"
              className={cn(
                "absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]",
                shot.position === "top" ? "object-top" : "object-center",
              )}
              />
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-midnight/85 via-midnight/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95"
              />
              <span className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
                <span className="text-sm font-medium text-on-dark">{t(shot.caption)}</span>
                <span
                  aria-hidden
                  className="inline-flex size-7 items-center justify-center rounded-full border border-on-dark/30 text-on-dark opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                >
                  +
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      {openShot && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={t(openShot.caption)}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-midnight/90 p-4 backdrop-blur-sm"
          onClick={() => setOpenIndex(null)}
        >
          <button
            type="button"
            onClick={() => setOpenIndex(null)}
            aria-label="Close"
            className="absolute right-4 top-4 inline-flex size-11 items-center justify-center rounded-full border border-on-dark/25 text-on-dark transition-colors hover:bg-on-dark/10"
          >
            <X className="size-5" aria-hidden />
          </button>
          <figure
            className="anim-rise max-h-[86svh] w-full max-w-4xl overflow-hidden rounded-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={openShot.src}
              alt={t(openShot.caption)}
              className="max-h-[76svh] w-full object-contain"
            />
            <figcaption className="bg-midnight/80 px-4 py-3 text-center text-sm text-on-dark-muted">
              {t(openShot.caption)}
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
