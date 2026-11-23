"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HeroPortrait() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const viewport = viewportRef.current;
    const layer = layerRef.current;
    if (!viewport || !layer) return;

    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(layer, {
        // The extra 12% above the frame covers the full travel of the photo.
        y: () => viewport.clientHeight * 0.12,
        ease: "none",
        scrollTrigger: {
          trigger: viewport,
          start: "clamp(top bottom)",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
    });
    return () => media.revert();
  }, []);

  return (
    <div ref={viewportRef} className="relative h-full overflow-hidden">
      <div ref={layerRef} className="absolute inset-0 motion-safe:-top-[12%]">
        <Image
          src="/images/profile.png"
          alt="Portrait of Jeus Bausa"
          fill
          priority
          sizes="(min-width: 392px) 352px, 100vw"
          className="object-cover grayscale contrast-125"
        />
      </div>
    </div>
  );
}
