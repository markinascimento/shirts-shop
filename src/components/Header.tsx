"use client";

// -> ReactJS

// -> NextJS
import Image from "next/image";
import Link from "next/link";

// -> Theme lib
import { useTheme } from "next-themes";

// -> Icons lib
import { Moon, ShoppingCart, Sun } from "lucide-react";

// -> ContextAPI
import { useShoes } from "@/hooks/useShoes";

// -> Components
import { ItensCart } from "./ItensCart";

// -> Icons logo
import logoIcon from "@/assets/icon.svg";

export function Header() {
  const { cartItems, openItensCart } = useShoes()
  const { setTheme, theme } = useTheme();

  return (
    <header
      data-testid="header"
      className="flex w-full min-h-16 items-center justify-between py-2 border-b-2 border-zinc-100 dark:border-zinc-800"
    >
      <Link href="/">
        <Image src={logoIcon} alt="Logo da loja" width={64} height={64} />
      </Link>

      <section className="flex items-center gap-4">
        <button
          type="button"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="flex items-center justify-center w-10 h-10"
          suppressHydrationWarning={true}
        >
          {theme === "light" && <Moon suppressHydrationWarning={true} />}
          {theme === "dark" && <Sun suppressHydrationWarning={true} />}
        </button>

        <button
          data-testid="button-cart"
          type="button"
          onClick={openItensCart}
          className="flex items-center justify-center w-10 h-10 relative"
        >
          <ShoppingCart />

          {cartItems.length > 0 && (
            <span 
              className="flex items-center justify-center bg-red-600 absolute 
              text-[10px] h-5 w-5 rounded-full -top-1 right-px font-medium"
            >
              {cartItems.length}
            </span>
          )}
        </button>

        <ItensCart />
      </section>
    </header>
  );
}
