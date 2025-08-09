"use client";
import useReveal from "./use-reveal";
export default function Contact() {
  const scope = useReveal();
  return (
    <section ref={scope as any} id="contact" className="py-14 md:py-24 text-center">
      <h2 className="text-4xl font-extrabold tracking-tight reveal">Let&apos;s talk...</h2>
      <p className="mt-4 max-w-2xl mx-auto text-slate-600 dark:text-slate-400 reveal">
        Anything about coding, work-related stuff, movies, music, video editing, photo editing, online games,
        feel free to message me on my social media accounts or send me an <a className="link" href="mailto:jeusbausa@gmail.com">email</a>.
      </p>
    </section>
  );
}
