import React, { createContext, useState } from "react";
import { keyboards as PRODUCTS } from "../data/keyboards";
interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
}
export type ContextType = {
  cartItems: { [key: number]: number };
  addProductToCart: (productId: number) => void;
  removeProductFromCart: (productId: number) => void;
};
export const ShopContext = createContext<ContextType | null>(null);

const getDefaultCart = () => {
  //give cart type of object with key of number and value of number

  let cart: { [key: number]: number } = {};
  for (let i = 1; i <= PRODUCTS.length; i++) {
    cart[i] = 0;
  }
  return cart;
};
//give children prop a type of React.ReactNode
type Props = {
  children: React.ReactNode;
};
export const ShopContextProvider = ({ children }: Props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addProductToCart = (productId: number) => {
    setCartItems((prevState) => ({
      ...prevState,
      [productId]: prevState[productId] + 1,
    }));
  };

  const removeProductFromCart = (productId: number) => {
    setCartItems((prevState) => ({
      ...prevState,
      [productId]: prevState[productId] - 1,
    }));
  };

  const contextValue = { cartItems, addProductToCart, removeProductFromCart };
  console.log(cartItems);
  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};
