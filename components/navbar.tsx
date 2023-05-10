import React from "react";
import Link from "next/link";
import CartIcon from "@/components/CartIcon";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
});
const navbar = () => {
  return (
    <nav
      className={`bg-white font-black font-display p-4 ${roboto.className} mx-auto w-full xl:w-3/4 z-10`}
    >
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center justify-around space-x-4">
          <Link href="/keyboards" className="text-black font-light  py-2">
            Keyboards
          </Link>
        </div>
        <Link href="/" className="text-black font-bold text-xl">
          Austin Switch Society
        </Link>
        <div className="flex items-center">
          <Link href="/cart" className="black  py-2">
            <CartIcon />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
