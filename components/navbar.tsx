import React from "react";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

type Props = {};

const navbar = (props: Props) => {
  return (
    <nav className="bg-black px-4 py-2 sticky top-0 z-10">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-white font-bold text-lg">
          Austin Switch Society
        </Link>
        <div className="flex items-center">
          <Link href="/cart" className="text-gray-300 hover:text-white mx-3">
            <FaShoppingCart className="text-2xl" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
