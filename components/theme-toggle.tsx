"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { flushSync } from "react-dom";

type ViewTransition = {
  ready: Promise<void>;
  finished: Promise<void>;
};

type ViewTransitionDocument = Document & {
  startViewTransition?: (update: () => void) => ViewTransition;
};

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => setMounted(true), []);

  const current = theme === "system" ? systemTheme : theme;

  const toggleTheme = async (button: HTMLButtonElement) => {
    if (transitioning) return;

    const nextTheme = current === "dark" ? "light" : "dark";
    const viewTransitionDocument = document as ViewTransitionDocument;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!viewTransitionDocument.startViewTransition || prefersReducedMotion) {
      setTheme(nextTheme);
      return;
    }

    const { left, top, width, height } = button.getBoundingClientRect();
    const originX = left + width / 2;
    const originY = top + height / 2;
    const endRadius = Math.hypot(
      Math.max(originX, window.innerWidth - originX),
      Math.max(originY, window.innerHeight - originY)
    );

    setTransitioning(true);

    const transition = viewTransitionDocument.startViewTransition(() => {
      flushSync(() => setTheme(nextTheme));
    });

    try {
      await transition.ready;
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${originX}px ${originY}px)`,
            `circle(${endRadius}px at ${originX}px ${originY}px)`,
          ],
        },
        {
          duration: 750,
          easing: "cubic-bezier(0.76, 0, 0.24, 1)",
          pseudoElement: "::view-transition-new(root)",
        }
      );
      await transition.finished;
    } finally {
      setTransitioning(false);
    }
  };

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      aria-pressed={mounted ? current === "dark" : undefined}
      disabled={!mounted || transitioning}
      className="group flex h-9 w-9 items-center justify-center border border-[rgb(var(--line))] bg-[rgb(var(--surface))] transition-colors hover:bg-[rgb(var(--accent))] hover:text-[#141412] disabled:cursor-wait"
      onClick={(event) => toggleTheme(event.currentTarget)}
    >
      <span className="transition-transform duration-500 group-hover:rotate-12">
        {!mounted || current !== "dark" ? <Sun size={16} /> : <Moon size={16} />}
      </span>
    </button>
  );
}
