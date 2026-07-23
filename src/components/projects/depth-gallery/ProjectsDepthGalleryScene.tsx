"use client";

import { useEffect, useRef } from "react";
import { Engine } from "@/components/projects/depth-gallery/engine/Engine";

type ProjectsDepthGallerySceneProps = {
  onLoadProgress?: (progress: number) => void;
  onLoadComplete?: () => void;
  onLoadError?: (message: string) => void;
};

export default function ProjectsDepthGalleryScene({
  onLoadProgress,
  onLoadComplete,
  onLoadError,
}: ProjectsDepthGallerySceneProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const labelContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let disposed = false;
    const engine = new Engine(canvas, {
      labelContainer: labelContainerRef.current,
      scrollTarget: stageRef.current || canvas,
      onProgress: (progress: number) => onLoadProgress?.(progress),
    });

    engine
      .init()
      .then(() => {
        if (!disposed) onLoadComplete?.();
      })
      .catch((error: unknown) => {
        console.error("Depth gallery failed to initialize", error);
        if (!disposed) onLoadError?.(error instanceof Error ? error.message : "Unknown error");
      });

    return () => {
      disposed = true;
      engine.dispose();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={stageRef} className="po-depth-gallery-stage">
      <canvas ref={canvasRef} className="po-depth-gallery-canvas" />
      <div ref={labelContainerRef} className="po-depth-gallery-label-layer" />
    </div>
  );
}
