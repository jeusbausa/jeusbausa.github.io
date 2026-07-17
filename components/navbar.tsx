"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ThemeToggle from "./theme-toggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#github", label: "GitHub" },
  { href: "#contact", label: "Contact" },
];

export default function NavBar() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".nav-item", {
        y: -10,
        opacity: 0,
        stagger: 0.08,
        duration: 0.4,
        ease: "power2.out",
        delay: 0.1,
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <header
      ref={ref}
      className="sticky top-0 z-50 border-b border-[rgb(var(--line))] bg-[rgb(var(--bg)/0.88)] backdrop-blur-xl"
    >
      <div className="container-max flex h-16 items-center justify-between gap-5">
        <a
          href="#"
          className="nav-item font-mono-ui text-xs font-semibold uppercase tracking-[0.18em]"
        >
          Jeus Bausa
          <span className="text-[rgb(var(--muted))]"> / JE</span>
        </a>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-5 md:flex"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-item font-mono-ui text-[10px] uppercase tracking-[0.13em] text-[rgb(var(--muted))] transition-colors hover:text-[rgb(var(--fg))]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-item flex items-center">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
