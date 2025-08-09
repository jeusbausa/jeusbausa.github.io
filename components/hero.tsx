"use client";
import { hero } from "../lib/data";
import { Github, Linkedin } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

export default function Hero() {
  const scope = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!scope.current) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const ctx = gsap.context(() => {
      if (prefersReduced) return;
      const tl = gsap.timeline();
      tl.from(".hero-greet", {
        y: 10,
        opacity: 0,
        duration: 0.4,
        ease: "power2.out",
      })
        .from(
          ".hero-title-line",
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=.1"
        )
        .from(
          ".hero-meta",
          { y: 12, opacity: 0, duration: 0.4, stagger: 0.06 },
          "-=.2"
        )
        .from(".hero-cta", { y: 10, opacity: 0, duration: 0.35 }, "-=.2")
        .from(
          ".hero-icons>*",
          { y: 8, opacity: 0, duration: 0.3, stagger: 0.05 },
          "-=.2"
        );
    }, scope);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={scope}
      className="py-10 md:py-16 flex flex-col md:flex-row items-start md:items-center gap-10"
    >
      <div className="flex-1">
        <p className="font-semibold hero-greet text-brand-600 dark:text-brand-400">
          Hello World!, I&apos;m
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold leading-none mt-2">
          <span className="hero-title-line block">JEUS D.</span>
          <span className="hero-title-line block text-brand-600 dark:text-brand-400">
            BAUSA
          </span>
        </h1>
        <p className="mt-3 text-slate-500 dark:text-slate-400 hero-meta">
          {hero.aboutShort}
        </p>
        <p className="mt-2 font-semibold hero-meta">{hero.role}</p>
        <div className="mt-5 flex items-center gap-3 hero-cta">
          <a className="btn btn-primary" href="#contact">
            Get in Touch!
          </a>
        </div>
        <div className="mt-4 flex items-center gap-3 text-slate-600 dark:text-slate-300 hero-icons">
          <a
            href={hero.contacts.github}
            target="_blank"
            aria-label="GitHub"
            className="btn"
          >
            <Github size={18} />
          </a>
          <a
            href={hero.contacts.linkedin}
            target="_blank"
            aria-label="LinkedIn"
            className="btn"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
      <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border border-slate-200 dark:border-slate-700/50">
        <Image
          src="https://avatars.githubusercontent.com/u/47097646"
          alt="Jeus Bausa"
          width={224}
          height={224}
          className="w-full h-full object-cover grayscale"
        />
      </div>
    </section>
  );
}
