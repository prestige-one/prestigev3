"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const hide = () => {
      setFading(true);
      window.setTimeout(() => setVisible(false), 500);
    };

    const minDelay = new Promise((resolve) => window.setTimeout(resolve, 2500));
    const pageReady = new Promise((resolve) => {
      if (document.readyState === "complete") {
        resolve(true);
      } else {
        window.addEventListener("load", () => resolve(true), { once: true });
      }
    });

    Promise.all([minDelay, pageReady]).then(hide);
  }, []);

  if (!visible) return null;

  return (
    <div
      id="preloader"
      style={{
        opacity: fading ? 0 : 1,
        transition: "opacity 0.5s ease",
        pointerEvents: fading ? "none" : "auto",
      }}
    >
      <Image
        src="/assets/images/v2/pages/PRESTIGE_ONE_Logo-only.gif"
        alt="Prestige One"
        width={120}
        height={120}
        unoptimized
        priority
      />
    </div>
  );
}
