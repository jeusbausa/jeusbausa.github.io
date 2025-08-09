"use client";
import Link from "next/link";
type Repo = {
  name: string;
  description?: string;
  language?: string;
  stars?: number;
  url: string;
  updated_at?: string;
};

export default function ProjectCard({ repo }: { repo: Repo }) {
  return (
    <article className="card p-5 reveal">
      <div className="flex items-center justify-between gap-3">
        <h3 className="font-semibold">{repo.name}</h3>
        <Link href={repo.url} target="_blank" className="text-sm link">
          View ↗
        </Link>
      </div>
      {repo.description && (
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
          {repo.description}
        </p>
      )}
      <div className="mt-3 text-xs text-slate-500 dark:text-slate-400">
        {repo.language && <span className="mr-3">{repo.language}</span>}
        {typeof repo.stars === "number" && <span>★ {repo.stars}</span>}
        {repo.updated_at && (
          <span className="ml-3 italic">
            Last Commit: {new Date(repo.updated_at).toUTCString().slice(0, 16)}
          </span>
        )}
      </div>
    </article>
  );
}
