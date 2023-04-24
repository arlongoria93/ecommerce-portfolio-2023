import React from "react";
import Product from "./Product";

type product = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
};
type Products = {
  products: product[];
};

const ProductsList = ({ products }: Products) => {
  return (
    <div className="grid grid-cols-1  lg:grid-cols-2 gap-4 overflow-hidden">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
