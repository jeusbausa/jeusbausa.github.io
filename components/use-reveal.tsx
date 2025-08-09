"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function useReveal(
  selector = ".reveal",
  options: gsap.TweenVars = {}
) {
  const scope = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (!scope.current) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const ctx = gsap.context(() => {
      if (prefersReduced) return;
      gsap.utils.toArray<HTMLElement>(selector).forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            delay: i * 0.05,
            scrollTrigger: { trigger: el, start: "top 85%" },
            ...options,
          }
        );
      });
    }, scope);
    return () => ctx.revert();
  }, [selector]);
  return scope;
}
