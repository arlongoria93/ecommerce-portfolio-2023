import React, { useState, useEffect } from "react";
import { ShopContext, ContextType } from "@/context/shop-context";
import Image from "next/image";
import { Keyboard } from "@/types/Keyboard";
import { useRouter } from "next/router";
//get params from url

const Product = () => {
  const router = useRouter();
  const { id } = router.query;
  const [keyboard, setKeyboard] = useState({} as Keyboard);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`/api/keyboard/${id}`);
      const data = await response.json();
      setKeyboard(data);
    };
    fetchProducts();
  }, [id]);

  const { addProductToCart } = React.useContext(ShopContext) as ContextType;
  const handleQuantityChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setQuantity(parseInt(event.target.value));
  };

  if (!keyboard) {
    return (
      <div className="flex aign-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        Loading...
      </div>
    );
  }

  const { name, price, description, image } = keyboard ?? {};

  return (
    <div className="flex flex-col aign-center justify-center gap-8 h-screen z-0 mt-16">
      <Image src={image} alt={name} width={500} height={500} />
      <h1 className="text-3xl font-bold">{name}</h1>
      <p className="text-2xl font-bold">${price}</p>
      <p className="text-xl">{description}</p>
      <p className="text-lg">Return Stock Available</p>
      <div className="flex flex-col items-center self-start">
        <label htmlFor="quantity" className="text-lg font-bold mb-2">
          Quantity:
        </label>
        <select
          id="quantity"
          name="quantity"
          value={quantity}
          onChange={handleQuantityChange}
          className="border border-gray-400 rounded-md px-2 py-1"
        >
          {[...Array(10)].map((_, index) => (
            <option key={index} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={() => addProductToCart(keyboard.id, quantity)}
        className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded self-start w-1/4"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
