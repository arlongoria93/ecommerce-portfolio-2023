import React, { createContext, useState, useEffect } from "react";
import { Keyboard } from "@/types/Keyboard";

export type ContextType = {
  cartItems: { [key: number]: number };
  getDefaultCart: (keyboards: Keyboard[]) => { [key: number]: number };
  addProductToCart: (productId: number, quantity: number) => void;
  removeProductFromCart: (productId: number) => void;
  getTotalItemCountInCart: () => number;
  getTotalCartAmount: () => string;
  clearCart: () => void;
  setCartItems: React.Dispatch<
    React.SetStateAction<{
      [key: number]: number;
    }>
  >;
};

export const ShopContext = createContext<ContextType | null>(null);
type Props = {
  children: React.ReactNode;
};
export const ShopContextProvider = ({ children }: Props) => {
  const [PRODUCTS, setPRODUCTS] = useState<Keyboard[]>([]);
  const [cartItems, setCartItems] = useState<{ [key: number]: number }>({});

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`/api/keyboard`);
      const data = await response.json();
      const keyboards = data.products;
      const defaultCart = getDefaultCart(keyboards);
      setPRODUCTS(keyboards);
      setCartItems(defaultCart);
    };

    fetchProducts();
  }, []);

  const getDefaultCart = (keyboards: Keyboard[]) => {
    const defaultCart: { [key: number]: number } = {};
    keyboards.forEach((keyboard) => {
      defaultCart[keyboard.id] = 0;
    });
    return defaultCart;
  };

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

  const addProductToCart = (productId: number, quantity = 1) => {
    setCartItems((prevState) => ({
      ...prevState,
      [productId]: (prevState[productId] ?? 0) + quantity,
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

  const clearCart = () => {
    const defaultCart = getDefaultCart(PRODUCTS);
    setCartItems(defaultCart);
  };

  const contextValue = {
    cartItems,
    addProductToCart,
    removeProductFromCart,
    getTotalCartAmount,
    getTotalItemCountInCart,
    clearCart,
    getDefaultCart,
    setCartItems,
  };

  if (PRODUCTS.length === 0) {
    // Render a loading spinner or placeholder content while the products are being fetched
    return <div>Loading...</div>;
  }

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};
