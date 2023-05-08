import Link from "next/link";
import useSWR from "swr";
import { keyboards } from "@/data/keyboards";
import ProductsList from "@/components/ProductsList";
import { useEffect, useState } from "react";

const fetcher = (url: any) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data, error } = useSWR("/api/keyboard", fetcher);

  if (error) return <div>Failed to load</div>;

  if (!data) return <h1>Loading...</h1>;
  //Handle the loading state
  return (
    <main>
      <ProductsList products={data.products} />
    </main>
  );
}
