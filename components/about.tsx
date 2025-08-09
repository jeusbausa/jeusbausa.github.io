"use client";
import { about, techStack } from "../lib/data";
import Modal from "./modal";
import { useState } from "react";

export default function About() {
  const [open, setOpen] = useState(false);
  return (
    <section id="about" className="py-14 md:py-20">
      <div className="grid gap-10 items-center">
        <div>
          <h2 className="text-4xl font-extrabold tracking-tight">About Me</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
            {about.body}
          </p>
          <p className="mt-6 font-semibold">
            These are the technologies I currently use
          </p>
          <div className="mt-3 flex flex-wrap gap-3">
            {about.stackTeaser.map((s) => (
              <span
                key={s}
                className="text-xs px-3 py-1 rounded-full bg-brand-100 text-brand-700 dark:bg-brand-900/30 dark:text-brand-200 ring-1 ring-brand-500/10"
              >
                {s}
              </span>
            ))}
          </div>
          <button
            onClick={() => setOpen(true)}
            className="mt-5 inline-flex items-center gap-1 text-sm link"
          >
            See my full tech stack ↗
          </button>
        </div>
      </div>

      <Modal
        title="Full Tech Arsenals"
        open={open}
        onClose={() => setOpen(false)}
      >
        <div className="grid gap-6">
          {techStack.map((cat) => (
            <div key={cat.title}>
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">{cat.title}</h4>
                <div className="flex-1 border-t border-white/10 ml-3" />
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
                {cat.items.map((it) => (
                  <li
                    key={it}
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/50 ring-1 ring-white/10"
                  >
                    <span className="w-2 h-2 rounded-full bg-brand-400" />
                    <span>{it}</span>
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
