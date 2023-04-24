import React from "react";
import Link from "next/link";

type Props = {};

const navbar = (props: Props) => {
  return (
    <nav className="bg-black px-4 py-2">
      <div className="flex items-center justify-between">
        <Link href="#" className="text-white font-bold text-lg">
          My Store
        </Link>
        <div className="flex items-center">
          <Link href="/cart" className="text-gray-300 hover:text-white mx-3">
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
