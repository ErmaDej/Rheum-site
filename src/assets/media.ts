/**
 * Semantic map of the imagery the clinic supplied.
 *
 * The files in `sampleAssets/` are the originals uploaded by the owner. They are
 * imported through Vite so the build fingerprints them and guarantees the paths
 * exist. Names here describe *what the picture is*, so components never depend on
 * the raw file names.
 */
import logo from "./sampleAssets/Rheum1.jpg";
import hologramFigure from "./sampleAssets/rh2.jpeg";
import xrayFigure from "./sampleAssets/rh1.jpeg";
import clinicEntrance from "./sampleAssets/rh14.jpg";
import clinicSign from "./sampleAssets/rh4.jpg";
import teamPoster from "./sampleAssets/rh12.jpg";
import receptionDesk from "./sampleAssets/rh13.jpg";
import waitingArea from "./sampleAssets/rh15.jpg";

export const media = {
  /** Square clinic mark. */
  logo,
  /** Dark, backlit skeletal figure — the hero "model". */
  hologramFigure,
  /** Blue translucent full-body x-ray — used on light surfaces. */
  xrayFigure,
  /** Gate and facade of the clinic. */
  clinicEntrance,
  /** Bilingual clinic sign with phone numbers. */
  clinicSign,
  /** Clinic team poster — the clinicians in white coats. */
  teamPoster,
  /** Reception desk with the Rheum logo behind it. */
  receptionDesk,
  /** Bright waiting area. */
  waitingArea,
} as const;

export type MediaKey = keyof typeof media;
