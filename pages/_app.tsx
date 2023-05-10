import Layout from "@/components/Layout";
import { ShopContextProvider } from "@/context/shop-context";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ShopContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ShopContextProvider>
  );
}
