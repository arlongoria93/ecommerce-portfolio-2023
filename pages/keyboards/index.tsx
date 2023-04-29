import { keyboards } from "@/data/keyboards";
import ProductsList from "@/components/ProductsList";
export default function index() {
  return (
    <main className="z-0">
      <ProductsList products={keyboards} />
    </main>
  );
}
