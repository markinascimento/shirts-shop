// -> Components
import { ProductCard } from "@/components/ProductCard";
import type { ProductDTO } from "@/dtos/ProductDTO";

async function getProducts(): Promise<ProductDTO[]> {
  return fetch("https://react-shop-backend.liara.run/products")
    .then((result) => result)
    .then((data) => data.json());
}

export default async function Home() {
  const result = await getProducts();

  return (
    <div className="flex flex-col items-center w-full ">
      <h1> Hey, its working! </h1>

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {result.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </main>
    </div>
  );
}
