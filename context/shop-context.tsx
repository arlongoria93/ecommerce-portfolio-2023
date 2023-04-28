import React, { createContext, useState } from "react";
import { keyboards as PRODUCTS } from "../data/keyboards";
export type ContextType = {
  cartItems: { [key: number]: number };
  addProductToCart: (productId: number) => void;
  removeProductFromCart: (productId: number) => void;
  getTotalItemCountInCart: () => number;
  getTotalCartAmount: () => string;
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

  const getTotalCartAmount = () => {
    let total = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        if (itemInfo) total += cartItems[item] * itemInfo.price;
      }
    }
    return total.toFixed(2);
  };

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

  const getTotalItemCountInCart = () => {
    let total = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        total += cartItems[item];
      }
    }
    return total;
  };

  const contextValue = {
    cartItems,
    addProductToCart,
    removeProductFromCart,
    getTotalCartAmount,
    getTotalItemCountInCart,
  };
  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};
