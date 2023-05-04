import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import Image from "next/image";
import { keyboards } from "@/data/keyboards";
//get params from url

const Product = ({
  keyboard,
}: {
  keyboard: {
    name: string;
    price: number;
    description: string;
    image: string;
  };
}) => {
  const { name, price, description, image } = keyboard;
  if (!name) return <div>loading...</div>;
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
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;

//getStaticProps
export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) return { props: { keyboard: {} } };
  const filterKeyboardBySlug = (id: string) => {
    const keyboard = keyboards.filter((keyboard) => {
      return keyboard.id.toString() === id;
    });

    return keyboard[0];
  };
  const keyboard = filterKeyboardBySlug(params.slug as string);
  return {
    props: {
      keyboard,
    },
  };
};

//getStaticPaths
export const getStaticPaths: GetStaticPaths = () => {
  const paths = keyboards.map((keyboard) => ({
    params: { slug: keyboard.id.toString() },
  }));

  return { paths, fallback: false };
};
