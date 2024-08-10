// -> API
import ShopServices from "@/services/ShopServices";

// -> Components
import { ProductCard } from "@/components/ProductCard";

export default async function Home() {
  const result = await ShopServices.getAllProducts();

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
