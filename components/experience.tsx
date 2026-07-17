"use client";

import { experiences } from "../lib/data";
import useReveal from "./use-reveal";

export default function Experience() {
  const scope = useReveal();

  return (
    <section ref={scope} id="experience" className="section-shell">
      <div className="grid gap-8 md:grid-cols-[13rem_1fr] md:gap-16">
        <div>
          <p className="section-kicker reveal">02 — Experience</p>
        </div>
        <h2 className="section-heading reveal">Places I&apos;ve worked.</h2>
      </div>

      <div className="mt-12 border-b border-[rgb(var(--line))] md:ml-[17rem]">
        {experiences.map((experience) => (
          <article
            key={`${experience.company}-${experience.role}`}
            className="reveal grid gap-5 border-t border-[rgb(var(--line))] py-7 sm:grid-cols-[3.5rem_1fr_auto] sm:gap-6"
          >
            <div className="h-14 w-14 overflow-hidden border border-[rgb(var(--line))] bg-white p-1">
              <img
                src={experience.logo || "/logo.svg"}
                alt=""
                className="h-full w-full object-cover grayscale"
              />
            </div>
            <div className="min-w-0">
              <h3 className="text-lg font-semibold tracking-tight">
                {experience.role}
              </h3>
              <p className="mt-1 text-sm text-[rgb(var(--muted))]">
                {experience.company}
              </p>
              <ul className="mt-5 grid gap-2">
                {experience.summary.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm leading-6 text-[rgb(var(--muted))] before:mt-[0.65rem] before:h-px before:w-3 before:shrink-0 before:bg-[rgb(var(--fg))]"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <p className="font-mono-ui text-[10px] uppercase tracking-[0.09em] text-[rgb(var(--muted))] sm:text-right">
              {experience.dates}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
