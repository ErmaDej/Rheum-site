import { useEffect, useRef } from "react";

import { media } from "@/assets/media";
import { cn } from "@/lib/utils";

/**
 * The hero "model".
 *
 * No glb/obj asset was supplied, so the figure is built as a stack of depth
 * layers around the client's backlit anatomy render: aura, bloom, the model
 * itself, a scanning band, two orbit rings and drifting motes. A pointer-driven
 * rotateX/rotateY on the stack reads as a turning 3D object, and all of it is
 * transform/opacity only so phones keep 60fps.
 */
export function HoloFigure({
  className,
  alt,
  trophy = false,
}: {
  className?: string;
  alt: string;
  /** Slightly stronger presence for the entry screen. */
  trophy?: boolean;
}) {
  const stageRef = useRef<HTMLDivElement>(null);
  const modelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const model = modelRef.current;
    if (!stage || !model) return;
    // Pointer parallax only where it is meaningful and welcome.
    if (!window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)").matches) {
      return;
    }
    let raf = 0;
    const onMove = (event: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = stage.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        model.style.transform = `perspective(1100px) rotateY(${x * 14}deg) rotateX(${-y * 9}deg) translate3d(${x * 18}px, ${y * 12}px, 0)`;
      });
    };
    const reset = () => {
      model.style.transform = "";
    };
    stage.addEventListener("pointermove", onMove);
    stage.addEventListener("pointerleave", reset);
    return () => {
      stage.removeEventListener("pointermove", onMove);
      stage.removeEventListener("pointerleave", reset);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={stageRef}
      className={cn("relative isolate aspect-square w-full", className)}
      aria-hidden="false"
    >
      {/* atmosphere */}
      <div className="anim-aurora pointer-events-none absolute inset-[-12%] -z-10 rounded-full bg-[radial-gradient(circle_at_50%_45%,oklch(0.75_0.15_210/28%),transparent_62%)] blur-2xl" />
      <div className="pointer-events-none absolute inset-[-4%] -z-10 rounded-full bg-[radial-gradient(circle_at_50%_60%,oklch(0.6_0.14_250/22%),transparent_68%)]" />

      {/* orbit rings */}
      <div className="pointer-events-none absolute inset-[6%] -z-10">
        <div className="anim-orbit-slow absolute inset-0 rounded-full border border-cyan/25" />
        <div className="anim-orbit-slow absolute inset-0 rounded-full border-t-2 border-cyan/60" />
      </div>
      <div className="pointer-events-none absolute inset-[16%] -z-10">
        <div className="anim-orbit-rev absolute inset-0 rounded-full border border-cyan/15" />
        <div className="anim-orbit-rev absolute inset-0 rounded-full border-b-2 border-cyan/40" />
      </div>

      {/* model stack */}
      <div
        ref={modelRef}
        className="relative h-full w-full transition-transform duration-300 ease-out will-change-transform"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* bloom pass: the same render, blurred and screened for glow */}
        <img
          src={media.hologramFigure}
          alt=""
          aria-hidden
          loading="lazy"
          decoding="async"
          className="anim-holo-breathe absolute inset-0 h-full w-full scale-[1.06] object-contain opacity-60 blur-2xl mix-blend-screen [mask-image:radial-gradient(closest-side,black_58%,transparent_92%)] [-webkit-mask-image:radial-gradient(closest-side,black_58%,transparent_92%)]"
        />
        {/* the model */}
        <img
          src={media.hologramFigure}
          alt={alt}
          loading={trophy ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={trophy ? "high" : "auto"}
          className={cn(
            "anim-holo-float relative h-full w-full object-contain mix-blend-screen",
            "[mask-image:radial-gradient(closest-side,black_60%,transparent_94%)] [-webkit-mask-image:radial-gradient(closest-side,black_60%,transparent_94%)]",
            trophy
              ? "drop-shadow-[0_0_60px_oklch(0.83_0.1_205/45%)]"
              : "drop-shadow-[0_0_38px_oklch(0.83_0.1_205/35%)]",
          )}
        />
        {/* scanning band */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="anim-scan h-1/3 w-full bg-[linear-gradient(to_bottom,transparent,oklch(0.83_0.1_205/16%),transparent)]" />
        </div>
        {/* horizon flare */}
        <div className="pointer-events-none absolute inset-x-[18%] bottom-[6%] h-8 rounded-[100%] bg-cyan/25 blur-xl" />
      </div>

      {/* motes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[
          [18, 22, 3, 0],
          [76, 30, 2, 1.2],
          [32, 74, 2.5, 2.1],
          [68, 82, 2, 0.6],
          [50, 12, 2, 2.8],
          [86, 58, 2.5, 1.7],
          [12, 54, 2, 3.4],
        ].map(([left, top, size, delay], i) => (
          <span
            key={i}
            className="anim-twinkle absolute rounded-full bg-cyan"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: `${size}px`,
              height: `${size}px`,
              animationDelay: `${delay}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
