import { keyboards } from "@/data/keyboards";
import ProductsList from "@/components/ProductsList";
export default function Home() {
  return (
    <main className="z-0">
      <ProductsList products={keyboards} />
    </main>
  );
}
