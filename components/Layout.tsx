import React from 'react';
import { Roboto } from 'next/font/google';
import Latest from './Latest';

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
      <div className={`grid grid-cols-1 ${roboto.className}`}>
        <main className="z-10 flex flex-col items-center h-full">
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
