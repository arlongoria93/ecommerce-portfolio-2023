import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Poppins } from 'next/font/google';
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

const poppins = Poppins({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  display: 'swap'
});

const Product = ({ product }: Props) => {
  return (
    <div
      className={`${poppins.className} text-black transition duration-300 group flex flex-col items-center justify-center w-full gap-3 align-center h-[300px] `}
    >
      <Link href={`/products/${product.id}`}>
        <Image
          src={product.image}
          width={400}
          height={400}
          alt={product.image}
        />
      </Link>
      <a href="#" className="text-black">
        {product.name}
        <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-black"></span>
      </a>
      <p className="font-light">${product.price} USD</p>
    </div>
  );
};

export default Product;
