"use client";
import { experiences } from "../lib/data";
import { ArrowRight } from "lucide-react";
import useReveal from "./use-reveal";

export default function Experience() {
  const scope = useReveal();
  return (
    <section ref={scope as any} id="experience" className="py-14 md:py-20">
      <h2 className="text-4xl font-extrabold tracking-tight text-center reveal">Places I&apos;ve worked?</h2>
      <div className="mt-10 grid gap-6 max-w-3xl mx-auto">
        {experiences.map((e, i) => (
          <div key={i} className="grid grid-cols-[80px,1fr] gap-6 items-start reveal">
            <div className="w-20 h-20 rounded-xl overflow-hidden border border-brand-700/30">
              <img src={e.logo || '/logo.svg'} alt={e.company} className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="text-brand-700 dark:text-brand-300 font-semibold">{e.role}</h3>
              <p className="font-bold">{e.company}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">{e.dates}</p>
              <div className="mt-3 flex gap-2 text-brand-600 dark:text-brand-300">
                <ArrowRight className="w-5 h-5" />
                <p className="text-slate-700 dark:text-slate-300">{e.summary}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
