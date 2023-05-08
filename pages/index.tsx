import Link from "next/link";
import { keyboards } from "@/data/keyboards";
import ProductsList from "@/components/ProductsList";
import { useEffect, useState } from "react";

export default function Home() {
  const [publishableKey, setPublishableKey] = useState("");
  useEffect(() => {
    fetch("/api/stripe", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setPublishableKey(data.publishableKey);
      });
  }, []);
  if (!publishableKey) return <h1>Loading...</h1>;
  return (
    <main>
      <ProductsList products={keyboards} />
    </main>
  );
}
