import React from "react";
import Link from "next/link";

type Props = {
  product: {
    id: number;
    name: string;
    description: string;
    image: string;
    price: number;
  };
};

const Product = ({ product }: Props) => {
  return (
    <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
      <div className="w-full md:w-1/3 bg-white grid place-items-center">
        <Link href={`/products/${product.id}`}>
          <img src={product.image} alt="tailwind logo" className="rounded-xl" />
        </Link>
      </div>
      <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
        <div className="flex justify-end item-center">
          <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
            Ducky
          </div>
        </div>
        <h3 className="font-black text-gray-800 md:text-3xl text-xl transition duration-300 transform hover:scale-105">
          {product.name}
        </h3>
        <p className="md:text-lg text-gray-500 text-base">
          {product.description}
        </p>
        <p className="text-xl font-black text-gray-800">${product.price}</p>
      </div>
    </div>
  );
};

export default Product;
