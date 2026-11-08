import { forwardRef } from "react";

/**
 * Layered vector anatomy figure (no 3D model was supplied).
 * Layers: atmosphere → silhouette → skeleton → connective lines → nerves (+ travelling light) → joints.
 * Stylised but anatomically sensible; front view.
 */
export const JOINTS = {
  shoulderL: [140, 162], shoulderR: [260, 162],
  elbowL: [118, 292], elbowR: [282, 292],
  wristL: [104, 398], wristR: [296, 398],
  handL: [99, 440], handR: [301, 440],
  hipL: [174, 414], hipR: [226, 414],
  kneeL: [174, 582], kneeR: [226, 582],
  ankleL: [178, 742], ankleR: [222, 742],
  footL: [170, 772], footR: [230, 772],
} as const;

const NERVES = [
  "M200 120 C 198 200, 202 300, 200 400",
  "M200 170 C 175 172, 150 190, 132 230 C 120 260, 116 320, 110 360 C 106 390, 102 420, 99 440",
  "M200 170 C 225 172, 250 190, 268 230 C 280 260, 284 320, 290 360 C 294 390, 298 420, 301 440",
  "M196 400 C 188 450, 176 500, 174 560 C 172 640, 178 700, 176 770",
  "M204 400 C 212 450, 224 500, 226 560 C 228 640, 222 700, 224 770",
  "M200 230 C 185 245, 170 250, 158 262",
  "M200 230 C 215 245, 230 250, 242 262",
  "M200 300 C 186 312, 172 318, 160 330",
  "M200 300 C 214 312, 228 318, 240 330",
];

const RIBS = [190, 210, 230, 250, 270];
const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  x: 40 + ((i * 97) % 320),
  y: 200 + ((i * 131) % 560),
  r: 0.8 + (i % 3) * 0.6,
  d: (i * 0.7) % 9,
}));

export const AnatomyScene = forwardRef<SVGSVGElement, { title: string }>(function AnatomyScene({ title }, ref) {
  const j = JOINTS;
  return (
    <svg ref={ref} viewBox="0 0 400 820" role="img" aria-label={title} className="h-full w-full overflow-visible">
      <defs>
        <radialGradient id="aura" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="var(--cyan)" stopOpacity="0.22" />
          <stop offset="60%" stopColor="var(--teal)" stopOpacity="0.08" />
          <stop offset="100%" stopColor="var(--midnight)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="skin" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--cyan)" stopOpacity="0.28" />
          <stop offset="55%" stopColor="var(--teal)" stopOpacity="0.16" />
          <stop offset="100%" stopColor="var(--deep)" stopOpacity="0.1" />
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="soft"><feGaussianBlur stdDeviation="10" /></filter>
      </defs>

      <ellipse cx="200" cy="400" rx="230" ry="420" fill="url(#aura)" />
      <ellipse cx="200" cy="800" rx="120" ry="14" fill="var(--cyan)" opacity="0.08" filter="url(#soft)" />

      {/* particles */}
      <g aria-hidden>
        {PARTICLES.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r={p.r} fill="var(--cyan)" className="anim-particle" style={{ animationDelay: `-${p.d}s` }} />
        ))}
      </g>

      <g className="anim-breathe">
        {/* silhouette */}
        <g fill="none" stroke="url(#skin)" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d={`M${j.shoulderL} L${j.elbowL} L${j.wristL} L${j.handL}`} strokeWidth="26" />
          <path d={`M${j.shoulderR} L${j.elbowR} L${j.wristR} L${j.handR}`} strokeWidth="26" />
          <path d={`M${j.hipL} L${j.kneeL} L${j.ankleL} L${j.footL}`} strokeWidth="36" />
          <path d={`M${j.hipR} L${j.kneeR} L${j.ankleR} L${j.footR}`} strokeWidth="36" />
          <path d="M200 112 L200 146" strokeWidth="24" />
        </g>
        <path
          aria-hidden
          d="M146 148 C 126 154, 128 205, 142 262 C 152 320, 156 366, 158 420 C 175 436, 225 436, 242 420 C 244 366, 248 320, 258 262 C 272 205, 274 154, 254 148 C 230 140, 170 140, 146 148 Z"
          fill="url(#skin)"
          stroke="var(--cyan)"
          strokeOpacity="0.35"
          strokeWidth="1"
        />
        <circle cx="200" cy="76" r="36" fill="url(#skin)" stroke="var(--cyan)" strokeOpacity="0.35" strokeWidth="1" />

        {/* skeleton */}
        <g fill="none" stroke="var(--on-dark)" strokeOpacity="0.55" strokeLinecap="round" aria-hidden>
          <path d="M200 116 L200 404" strokeWidth="2.2" strokeDasharray="5 3" />
          <path d="M150 158 C 175 150, 225 150, 250 158" strokeWidth="1.6" />
          {RIBS.map((y, i) => (
            <g key={y}>
              <path d={`M200 ${y} C ${180 - i * 2} ${y - 4}, ${160 - i} ${y + 4}, ${158 + i * 2} ${y + 16}`} strokeWidth="1" />
              <path d={`M200 ${y} C ${220 + i * 2} ${y - 4}, ${240 + i} ${y + 4}, ${242 - i * 2} ${y + 16}`} strokeWidth="1" />
            </g>
          ))}
          <path d="M168 396 C 180 420, 220 420, 232 396 C 236 410, 230 424, 226 414 M168 396 C 164 410, 170 424, 174 414" strokeWidth="1.4" />
          {(["L", "R"] as const).map((s) => (
            <g key={s} strokeWidth="1.5">
              <path d={`M${j[`shoulder${s}`]} L${j[`elbow${s}`]} L${j[`wrist${s}`]}`} />
              <path d={`M${j[`hip${s}`]} L${j[`knee${s}`]} L${j[`ankle${s}`]} L${j[`foot${s}`]}`} />
            </g>
          ))}
          <circle cx="200" cy="76" r="26" strokeWidth="1" strokeOpacity="0.3" />
        </g>

        {/* connective tissue lines */}
        <g fill="none" stroke="var(--cyan)" strokeOpacity="0.14" strokeWidth="0.7" aria-hidden>
          <path d={`M${j.shoulderL} C 170 260, 230 260, ${j.hipR}`} />
          <path d={`M${j.shoulderR} C 230 260, 170 260, ${j.hipL}`} />
          <path d={`M${j.hipL} C 160 500, 190 540, ${j.kneeR}`} />
          <path d={`M${j.hipR} C 240 500, 210 540, ${j.kneeL}`} />
        </g>

        {/* nerves + travelling light */}
        <g fill="none" stroke="var(--cyan)" strokeOpacity="0.5" strokeWidth="0.9" filter="url(#glow)" aria-hidden>
          {NERVES.map((d, i) => (
            <path key={i} id={`nerve-${i}`} d={d} />
          ))}
        </g>
        <g aria-hidden>
          {NERVES.slice(0, 5).map((_, i) => (
            <circle key={i} r="2.4" fill="var(--on-dark)" filter="url(#glow)">
              <animateMotion dur={`${6 + i * 1.3}s`} repeatCount="indefinite" begin={`${-i * 1.7}s`}>
                <mpath href={`#nerve-${i}`} />
              </animateMotion>
            </circle>
          ))}
        </g>

        {/* joints */}
        <g aria-hidden>
          {Object.entries(j).map(([k, [x, y]], i) => (
            <g key={k}>
              <circle cx={x} cy={y} r="12" fill="var(--cyan)" opacity="0.12" />
              <circle cx={x} cy={y} r="5" fill={k.startsWith("knee") || k.startsWith("hand") ? "var(--coral)" : "var(--cyan)"} className="anim-joint" style={{ animationDelay: `${i * 0.25}s` }} filter="url(#glow)" />
            </g>
          ))}
        </g>
      </g>
    </svg>
  );
});
