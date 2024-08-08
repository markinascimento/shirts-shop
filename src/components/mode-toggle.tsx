"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <div>
      <button
        type="button"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="flex items-center justify-center w-10 h-10 rounded-md bg-zinc-100 dark:bg-zinc-800"
      >
        {theme === "dark" ? (
          <Sun suppressHydrationWarning />
        ) : (
          <Moon suppressHydrationWarning />
        )}
      </button>
    </div>
  );
}
