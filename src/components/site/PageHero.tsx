import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * Shared opening band for every inner page. Keeps the dark, glowing language of
 * the landing hero so navigation between pages feels continuous.
 */
export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  imageAlt,
  children,
  className,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("relative isolate overflow-hidden bg-midnight text-on-dark", className)}>
      <div aria-hidden className="grid-lines pointer-events-none absolute inset-0 opacity-40" />
      <div
        aria-hidden
        className="anim-aurora pointer-events-none absolute -top-24 left-1/4 size-[34rem] rounded-full bg-[radial-gradient(circle,oklch(0.72_0.15_210/24%),transparent_65%)] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(100%_80%_at_50%_-20%,oklch(0.55_0.16_250/30%),transparent_62%)]"
      />

      <div className="container-page relative grid items-center gap-8 pb-16 pt-28 sm:pt-32 lg:grid-cols-[1.15fr_0.85fr] lg:pb-16 lg:pt-32">
        <div className="anim-rise max-w-2xl">
          <p className="eyebrow text-cyan">{eyebrow}</p>
          <h1 className="display-lg mt-4 text-balance text-glow">{title}</h1>
          {lead && (
            <p className="mt-5 max-w-xl text-base leading-relaxed text-on-dark-muted sm:text-lg">
              {lead}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>

        {image && (
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div
              aria-hidden
              className="anim-aurora absolute inset-6 rounded-full bg-[radial-gradient(circle,oklch(0.72_0.15_210/30%),transparent_65%)] blur-3xl"
            />
            <div
              aria-hidden
              className="anim-orbit-slow absolute inset-[6%] rounded-full border border-cyan/20"
            />
            <img
              src={image}
              alt={imageAlt ?? ""}
              className="anim-holo-float relative aspect-square w-full object-contain [mask-image:radial-gradient(closest-side,black_58%,transparent_94%)] [-webkit-mask-image:radial-gradient(closest-side,black_58%,transparent_94%)]"
            />
          </div>
        )}
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent"
      />
    </section>
  );
}
