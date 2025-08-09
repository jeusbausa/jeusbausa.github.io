"use client";

import Hero from "../components/hero";
import About from "../components/about";
import Experience from "../components/experience";
import Projects from "../components/projects";
import Contact from "../components/contact";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
