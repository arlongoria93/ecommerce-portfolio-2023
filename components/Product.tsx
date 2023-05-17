import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
    <div className="flex flex-col items-center justify-center w-full gap-3 align-center h-[300px] ">
      <Link href={`/products/${product.id}`}>
        <Image
          src={product.image}
          width={400}
          height={400}
          alt={product.image}
        />
      </Link>
      <h1 className="hover:underline">{product.name}</h1>
      <p>${product.price} USD</p>
    </div>
  );
};

export default Product;
