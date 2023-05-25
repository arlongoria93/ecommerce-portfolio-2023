import '@/styles/globals.css';
import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import Layout from '@/components/Layout';
import Navbar from '@/components/navbar';
import { ShopContextProvider } from '@/context/shop-context';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ShopContextProvider>
      <Banner visible={true} />
      <Navbar />
      <Layout>
        <Component {...pageProps} /> <Footer />
      </Layout>
    </ShopContextProvider>
  );
}
