import React from "react";
import { keyboards } from "@/data/keyboards";
//get params from url
import { useRouter } from "next/router";

const filterKeyboardBySlug = (id: string) => {
  const keyboard = keyboards.filter((keyboard) => {
    return keyboard.id.toString() === id;
  });

  return keyboard[0];
};

const Product = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { name, price, description, image } = filterKeyboardBySlug(
    slug as string
  )
    ? keyboards[0]
    : { name: "", price: 0, description: "", image: "" };
  return (
    <div className="flex aign-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row -mx-2">
        <div className="md:w-1/2 px-2">
          <img src={image} alt="Product Image" className="w-full rounded-lg" />
        </div>
        <div className="md:w-1/2 px-2 mt-4 md:mt-0">
          <h1 className="text-3xl font-bold mb-4">{name ? name : "loading"}</h1>
          <p className="text-gray-700 text-lg mb-4">{description}</p>
          <div className="mb-4">
            <span className="text-gray-600 text-lg mr-2">Price:</span>
            <span className="text-green-600 font-semibold text-lg">
              ${price}
            </span>
          </div>
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
