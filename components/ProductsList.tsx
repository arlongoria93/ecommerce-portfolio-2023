import React from 'react';
import Product from './Product';

type product = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  brand: string;
};
type Products = {
  products: product[];
};

const ProductsList = ({ products }: Products) => {
  return (
    <div className="grid grid-cols-2 gap-8 p-4 overflow-hidden sm:grid-cols-4">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
