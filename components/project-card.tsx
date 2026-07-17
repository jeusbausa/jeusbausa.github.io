"use client";

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
    <article className="reveal border-t border-[rgb(var(--line))] py-7">
      <div className="grid gap-4 sm:grid-cols-[1fr_auto]">
        <div>
          <h3 className="text-xl font-semibold tracking-tight">{repo.name}</h3>
          {repo.description && (
            <p className="mt-3 max-w-xl text-sm leading-6 text-[rgb(var(--muted))]">
              {repo.description}
            </p>
          )}
        </div>

        <div className="font-mono-ui flex flex-wrap gap-3 text-[10px] uppercase tracking-[0.08em] text-[rgb(var(--muted))] sm:justify-end">
          {repo.language && <span>{repo.language}</span>}
          {typeof repo.stars === "number" && <span>★ {repo.stars}</span>}
          {repo.updated_at && (
            <span>
              {new Date(repo.updated_at).toLocaleDateString("en", {
                month: "short",
                year: "numeric",
              })}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
