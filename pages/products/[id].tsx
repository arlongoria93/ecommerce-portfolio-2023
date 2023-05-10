import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import { ShopContext, ContextType } from "@/context/shop-context";
import Image from "next/image";
import { Keyboard } from "@/types/Keyboard";
//get params from url
interface Props {
  keyboard: Keyboard;
}
const Product = ({ keyboard }: Props) => {
  const { addProductToCart } = React.useContext(ShopContext) as ContextType;
  const { name, price, description, image, id } = keyboard;
  return (
    <div className="flex aign-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row -mx-2">
        <div className="md:w-1/2 px-2 relative">
          <Image
            src={image}
            alt="Product Image"
            className="w-full rounded-lg object-contain"
            fill
            sizes="100%"
          />
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
          <button
            onClick={() => addProductToCart(id)}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/keyboard`);
  const data = await res.json();
  const keyboards = data?.products;

  const paths = keyboards.map((keyboard: { id: { toString: () => any } }) => ({
    params: { id: keyboard.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/keyboard/${params?.id}`
  );
  const keyboard = await res.json();

  return {
    props: {
      keyboard,
    },
  };
};
