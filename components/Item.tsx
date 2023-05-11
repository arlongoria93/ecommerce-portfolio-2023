import React, { useContext } from 'react';
import Link from 'next/link';
import { ShopContext } from '@/context/shop-context';
import { ContextType } from '@/context/shop-context';
import Image from 'next/image';
type Props = {
  data: {
    id: number;
    name: string;
    description: string;
    image: string;
    price: number;
  };
};

const Item = ({ data }: Props) => {
  const { addProductToCart, removeProductFromCart } = useContext(
    ShopContext
  ) as ContextType;
  return (
    <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
      <div className="w-full md:w-1/3 bg-white grid place-items-center">
        <Link href={`/products/${data.id}`}>
          <Image
            src={data.image}
            alt="tailwind logo"
            className="rounded-xl"
            fill={true}
          />
        </Link>
      </div>
      <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
        <div className="flex justify-end item-center">
          <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
            Ducky
          </div>
        </div>
        <h3 className="font-black text-gray-800 md:text-3xl text-xl transition duration-300 transform hover:scale-105">
          {' '}
          {data.name}
        </h3>
        <p className="md:text-lg text-gray-500 text-base">{data.description}</p>
        <div className="flex justify-between">
          <p className="text-xl font-black text-gray-800">${data.price}</p>
          <div className="flex space-x-2">
            <button onClick={() => addProductToCart(data.id)}>
              Add To Cart
            </button>
            <button onClick={() => removeProductFromCart(data.id)}>
              Remove From Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
