export type GithubContributionDay = {
  date: string;
  count: number;
  level: number;
};

export type GithubContributionData = {
  contributions: GithubContributionDay[];
  total: number;
};

const CONTRIBUTIONS_URL =
  "https://github.com/users/jeusbausa/contributions";

function getAttribute(tag: string, attribute: string) {
  return tag.match(new RegExp(`${attribute}="([^"]+)"`))?.[1] ?? null;
}

function parseContributionCount(label: string) {
  if (label.startsWith("No contributions")) return 0;
  return Number(label.match(/([\d,]+) contributions?/)?.[1].replaceAll(",", "") ?? 0);
}

export function parseGithubContributions(html: string): GithubContributionData {
  const totalMatch = html.match(
    /([\d,]+)\s+contributions\s+in the last year/i
  );
  const total = Number(totalMatch?.[1].replaceAll(",", "") ?? 0);
  const tooltipCounts = new Map<string, number>();

  for (const match of html.matchAll(
    /<tool-tip\b[^>]*\bfor="([^"]+)"[^>]*>([^<]+)<\/tool-tip>/g
  )) {
    tooltipCounts.set(match[1], parseContributionCount(match[2]));
  }

  const contributions = Array.from(
    html.matchAll(/<td\b[^>]*\bclass="ContributionCalendar-day"[^>]*>/g)
  ).flatMap(([tag]) => {
    const date = getAttribute(tag, "data-date");
    const id = getAttribute(tag, "id");
    const level = Number(getAttribute(tag, "data-level"));

    if (!date || !id || !Number.isInteger(level)) return [];

    return [
      {
        date,
        level,
        count: tooltipCounts.get(id) ?? 0,
      },
    ];
  });

  if (!total || contributions.length < 350) {
    throw new Error("GitHub returned an incomplete contribution calendar");
  }

  return { contributions, total };
}

export async function getGithubContributions() {
  const response = await fetch(CONTRIBUTIONS_URL, {
    headers: {
      Accept: "text/html",
      "User-Agent": "jeusbausa-portfolio",
    },
  });

  if (!response.ok) {
    throw new Error(`GitHub contribution request failed: ${response.status}`);
  }

  return parseGithubContributions(await response.text());
}
