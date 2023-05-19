import React, { useState, useEffect } from 'react';
import { ShopContext, ContextType } from '@/context/shop-context';
import Image from 'next/image';
import { Keyboard } from '@/types/Keyboard';
import { useRouter } from 'next/router';
import { Poppins } from 'next/font/google';
//get params from url

const poppins = Poppins({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  display: 'swap'
});

const Product = () => {
  const router = useRouter();
  const { id } = router.query;
  const [keyboard, setKeyboard] = useState({} as Keyboard);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchKeyboard = async () => {
      const response = await fetch(`/api/keyboard/${id}`);
      const data = await response.json();
      setKeyboard(data);
    };
    fetchKeyboard();
  }, [id]);

  const { addProductToCart } = React.useContext(ShopContext) as ContextType;

  const handleQuantityChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setQuantity(parseInt(event.target.value));
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    addProductToCart(Number(id), quantity);
    setQuantity(1);
  };

  if (!keyboard) {
    return (
      <div className="flex justify-center px-4 py-8 mx-auto aign-center max-w-7xl sm:px-6 lg:px-8">
        Loading...
      </div>
    );
  }

  const { name, brand, price, description, image } = keyboard ?? {};

  return (
    <div
      className={`z-0 flex flex-col justify-start min-h-screen  h-full gap-8 p-4 ${poppins.className} transition duration-300 group`}
    >
      <div className="border-2 border-black ">
        {image ? (
          <Image src={image} alt={name} width={692} height={300} />
        ) : null}
      </div>
      <p>{brand}</p>
      <h1 className="text-4xl">{name}</h1>
      <p className="text-lg text-gray-800">{description}</p>
      <p className="text-2xl font-thin">${price}</p>
      <div className="flex flex-col items-start justify-center w-1/3">
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
      <button
        onClick={handleAddToCart}
        className="w-3/4 px-4 py-4 font-thin text-black transition-all ease-in-out border border-black  hover:border-[2px]"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;

// <h1 className="text-3xl font-bold">{name}</h1>
// <p className="text-lg text-gray-800">{description}</p>
//
// <p className="text-2xl font-bold">${price}</p>

// <p className="text-lg font-semibold text-green-700">In Stock</p>

// <button
//   onClick={() => addProductToCart(keyboard.id, quantity)}
//   className="self-start px-4 py-2 font-bold text-white bg-green-600 rounded hover:bg-green-700 w-fit"
// >
//   Add to Cart
// </button>
