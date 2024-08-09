// -> NextJS
import Link from "next/link";

// -> Utils
import { formatCurrency } from "@/utils/formatCurrency";

export function ProductCard() {
  return (
    <Link href="/product/12" className="flex flex-col w-80 h-[448px]">
      <section
        className="bg-zinc-100 flex flex-1 p-2 dark:bg-zinc-800 rounded-md hover:scale-105 
        transition-transform duration-300"
      >
        imagem
      </section>

      <section className="flex items-end justify-between h-14 p-2">
        <strong className="text-sm font-medium"> White shirt 2 </strong>
        <span className="text-lg"> {formatCurrency(499)} </span>
      </section>
    </Link>
  );
}
