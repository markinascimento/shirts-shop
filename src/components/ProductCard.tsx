// -> NextJS
import Image from "next/image";

// -> Utils
import { formatCurrency } from "@/utils/formatCurrency";

// -> Types
import type { ProductDTO } from "@/dtos/ProductDTO";

export function ProductCard({ product }: { product: ProductDTO }) {
  return (
    <div className="flex flex-col w-72 h-96">
      <section
        className="flex flex-1 items-center justify-center p-2  
        rounded-md hover:scale-105 transition-transform duration-300"
      >
        <Image
          src={product.images[0]}
          alt="Imagem do produto"
          priority
          width={288}
          height={176}
          className="w-full h-[300px] rounded-lg"
        />
      </section>

      <section className="flex flex-col items-end justify-between h-16 p-2">
        <div className="flex w-full items-center justify-between">
          <strong className="text-xs font-medium"> {product.title} </strong>
          <span className="text-sm"> {formatCurrency(product.price)} </span>
        </div>

        <button className="bg-lime-500 px-2 py-1 rounded-full">
          <span className="text-sm"> Add to cart </span>
        </button>
      </section>
    </div>
  );
}
