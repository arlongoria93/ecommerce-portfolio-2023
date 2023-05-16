import React from 'react';
import Nav from './navbar';
import { Roboto } from 'next/font/google';
import Footer from './Footer';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
});

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Nav />
      <div className={`grid grid-cols-1 ${roboto.className}`}>
        <main className="flex flex-col items-center h-screen">{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
