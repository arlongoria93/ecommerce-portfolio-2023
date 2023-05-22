import Image from 'next/image';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import { ShopContext, ContextType } from '@/context/shop-context';
import React from 'react';

type Props = {
  product: {
    id: number;
    name: string;
    description: string;
    image: string;
    price: number;
    brand: string;
  };
  count: number;
};
export const CartItem = ({ product, count }: Props) => {
  const { addProductToCart, removeProductFromCart } = React.useContext(
    ShopContext
  ) as ContextType;
  return (
    <div className="flex items-center w-full py-4 border-b">
      <div className="w-24">
        <Image
          src={product.image}
          alt={product.name}
          width={100}
          height={100}
        />
      </div>
      <div className="flex-1 ml-4">
        <h2 className="text-lg font-bold">{product.name}</h2>
        <p className="text-gray-500">{product.price}</p>
      </div>
      <div className="flex items-center justify-center p-4 text-center">
        <button onClick={() => removeProductFromCart(product.id)}>
          <AiOutlineMinusCircle size={20} />
        </button>
        <p className="p-2 text-gray-500">{count}</p>
        <button
          className="mr-4 text-red-500"
          onClick={() => addProductToCart(product.id)}
        >
          <AiOutlinePlusCircle size={20} />
        </button>
      </div>
    </div>
  );
};
