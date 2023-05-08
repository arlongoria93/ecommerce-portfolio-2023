import React from "react";
import Link from "next/link";
import CartIcon from "@/components/CartIcon";

const navbar = () => {
  return (
    <nav className="bg-black  sticky top-0 z-10 p-4">
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center justify-around space-x-4">
          <Link
            href="/keyboards"
            className="text-gray-300 hover:text-white py-2"
          >
            Keyboards
          </Link>
        </div>
        <Link href="/" className="text-white font-bold text-lg">
          Austin Switch Society
        </Link>
        <div className="flex items-center">
          <Link href="/cart" className="text-gray-300 hover:text-white py-2">
            <CartIcon />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
