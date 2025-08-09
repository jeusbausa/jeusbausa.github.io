"use client";
import { isEmpty } from "lodash";
import ProjectCard from "./project-card";
import useReveal from "./use-reveal";
import { useEffect, useState } from "react";

type Repo = {
  name: string;
  description?: string;
  language?: string;
  url: string;
  lastCommit?: string;
};

export default function Projects() {
  const scope = useReveal();

  const [repos, setRepos] = useState<Repo[]>([]);
  const [page, setPage] = useState(1);
  const [perPage] = useState(5);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const ac = new AbortController();
    async function load() {
      setError(null);
      const qs = new URLSearchParams({
        page: String(page),
        per_page: String(perPage),
      });
      const res = await fetch(
        `https://octokit-repos-jeusbausa.up.railway.app/repos?${qs}`,
        {
          signal: ac.signal,
        }
      );
      if (res.ok) {
        const data: Repo[] = await res.json();
        setRepos(data);
        return;
      }

      setError("Error loading repositories");
    }
    load();
    return () => ac.abort();
  }, [page, perPage]);

  const next = () => {
    setPage((p) => p + 1);
  };
  const prev = () => setPage((p) => Math.max(1, p - 1));

  return (
    <section ref={scope as any} id="projects" className="py-14 md:py-20">
      <h2 className="text-4xl font-extrabold tracking-tight text-center reveal">
        Some of my project contributions.
      </h2>

      {error && (
        <div className="mt-6 text-center font-mono text-xs text-red-600 dark:text-red-400">
          Failed to load repositories :(
        </div>
      )}

      <div className="mt-10 grid gap-4 max-w-2xl mx-auto">
        {isEmpty(repos)
          ? Array.from({ length: perPage }).map((_, i) => (
              <div
                key={i}
                className="card p-5 animate-pulse bg-slate-100/70 dark:bg-slate-800/30"
              >
                <div className="h-4 w-1/3 bg-slate-200 dark:bg-slate-700 rounded mb-3" />
                <div className="flex gap-2 mb-2">
                  <div className="h-3 w-16 bg-slate-200 dark:bg-slate-700 rounded" />
                  <div className="h-3 w-32 bg-slate-200 dark:bg-slate-700 rounded" />
                </div>
                <div className="h-3 w-3/4 bg-slate-200 dark:bg-slate-700 rounded" />
              </div>
            ))
          : repos.map((r) => <ProjectCard key={r.name} repo={r} />)}
      </div>

      <div className="mt-6 flex items-center justify-center gap-3 reveal">
        <button onClick={prev} disabled={page === 1} className="btn">
          Previous
        </button>
        <button onClick={next} className="btn btn-primary">
          Next
        </button>
        <span className="text-xs text-slate-500 dark:text-slate-400 ml-2">
          Page {page}
        </span>
      </div>
    </section>
  );
}
