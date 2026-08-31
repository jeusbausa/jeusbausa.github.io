"use client";

import useReveal from "./use-reveal";

export default function Contact() {
  const scope = useReveal();

  return (
    <section ref={scope} id="contact" className="section-shell">
      <p className="section-kicker reveal">05 — Contact</p>
      <div className="mt-8 grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
        <h2 className="section-heading reveal">Let&apos;s make something useful.</h2>
        <div className="reveal">
          <p className="text-sm leading-7 text-[rgb(var(--muted))]">
            Looking to collaborate, discuss a project, or explore new opportunities? Reach out—I’d love to connect.
          </p>
          <a className="btn btn-primary mt-6" href="mailto:jeusdbausa@gmail.com">
            jeusdbausa@gmail.com ↗
          </a>
        </div>
      </div>
    </section>
  );
}
