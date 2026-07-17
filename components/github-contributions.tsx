"use client";

import type {
  GithubContributionData,
  GithubContributionDay,
} from "../lib/github-contributions";
import useReveal from "./use-reveal";

const DAY_IN_MS = 24 * 60 * 60 * 1000;
const DOT_SIZES = [2, 4, 6, 8, 10];
const DOT_OPACITY = [0.15, 0.4, 0.62, 0.82, 1];

type CalendarDay = GithubContributionDay | null;

function toDateKey(date: Date) {
  return date.toISOString().slice(0, 10);
}

function buildCalendarWeeks(contributions: GithubContributionDay[]) {
  if (contributions.length === 0) return [];

  const contributionByDate = new Map(
    contributions.map((contribution) => [contribution.date, contribution])
  );
  const sortedDates = contributions
    .map((contribution) => contribution.date)
    .sort();
  const firstDate = new Date(`${sortedDates[0]}T00:00:00Z`);
  const lastDate = new Date(`${sortedDates.at(-1)}T00:00:00Z`);
  const calendarStart = new Date(firstDate);
  const calendarEnd = new Date(lastDate);

  calendarStart.setUTCDate(calendarStart.getUTCDate() - calendarStart.getUTCDay());
  calendarEnd.setUTCDate(calendarEnd.getUTCDate() + (6 - calendarEnd.getUTCDay()));

  const weekCount =
    Math.round((calendarEnd.getTime() - calendarStart.getTime()) / DAY_IN_MS / 7) + 1;

  return Array.from({ length: weekCount }, (_, weekIndex) =>
    Array.from({ length: 7 }, (_, dayIndex): CalendarDay => {
      const date = new Date(
        calendarStart.getTime() + (weekIndex * 7 + dayIndex) * DAY_IN_MS
      );
      return contributionByDate.get(toDateKey(date)) ?? null;
    })
  );
}

export default function GithubContributions({
  data,
}: {
  data: GithubContributionData | null;
}) {
  const scope = useReveal();
  const weeks = buildCalendarWeeks(data?.contributions ?? []);

  return (
    <section ref={scope} id="github" className="section-shell">
      <div className="reveal flex items-center justify-between gap-6">
        <p className="section-kicker">04 — GitHub</p>
        <a
          href="https://github.com/jeusbausa"
          target="_blank"
          rel="noreferrer"
          className="link font-mono-ui text-[11px] uppercase tracking-[0.12em] text-[rgb(var(--muted))]"
        >
          @JEUSBAUSA ↗
        </a>
      </div>

      {data && weeks.length > 0 ? (
        <>
          <div
            className="contribution-scroll reveal mt-10"
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
                        <span
                          className="contribution-cell"
                          key={`${weekIndex}-${dayIndex}`}
                          aria-hidden="true"
                        />
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
        <p className="font-mono-ui reveal mt-10 border border-[rgb(var(--line))] p-5 text-xs text-[rgb(var(--muted))]">
          GitHub activity is temporarily unavailable.
        </p>
      )}
    </section>
  );
}
