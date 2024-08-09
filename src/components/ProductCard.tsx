// -> NextJS
import Link from "next/link";

// -> Utils
import type { ProductDTO } from "@/dtos/ProductDTO";
import { formatCurrency } from "@/utils/formatCurrency";
import Image from "next/image";

export function ProductCard({ product }: { product: ProductDTO }) {
  return (
    <Link
      href={`/product/${product.id}`}
      className="flex flex-col w-80 h-[408px]"
    >
      <section
        className="bg-zinc-100 flex flex-1 items-center justify-center p-2 dark:bg-zinc-800 
        rounded-md hover:scale-105 transition-transform duration-300"
      >
        <Image
          src={product.images[0]}
          alt="Imagem do produto"
          priority
          width={288}
          height={176}
          className="w-full h-[320px] rounded-lg"
        />
      </section>

      <section className="flex items-start justify-between h-14 p-2">
        <strong className="text-sm font-medium"> {product.title} </strong>
        <span className="text-sm"> {formatCurrency(product.price)} </span>
      </section>
    </Link>
  );
}
