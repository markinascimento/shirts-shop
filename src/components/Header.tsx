"use client";
// -> Theme lib
import { useTheme } from "next-themes";

// -> Icons lib
import { Moon, ShoppingCart, Sun } from "lucide-react";

export function Header() {
  const { setTheme, theme } = useTheme();

  return (
    <header className="flex w-full min-h-16 items-center justify-between py-2 border-b-2 border-zinc-100 dark:border-zinc-900">
      <h1> Header </h1>

      <section className="flex items-center gap-4">
        <button
          type="button"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="flex items-center justify-center w-10 h-10"
        >
          {theme === "dark" ? (
            <Sun suppressHydrationWarning />
          ) : (
            <Moon suppressHydrationWarning />
          )}
        </button>

        <button
          type="button"
          onClick={() => console.log("cart")}
          className="flex items-center justify-center w-10 h-10"
        >
          <ShoppingCart />
        </button>
      </section>
    </header>
  );
}
