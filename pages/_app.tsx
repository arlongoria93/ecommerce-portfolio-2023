import Footer from '@/components/Footer';
import Layout from '@/components/Layout';
import Navbar from '@/components/navbar';
import { ShopContextProvider } from '@/context/shop-context';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ShopContextProvider>
      <Navbar />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer />
    </ShopContextProvider>
  );
}
