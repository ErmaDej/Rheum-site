import { Canvas } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import { Component, useEffect, useState, type ErrorInfo, type ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * The canvas is only mounted after hydration. WebGL contexts cannot be created
 * during SSR, and this also keeps the 3D bundle out of the first paint.
 */
export function useClientMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}

/** True when the user asked for reduced motion, or the device is mid-range. */
export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(query.matches);
    const onChange = (event: MediaQueryListEvent) => setReduced(event.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

type BoundaryState = { failed: boolean };

/** If WebGL is unavailable the canvas throws — show the image fallback instead. */
class WebGLBoundary extends Component<{ fallback: ReactNode; children: ReactNode }, BoundaryState> {
  override state: BoundaryState = { failed: false };

  static getDerivedStateFromError(): BoundaryState {
    return { failed: true };
  }

  override componentDidCatch(error: Error, info: ErrorInfo) {
    // Swallow: this is a progressive-enhancement layer, not core content.
    if (import.meta.env.DEV)
      console.warn("[3d] stage disabled:", error.message, info.componentStack);
  }

  override render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}

export function Stage3D({
  children,
  fallback,
  className,
  cameraPosition = [0, 0.4, 4.2],
  fov = 42,
  sparkles = true,
}: {
  children: ReactNode;
  fallback: ReactNode;
  className?: string;
  cameraPosition?: [number, number, number];
  fov?: number;
  sparkles?: boolean;
}) {
  const mounted = useClientMounted();
  const reduced = usePrefersReducedMotion();

  if (!mounted) {
    return <div className={cn("h-full w-full", className)}>{fallback}</div>;
  }

  return (
    <WebGLBoundary fallback={<div className={cn("h-full w-full", className)}>{fallback}</div>}>
      <Canvas
        className={cn("h-full w-full", className)}
        dpr={[1, 1.75]}
        camera={{ position: cameraPosition, fov }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ touchAction: "pan-y" }}
      >
        {/* Cool clinical key + cyan rim lights give the models the hologram look. */}
        <ambientLight intensity={0.55} />
        <hemisphereLight args={["#a5f3fc", "#0b1f33", 0.6]} />
        <directionalLight position={[3.5, 6, 4]} intensity={2.1} color="#dff6ff" />
        <directionalLight position={[-4, 2, -3]} intensity={1.1} color="#38bdf8" />
        <pointLight
          position={[-2.5, 1.5, 2.5]}
          intensity={14}
          distance={12}
          decay={2}
          color="#22d3ee"
        />
        <pointLight
          position={[2.5, -2, -2]}
          intensity={10}
          distance={14}
          decay={2}
          color="#6366f1"
        />
        {sparkles && !reduced && (
          <Sparkles
            count={38}
            scale={[3.4, 4.4, 3.4]}
            size={2.4}
            speed={0.35}
            opacity={0.75}
            color="#a5f3fc"
          />
        )}
        {children}
      </Canvas>
    </WebGLBoundary>
  );
}
