import Link from "next/link";

export default function Home() {
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
