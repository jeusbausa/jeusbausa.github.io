"use client";

import { projectContributions } from "../lib/data";
import useReveal from "./use-reveal";

export default function Projects() {
  const scope = useReveal();

  return (
    <section ref={scope} id="projects" className="section-shell">
      <div className="grid gap-8 md:grid-cols-[13rem_1fr] md:gap-16">
        <div>
          <p className="section-kicker reveal">03 — Projects</p>
        </div>
        <div className="reveal">
          <h2 className="section-heading">Selected work.</h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[rgb(var(--muted))]">
            Products and platforms I&apos;ve helped build across lending,
            payments, digital wallets, Web3, vouchers, and mobile products.
          </p>
        </div>
      </div>

      <div className="card mt-12 overflow-hidden md:ml-[17rem]">
        {projectContributions.map((project) => (
          <a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="group reveal grid gap-5 border-b border-[rgb(var(--line))] px-5 py-7 transition-colors last:border-b-0 hover:bg-[rgb(var(--accent)/0.16)] sm:px-7 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.7fr)_auto] md:items-center md:gap-8"
          >
            <h3 className="text-lg font-medium tracking-tight">
              {project.name}
            </h3>
            <div>
              <p className="section-kicker">{project.category}</p>
              <p className="mt-2 max-w-xl text-sm leading-6 text-[rgb(var(--muted))]">
                {project.description}
              </p>
            </div>
            <span
              aria-hidden="true"
              className="font-mono-ui text-sm text-[rgb(var(--muted))] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[rgb(var(--fg))]"
            >
              ↗
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
