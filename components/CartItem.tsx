import Image from 'next/image';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import { ShopContext, ContextType } from '@/context/shop-context';
import React, { useState } from 'react';

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
  const [quantity, setQuantity] = useState(1);
  const { addProductToCart, removeProductFromCart } = React.useContext(
    ShopContext
  ) as ContextType;

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="flex items-center justify-between w-full pt-8 pb-8 ">
      <div className="flex flex-row items-center w-[270px]">
        <div className="w-32">
          <Image
            src={product.image}
            alt={product.name}
            width={200}
            height={200}
          />
        </div>
        <div className="flex flex-col gap-4 ml-4">
          <h2 className="text-lg font-normal">{product.name}</h2>
          <p className="text-gray-500">${product.price}</p>
          <div className="flex items-center justify-between py-2 px-4  border border-black w-[140px] md:hidden">
            <button onClick={decreaseQuantity}>-</button>
            <p className="">{quantity}</p>
            <button onClick={increaseQuantity}>+</button>
          </div>
        </div>
      </div>
      {/* hidden qty */}
      <div className="flex-col items-start justify-center hidden w-1/3 md:flex">
        <div className="flex items-center justify-between py-2 px-4  border border-black w-[140px]">
          <button onClick={decreaseQuantity} className="px-2 py-1 ">
            -
          </button>
          <p className="">{quantity}</p>
          <button onClick={increaseQuantity} className="px-2 py-1 ">
            +
          </button>
        </div>
      </div>
      <div>
        {/* display price of product x amount of qty */}
        <p className="text-lg font-normal w-[80px]">
          ${(product.price * quantity).toFixed(2)}
        </p>
      </div>
    </div>
  );
};
