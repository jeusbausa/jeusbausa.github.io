"use client";

import { useEffect, useState } from "react";
import ProjectCard from "./project-card";
import useReveal from "./use-reveal";

type Repo = {
  name: string;
  description?: string;
  language?: string;
  stars?: number;
  url: string;
  updated_at?: string;
};

const PER_PAGE = 5;

export default function Projects() {
  const scope = useReveal();
  const [repos, setRepos] = useState<Repo[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      setLoading(true);
      setError(null);

      try {
        const query = new URLSearchParams({
          page: String(page),
          per_page: String(PER_PAGE),
        });
        const response = await fetch(
          `https://octokit-repos-jeusbausa.up.railway.app/repos?${query}`,
          { signal: controller.signal }
        );

        if (!response.ok) throw new Error("Repository request failed");
        setRepos(await response.json());
      } catch (requestError) {
        if ((requestError as Error).name !== "AbortError") {
          setError("Failed to load repositories :(");
          setRepos([]);
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    load();
    return () => controller.abort();
  }, [page]);

  return (
    <section ref={scope} id="projects" className="section-shell">
      <div className="grid gap-8 md:grid-cols-[13rem_1fr] md:gap-16">
        <div>
          <p className="section-kicker reveal">03 — Projects</p>
        </div>
        <h2 className="section-heading reveal">
          Some projects I&apos;ve worked on.
        </h2>
      </div>

      {error && (
        <div className="font-mono-ui mt-8 border border-red-500/40 p-4 text-xs text-red-700 dark:text-red-300 md:ml-[17rem]">
          {error}
        </div>
      )}

      <div className="mt-12 border-b border-[rgb(var(--line))] md:ml-[17rem]">
        {loading
          ? Array.from({ length: PER_PAGE }).map((_, index) => (
              <div
                key={index}
                className="animate-pulse border-t border-[rgb(var(--line))] py-7"
              >
                <div className="mb-3 h-4 w-1/3 bg-[rgb(var(--line))]" />
                <div className="mb-2 flex gap-2">
                  <div className="h-3 w-16 bg-[rgb(var(--line))]" />
                  <div className="h-3 w-32 bg-[rgb(var(--line))]" />
                </div>
                <div className="h-3 w-3/4 bg-[rgb(var(--line))]" />
              </div>
            ))
          : repos.map((repo) => <ProjectCard key={repo.name} repo={repo} />)}
      </div>

      <div className="reveal mt-7 flex flex-wrap items-center gap-3 md:ml-[17rem]">
        <button
          type="button"
          onClick={() => setPage((current) => Math.max(1, current - 1))}
          disabled={page === 1 || loading}
          className="btn"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={() => setPage((current) => current + 1)}
          disabled={loading || repos.length < PER_PAGE}
          className="btn btn-primary"
        >
          Next
        </button>
        <span className="section-kicker ml-2">
          Page {String(page).padStart(2, "0")}
        </span>
      </div>
    </section>
  );
}
