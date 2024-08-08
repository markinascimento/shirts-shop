"use client";
// -> ReactJS
import { useCallback, useState } from "react";

// -> Theme lib
import { useTheme } from "next-themes";

// -> Icons lib
import { Moon, ShoppingCart, Sun } from "lucide-react";

// -> Components
import { ItensCart } from "../ItensCart";

export function Header() {
  const { setTheme, theme } = useTheme();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openItensCart = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeItensCart = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <header
      data-testid="header"
      className="flex w-full min-h-16 items-center justify-between py-2 border-b-2 border-zinc-100 dark:border-zinc-800"
    >
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
          data-testid="button-cart"
          type="button"
          onClick={openItensCart}
          className="flex items-center justify-center w-10 h-10"
        >
          <ShoppingCart />
        </button>

        <ItensCart isOpen={isOpen} onClose={closeItensCart} />
      </section>
    </header>
  );
}
