import { Suspense, useEffect } from "react";
import { Bounds, Center, OrbitControls, useAnimations, useGLTF } from "@react-three/drei";

import roomUrl from "@/assets/sampleAssets/lowpoly_medical_room.glb?url";
import { media } from "@/assets/media";
import { cn } from "@/lib/utils";
import { Stage3D, usePrefersReducedMotion } from "./Stage3D";

/**
 * The room ships a skinned rig with two clips. "Walk" gives the scene a quiet
 * sense of life; if the clip is missing the model simply stands still.
 */
function MedicalRoom({ playing }: { playing: boolean }) {
  const { scene, animations } = useGLTF(roomUrl);
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    const walk = actions["Armature|Walk"];
    if (!walk) return;
    if (playing) {
      walk.reset().fadeIn(0.4).play();
    } else {
      walk.fadeOut(0.3);
    }
    return () => {
      walk.fadeOut(0.3);
    };
  }, [actions, playing]);

  return (
    <Center>
      <primitive object={scene} />
    </Center>
  );
}

useGLTF.preload(roomUrl);

export function MedicalRoomStage({ className, alt }: { className?: string; alt: string }) {
  const reduced = usePrefersReducedMotion();

  const imageFallback = (
    <div className={cn("relative h-full w-full", className)}>
      <img src={media.waitingArea} alt={alt} className="h-full w-full rounded-2xl object-cover" />
    </div>
  );

  return (
    <div className={cn("relative h-full w-full", className)}>
      <Stage3D fallback={imageFallback} cameraPosition={[3.2, 2.4, 5.4]} fov={44} sparkles={false}>
        <Suspense fallback={null}>
          {/* Bounds measures the exported FBX rig and frames it whatever its axis order. */}
          <Bounds fit clip observe margin={1.18}>
            <MedicalRoom playing={!reduced} />
          </Bounds>
        </Suspense>
        <OrbitControls
          makeDefault
          enablePan={false}
          enableZoom={false}
          autoRotate={!reduced}
          autoRotateSpeed={0.55}
          minPolarAngle={Math.PI / 3.2}
          maxPolarAngle={Math.PI / 2.05}
          rotateSpeed={0.45}
        />
      </Stage3D>
    </div>
  );
}
