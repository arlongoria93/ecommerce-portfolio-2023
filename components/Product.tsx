import React from "react";
import Link from "next/link";
import Image from "next/image";
type Props = {
  product: {
    id: number;
    name: string;
    description: string;
    image: string;
    price: number;
    brand: string;
  };
};

const Product = ({ product }: Props) => {
  return (
    <div className="flex flex-col w-full md:flex-row md:space-x-5  md:space-y-0 rounded-xl  p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
      <Link href={`/products/${product.id}`} className="flex">
        <div className="relative h-full w-48 md:w-96">
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority
            sizes="100%"
            className="object-contain"
          />
        </div>
        <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3 justify-around">
          <div className="flex justify-end item-center">
            <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
              {product.brand}
            </div>
          </div>
          <h3 className="font-black text-gray-800 md:text-3xl text-xl transition duration-300 transform hover:scale-105">
            {product.name}
          </h3>
          <p className="md:text-lg text-gray-500 text-base">
            {product.description}
          </p>
          <div className="flex justify-between items-center">
            <p className="text-xl font-black text-gray-800">${product.price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
