import Image from "next/image";
import { Inter } from "next/font/google";
import { keyboards } from "../data/keyboards.js";
import ProductsList from "@/components/ProductsList";
console.log(keyboards);
export default function Home() {
  return (
    <main className="z-0">
      <ProductsList products={keyboards} />
    </main>
  );
}
