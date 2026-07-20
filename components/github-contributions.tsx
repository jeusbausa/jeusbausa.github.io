"use client";

import { useEffect, useState } from "react";
import type { GithubContributionData, GithubContributionDay } from "../lib/github-contributions";
import ProjectCard from "./project-card";
import useReveal from "./use-reveal";

const DAY_IN_MS = 24 * 60 * 60 * 1000;
const DOT_SIZES = [2, 4, 6, 8, 10];
const DOT_OPACITY = [0.15, 0.4, 0.62, 0.82, 1];
const REPOS_PER_PAGE = 5;

type CalendarDay = GithubContributionDay | null;

type Repo = {
  name: string;
  description?: string;
  language?: string;
  stars?: number;
  url: string;
  updated_at?: string;
};

function toDateKey(date: Date) {
  return date.toISOString().slice(0, 10);
}

function buildCalendarWeeks(contributions: GithubContributionDay[]) {
  if (contributions.length === 0) return [];

  const contributionByDate = new Map(contributions.map((contribution) => [contribution.date, contribution]));
  const sortedDates = contributions.map((contribution) => contribution.date).sort();
  const firstDate = new Date(`${sortedDates[0]}T00:00:00Z`);
  const lastDate = new Date(`${sortedDates.at(-1)}T00:00:00Z`);
  const calendarStart = new Date(firstDate);
  const calendarEnd = new Date(lastDate);

  calendarStart.setUTCDate(calendarStart.getUTCDate() - calendarStart.getUTCDay());
  calendarEnd.setUTCDate(calendarEnd.getUTCDate() + (6 - calendarEnd.getUTCDay()));

  const weekCount = Math.round((calendarEnd.getTime() - calendarStart.getTime()) / DAY_IN_MS / 7) + 1;

  return Array.from({ length: weekCount }, (_, weekIndex) =>
    Array.from({ length: 7 }, (_, dayIndex): CalendarDay => {
      const date = new Date(calendarStart.getTime() + (weekIndex * 7 + dayIndex) * DAY_IN_MS);
      return contributionByDate.get(toDateKey(date)) ?? null;
    }),
  );
}

export default function GithubContributions({ data }: { data: GithubContributionData | null }) {
  const scope = useReveal();
  const weeks = buildCalendarWeeks(data?.contributions ?? []);
  const [repos, setRepos] = useState<Repo[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadRepositories() {
      setLoading(true);
      setError(null);

      try {
        const query = new URLSearchParams({
          page: String(page),
          per_page: String(REPOS_PER_PAGE),
        });
        const response = await fetch(`https://octokit-repos-jeusbausa.up.railway.app/repos?${query}`, {
          signal: controller.signal,
        });

        if (!response.ok) throw new Error("Repository request failed");
        setRepos(await response.json());
      } catch (requestError) {
        if ((requestError as Error).name !== "AbortError") {
          setError("GitHub repositories are temporarily unavailable.");
          setRepos([]);
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    loadRepositories();
    return () => controller.abort();
  }, [page]);

  return (
    <section ref={scope} id="github" className="section-shell">
      <div className="grid gap-8 md:grid-cols-[13rem_1fr] md:gap-16">
        <p className="section-kicker reveal">04 — GitHub</p>
        <div className="reveal">
          <h2 className="section-heading">Code in motion.</h2>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <p className="max-w-xl text-base leading-7 text-[rgb(var(--muted))]">
              A live view of my activity and repositories.
            </p>
            <a
              href="https://github.com/jeusbausa"
              target="_blank"
              rel="noreferrer"
              className="link font-mono-ui text-[11px] uppercase tracking-[0.12em] text-[rgb(var(--muted))]"
            >
              @JEUSBAUSA ↗
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 md:ml-[8rem]">
        {data && weeks.length > 0 ? (
          <>
            <p className="section-kicker reveal mb-5">Contribution activity</p>
            <div
              className="contribution-scroll reveal"
              role="img"
              aria-label={`${data.total.toLocaleString("en-US")} GitHub contributions in the last year`}
            >
              <div
                className="contribution-grid"
                style={{
                  gridTemplateColumns: `repeat(${weeks.length}, minmax(8px, 1fr))`,
                }}
              >
                {weeks.map((week, weekIndex) => (
                  <div className="contribution-week" key={weekIndex}>
                    {week.map((day, dayIndex) => {
                      if (!day) {
                        return (
                          <span className="contribution-cell" key={`${weekIndex}-${dayIndex}`} aria-hidden="true" />
                        );
                      }

                      return (
                        <span
                          className="contribution-cell"
                          key={day.date}
                          title={`${day.count} contribution${day.count === 1 ? "" : "s"} on ${day.date}`}
                        >
                          <span
                            className="contribution-dot"
                            style={{
                              height: DOT_SIZES[day.level],
                              opacity: DOT_OPACITY[day.level],
                              width: DOT_SIZES[day.level],
                            }}
                          />
                        </span>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
            <p className="section-kicker reveal mt-7">
              {data.total.toLocaleString("en-US")} contributions in the last year
            </p>
          </>
        ) : (
          <p className="font-mono-ui reveal border border-[rgb(var(--line))] p-5 text-xs text-[rgb(var(--muted))]">
            GitHub activity is temporarily unavailable.
          </p>
        )}

        <div className="mt-16">
          <div className="reveal flex items-center justify-between gap-4 border-b border-[rgb(var(--line))] pb-4">
            <p className="section-kicker">Repositories</p>
            <span className="section-kicker">Page {String(page).padStart(2, "0")}</span>
          </div>

          {error && (
            <div className="font-mono-ui mt-5 border border-red-500/40 p-4 text-xs text-red-700 dark:text-red-300">
              {error}
            </div>
          )}

          <div className="border-b border-[rgb(var(--line))]">
            {loading
              ? Array.from({ length: REPOS_PER_PAGE }).map((_, index) => (
                  <div key={index} className="animate-pulse border-t border-[rgb(var(--line))] py-7">
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

          <div className="reveal mt-7 flex flex-wrap items-center gap-3">
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
              disabled={loading || repos.length < REPOS_PER_PAGE}
              className="btn btn-primary"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
