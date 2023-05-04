import Link from "next/link";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
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
        console.log(data);
        setPublishableKey(data.publishableKey);
      });
  }, []);
  if (!publishableKey) return <h1>Loading...</h1>;
  return (
    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
      <h1 className="text-6xl font-bold mb-8 ">Austin Switch Society</h1>
      <p className="text-lg mb-8 ">
        Your go-to destination for high-quality mechanical keyboards and key
        switches!
      </p>
      <Link href="/keyboards">
        <p className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
          Shop Now
        </p>
      </Link>
    </main>
  );
}
