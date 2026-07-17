import Hero from "../components/hero";
import About from "../components/about";
import Experience from "../components/experience";
import Projects from "../components/projects";
import GithubContributions from "../components/github-contributions";
import Contact from "../components/contact";
import { getGithubContributions } from "../lib/github-contributions";

export default async function HomePage() {
  const githubContributions = await getGithubContributions().catch(() => null);

  return (
    <div>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <GithubContributions data={githubContributions} />
      <Contact />
    </div>
  );
}
