import React from 'react';
import Link from 'next/link';
import CartIcon from '@/components/CartIcon';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  display: 'swap'
});
const navbar = () => {
  return (
    <nav
      className={`bg-red-400 font-black font-display p-4 ${roboto.className}  z-10 h-[59px] flex justify-center items-center`}
    >
      <div className="flex justify-between w-full items-center flex-row">
        <Link href="/" className="text-black font-bold text-xl">
          Austin Switch Society
        </Link>

        <Link href="/cart" className="black  py-2">
          <CartIcon />
        </Link>
      </div>
    </nav>
  );
};

export default navbar;
