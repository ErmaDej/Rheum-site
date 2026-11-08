import { Suspense, useEffect } from "react";
import { Bounds, Center, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Color, type Mesh, type MeshStandardMaterial } from "three";

import ecorcheUrl from "@/assets/sampleAssets/human_ecorche.glb?url";
import { media } from "@/assets/media";
import { cn } from "@/lib/utils";
import { Stage3D, usePrefersReducedMotion } from "./Stage3D";

/**
 * The supplied écorché is Z-up geometry exported from an OBJ, ~21 units tall.
 * `<Bounds>` measures it after load and frames the camera, so no hard-coded
 * scale is needed and the framing survives a model swap.
 */
function EcorcheModel() {
  const { scene } = useGLTF(ecorcheUrl);

  // The source material is neutral white; a faint cyan emissive ties the model
  // to the brand and reads as a hologram under the rim lights.
  useEffect(() => {
    const emissive = new Color("#0e7490");
    scene.traverse((object) => {
      const mesh = object as Mesh;
      if (!mesh.isMesh) return;
      const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
      for (const entry of materials) {
        const material = entry as MeshStandardMaterial;
        if (!material || !("emissive" in material)) continue;
        material.emissive = emissive;
        material.emissiveIntensity = 0.32;
        material.needsUpdate = true;
      }
    });
  }, [scene]);

  return (
    <Center>
      <primitive object={scene} />
    </Center>
  );
}

useGLTF.preload(ecorcheUrl);

export function EcorcheStage({ className, alt }: { className?: string; alt: string }) {
  const reduced = usePrefersReducedMotion();

  const imageFallback = (
    <div className={cn("relative flex h-full w-full items-center justify-center", className)}>
      <img
        src={media.hologramFigure}
        alt={alt}
        className="h-full w-full object-contain [mask-image:radial-gradient(closest-side,black_60%,transparent_94%)] [-webkit-mask-image:radial-gradient(closest-side,black_60%,transparent_94%)]"
      />
    </div>
  );

  return (
    <div className={cn("relative h-full w-full", className)}>
      <Stage3D fallback={imageFallback} cameraPosition={[0, 0.15, 3.2]} fov={34}>
        <Suspense fallback={null}>
          <Bounds fit clip observe margin={0.92}>
            <Float
              speed={reduced ? 0 : 1.1}
              rotationIntensity={reduced ? 0 : 0.12}
              floatIntensity={reduced ? 0 : 0.45}
            >
              <EcorcheModel />
            </Float>
          </Bounds>
        </Suspense>
        <OrbitControls
          makeDefault
          enablePan={false}
          enableZoom={false}
          autoRotate={!reduced}
          autoRotateSpeed={0.9}
          minPolarAngle={Math.PI / 2.6}
          maxPolarAngle={Math.PI / 1.7}
          rotateSpeed={0.55}
        />
      </Stage3D>

      {/* hologram finishing: scan band + floor glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="anim-scan h-1/4 w-full bg-[linear-gradient(to_bottom,transparent,oklch(0.83_0.1_205/10%),transparent)]" />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-[22%] bottom-[8%] h-10 rounded-[100%] bg-cyan/25 blur-2xl"
      />
    </div>
  );
}
