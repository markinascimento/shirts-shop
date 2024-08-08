"use client";

import { useTheme } from "next-themes";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <div className="flex flex-col gap-4">
      <button onClick={() => setTheme("dark")}> dark </button>
      <button onClick={() => setTheme("light")}> light </button>
    </div>
  );
}
