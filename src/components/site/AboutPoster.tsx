import { useRef, useEffect, type ReactNode } from "react";

import { useTheme } from "@/theme/ThemeProvider";
import { cn } from "@/lib/utils";

/**
 * Portrait-respecting poster for the "Our team" block on the About page.
 *
 * The team poster is a square photo (1280x1280) whose faces live near the top.
 * We used to force `aspect-[16/9]`, which cropped the image. Now the card sizes
 * itself to the image's own proportions and only constrains width/height, so
 * faces are never trimmed. On narrow screens it still fills the card width and
 * caps its height so the column doesn't blow out.
 */
export function AboutPoster({
  src,
  alt,
  className,
  children,
}: {
  src: string;
  alt: string;
  className?: string;
  children?: ReactNode;
}) {
  const { theme } = useTheme();
  const imgRef = useRef<HTMLImageElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  // Keep the poster frame honest when the image actually loads (and on resize).
  useEffect(() => {
    const img = imgRef.current;
    const card = cardRef.current;
    if (!img || !card) return;

    const sync = () => {
      // Natural aspect ratio is reliable once the image has decoded.
      const ar = img.naturalWidth / img.naturalHeight;
      // Portrait photos get a taller card; very wide ones are clamped.
      const preferred = ar >= 1 ? `aspect-[4/3]` : "aspect-auto";
      card.className = cn("relative overflow-hidden rounded-2xl border border-border", preferred, className);
    };

    if (img.complete) sync();
    else img.addEventListener("load", sync, { once: true });
    return () => img.removeEventListener("load", sync);
  }, [className]);

  return (
    <div ref={cardRef} className={cn("mt-6", className)}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading="eager"
        decoding="async"
        className="h-full w-full object-cover object-top transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.02] select-none"
      />
      {/* Subtle theme-aware border tint so the poster feels integrated on light/dark. */}
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 rounded-2xl ring-1",
          theme === "dark" ? "ring-line-dark/40" : "ring-border/60",
        )}
      />
      {children}
    </div>
  );
}
