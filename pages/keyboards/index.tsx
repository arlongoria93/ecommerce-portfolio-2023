import { useState, useEffect } from "react";
import ProductsList from "@/components/ProductsList";
export default function Index() {
  const [keyboards, setKeyboards] = useState([]);
  useEffect(() => {
    const fetchKeyboards = async () => {
      const res = await fetch("/api/keyboard");
      const data = await res.json();
      setKeyboards(data.products);
    };
    fetchKeyboards();
  }, []);
  return (
    <main className="z-0">
      <ProductsList products={keyboards} />
    </main>
  );
}
