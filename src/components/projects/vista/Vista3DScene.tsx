"use client";

import { Application, Entity, Gltf } from "@playcanvas/react";
import { Camera, Light } from "@playcanvas/react/components";
import { useModel } from "@playcanvas/react/hooks";
import { OrbitControls } from "@playcanvas/react/scripts";
import { FILLMODE_FILL_WINDOW } from "playcanvas";
import { useEffect } from "react";

export const VISTA_GLB_URL = "/assets/images/v2/3d/vista.glb";

type Vista3DSceneProps = {
  onLoadProgress?: (progress: number) => void;
  onLoadComplete?: () => void;
  onLoadError?: (message: string) => void;
};

function VistaBuilding({ onLoadProgress, onLoadComplete, onLoadError }: Vista3DSceneProps) {
  const { asset, error, subscribe } = useModel(VISTA_GLB_URL);

  useEffect(() => {
    const unsubscribe = subscribe((meta) => {
      const progress = typeof meta.progress === "number" ? meta.progress : 0;
      onLoadProgress?.(progress);
      if (progress >= 1) {
        onLoadComplete?.();
      }
    });
    return unsubscribe;
  }, [subscribe, onLoadProgress, onLoadComplete]);

  useEffect(() => {
    if (error) {
      onLoadError?.(error);
    }
  }, [error, onLoadError]);

  if (!asset) {
    return null;
  }

  return (
    <Entity name="vista-building">
      <Gltf asset={asset} key={asset.id} />
    </Entity>
  );
}

export default function Vista3DScene({ onLoadProgress, onLoadComplete, onLoadError }: Vista3DSceneProps) {
  return (
    <Application
      fillMode={FILLMODE_FILL_WINDOW}
      className="po-vista-3d-canvas"
      style={{ width: "100%", height: "100%", touchAction: "none" }}
      graphicsDeviceOptions={{
        antialias: true,
        alpha: false,
        powerPreference: "high-performance",
      }}
    >
      <Entity name="key-light" rotation={[52, 38, 0]}>
        <Light type="directional" />
      </Entity>
      <Entity name="fill-light" rotation={[20, -120, 0]}>
        <Light type="directional" />
      </Entity>
      <Entity name="camera" position={[60, 40, 60]}>
        <Camera clearColor="#0c1018" fov={42} />
        <OrbitControls
          frameOnStart
          distanceMin={8}
          distanceMax={800}
          pitchAngleMin={8}
          pitchAngleMax={88}
          inertiaFactor={0.1}
          mouse={{ orbitSensitivity: 0.28, distanceSensitivity: 0.14 }}
          touch={{ orbitSensitivity: 0.32, distanceSensitivity: 0.18 }}
        />
      </Entity>
      <VistaBuilding
        onLoadProgress={onLoadProgress}
        onLoadComplete={onLoadComplete}
        onLoadError={onLoadError}
      />
    </Application>
  );
}
