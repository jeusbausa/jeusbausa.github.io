"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const current = theme === "system" ? systemTheme : theme;
  return (
    <button
      aria-label="Toggle dark mode"
      className="btn ring-0"
      onClick={() => setTheme(current === "dark" ? "light" : "dark")}
    >
      {!mounted ? (
        <Sun size={18} />
      ) : current === "dark" ? (
        <Moon size={18} />
      ) : (
        <Sun size={18} />
      )}
    </button>
  );
}
