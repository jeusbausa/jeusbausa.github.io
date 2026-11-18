"use client";
import { useEffect, useRef } from "react";

export default function useReveal() {
  const scope = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!scope.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Leave content already painted at the current scroll position visible.
    const pending = Array.from(scope.current.querySelectorAll<HTMLElement>(".reveal"))
      .filter((element) => element.getBoundingClientRect().top >= document.documentElement.clientHeight);
    if (!pending.length) return;

    const observer = new IntersectionObserver((entries) => {
      for (const { target, isIntersecting } of entries) {
        if (isIntersecting) {
          target.setAttribute("data-reveal", "visible");
          observer.unobserve(target);
        }
      }
    });

    for (const element of pending) {
      element.dataset.reveal = "pending";
      observer.observe(element);
    }
    return () => {
      observer.disconnect();
      for (const element of pending) delete element.dataset.reveal;
    };
  }, []);

  return scope;
}
