// -> Components
import { ProductCard } from "@/components/ProductCard";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full ">
      <h1> Hey, its working! </h1>

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </main>
    </div>
  );
}
