"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const DOT_SPACING = 22;
const SCROLL_SPEED = 0.25;

export default function PageBackdrop() {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;

    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.set(layer, { y: 0, force3D: true });
      const setY = gsap.quickSetter(layer, "y", "px");
      const update = () => {
        // A single extra tile covers the viewport at every offset.
        setY(-((Math.max(0, window.scrollY) * SCROLL_SPEED) % DOT_SPACING));
      };
      update();
      window.addEventListener("scroll", update, { passive: true });
      return () => window.removeEventListener("scroll", update);
    });
    return () => media.revert();
  }, []);

  return (
    <div
      ref={layerRef}
      aria-hidden="true"
      className="page-backdrop pointer-events-none fixed inset-0 -z-10"
      style={{ bottom: -DOT_SPACING, backgroundSize: `${DOT_SPACING}px ${DOT_SPACING}px` }}
    />
  );
}
