"use client";

import { useState } from "react";
import { about, techStack } from "../lib/data";
import Modal from "./modal";

export default function About() {
  const [open, setOpen] = useState(false);

  return (
    <section id="about" className="section-shell">
      <div className="grid gap-10 md:grid-cols-[13rem_1fr] md:gap-16">
        <div>
          <p className="section-kicker">01 — About</p>
          <p className="font-mono-ui mt-3 text-xs text-[rgb(var(--muted))]">
            A little context
          </p>
        </div>

        <div className="max-w-2xl">
          <h2 className="section-heading">
            Solving with intent, shipping with care.
          </h2>
          <p className="mt-8 max-w-xl text-base leading-7 text-[rgb(var(--muted))] md:text-lg">
            {about.body}
          </p>

          <p className="section-kicker mt-10">
            Technologies I currently use
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {about.stackTeaser.map((technology) => (
              <span
                key={technology}
                className="font-mono-ui border border-[rgb(var(--line))] bg-[rgb(var(--surface))] px-3 py-2 text-[11px] uppercase tracking-[0.08em]"
              >
                {technology}
              </span>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="link font-mono-ui mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.1em]"
          >
            See my full tech stack ↗
          </button>
        </div>
      </div>

      <Modal
        title="Full Tech Arsenal"
        open={open}
        onClose={() => setOpen(false)}
      >
        <div className="grid gap-6">
          {techStack.map((category) => (
            <div key={category.title}>
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">{category.title}</h4>
                <div className="ml-3 flex-1 border-t border-[rgb(var(--line))]" />
              </div>
              <ul className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-3">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 border border-[rgb(var(--line))] bg-[rgb(var(--bg))] p-3"
                  >
                    <span className="h-2 w-2 rounded-full bg-[rgb(var(--accent))] ring-1 ring-[rgb(var(--fg))]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Modal>
    </section>
  );
}
