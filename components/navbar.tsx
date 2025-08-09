"use client";
import ThemeToggle from "./theme-toggle";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Work Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function NavBar() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".nav-item", { y: -10, opacity: 0, stagger: 0.08, duration: .4, ease: "power2.out", delay: .1 });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <header ref={ref} className="sticky top-0 z-50 border-b border-slate-200/60 dark:border-slate-800/80 backdrop-blur bg-white/70 dark:bg-slate-950/50">
      <div className="container-max flex items-center justify-between h-16">
        <a href="#" className="font-semibold tracking-tight text-lg nav-item">J<span className="text-brand-600">B</span></a>
        <nav className="hidden md:flex gap-6 text-sm">
          {links.map(l => <a key={l.href} href={l.href} className="hover:text-brand-700 dark:hover:text-brand-300 transition-colors text-slate-600 dark:text-slate-300 nav-item">{l.label}</a>)}
        </nav>
        <div className="flex items-center gap-2 nav-item">
          <a href="#contact" className="btn btn-primary hidden sm:inline-flex">Get in Touch</a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
