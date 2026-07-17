"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowDownRight, Github, Linkedin, Mail } from "lucide-react";
import { hero } from "../lib/data";

export default function Hero() {
  const scope = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scope.current) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      if (prefersReduced) return;

      const timeline = gsap.timeline();
      timeline
        .from(".hero-greet", {
          y: 10,
          opacity: 0,
          duration: 0.4,
          ease: "power2.out",
        })
        .from(
          ".hero-title-line",
          {
            y: 24,
            opacity: 0,
            duration: 0.55,
            stagger: 0.09,
            ease: "power3.out",
          },
          "-=.1",
        )
        .from(".hero-meta", { y: 14, opacity: 0, duration: 0.45, stagger: 0.08 }, "-=.2")
        .from(".hero-cta", { y: 10, opacity: 0, duration: 0.35 }, "-=.2")
        .from(".hero-icons", { y: 8, opacity: 0, duration: 0.3, stagger: 0.05 }, "-=.2");
    }, scope);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={scope}
      className="grid min-h-[calc(100svh-4rem)] items-center gap-14 py-16 md:grid-cols-[1.3fr_0.7fr] md:py-24"
    >
      <div>
        <p className="hero-greet section-kicker mb-7 flex items-center gap-3">
          <span className="inline-block h-2 w-2 rounded-full bg-[rgb(var(--accent))] ring-1 ring-[rgb(var(--fg))]" />
          Software engineer / Philippines
        </p>

        <h1 className="text-[clamp(4.25rem,11vw,8.7rem)] font-semibold leading-[0.76] tracking-[-0.075em]">
          <span className="hero-title-line block">JEUS</span>
          <span className="hero-title-line ml-[0.35em] block italic">BAUSA.</span>
        </h1>

        <div className="hero-meta mt-10 grid max-w-xl gap-3 border-l border-[rgb(var(--line))] pl-5 sm:grid-cols-[9rem_1fr]">
          <p className="section-kicker">About me</p>
          <div>
            <p className="text-lg leading-snug">{hero.role} building reliable, useful products for the web.</p>
            <p className="mt-2 text-sm text-[rgb(var(--muted))]">{hero.aboutShort}</p>
          </div>
        </div>

        <div className="hero-cta mt-8 flex flex-wrap items-center gap-3">
          <a className="btn btn-primary" href={`mailto:${hero.contacts.email}`}>
            Get in touch <Mail size={14} />
          </a>
          <a className="btn" href="#about">
            Explore work <ArrowDownRight size={14} />
          </a>
        </div>

        <div className="hero-icons mt-7 flex items-center gap-5 text-[rgb(var(--muted))]">
          <a
            href={hero.contacts.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-[rgb(var(--fg))]"
          >
            <Github size={18} />
          </a>
          <a
            href={hero.contacts.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-[rgb(var(--fg))]"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>

      <div className="hero-meta relative mx-auto w-full max-w-[22rem] md:mr-0">
        <div className="absolute -left-5 -top-5 h-full w-full border border-[rgb(var(--line))]" aria-hidden="true" />
        <div className="relative aspect-[4/5] overflow-hidden border border-[rgb(var(--fg))] bg-[rgb(var(--surface))] p-3">
          <img
            src="/images/profile.png"
            alt="Portrait of Jeus Bausa"
            className="h-full w-full object-cover grayscale contrast-125"
          />
          <div
            className="pointer-events-none absolute inset-3 bg-[radial-gradient(circle,transparent_45%,rgb(var(--bg)/0.12)_46%)] bg-[length:4px_4px] mix-blend-multiply dark:mix-blend-screen"
            aria-hidden="true"
          />
        </div>
        <p className="font-mono-ui mt-3 text-right text-[10px] uppercase tracking-[0.14em] text-[rgb(var(--muted))]">
          Open to meaningful collaborations
        </p>
      </div>
    </section>
  );
}
