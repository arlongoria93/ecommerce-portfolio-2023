import useSWR from "swr";
import ProductsList from "@/components/ProductsList";

const fetcher = (url: any) => fetch(url).then((res) => res.json());

export default function Index() {
  const { data, error } = useSWR("/api/keyboard", fetcher);
  if (error) return <div>Failed to load</div>;
  if (!data) return <h1>Loading...</h1>;
  return (
    <main className="z-0">
      <ProductsList products={data.products} />
    </main>
  );
}
