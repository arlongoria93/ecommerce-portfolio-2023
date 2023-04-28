import { keyboards } from "@/data/keyboards";
import { Typography } from "@material-tailwind/react";
import { ShopContext, ContextType } from "@/context/shop-context";

import { CartItem } from "@/components/CartItem";
import React from "react";
import Link from "next/link";

const Index = () => {
  const { cartItems, getTotalCartAmount } = React.useContext(
    ShopContext
  ) as ContextType;
  const totalAmount = Number(getTotalCartAmount());
  //add count of item to CartItem component

  return (
    <main className="flex flex-col items-center">
      <Typography>Your Cart Items</Typography>
      <div className="grid grid-cols-1 gap-4">
        {keyboards.map((keyboard) => {
          if (cartItems[keyboard.id] !== 0) {
            return (
              <div key={keyboard.id}>
                <CartItem product={keyboard} count={cartItems[keyboard.id]} />
              </div>
            );
          }
        })}
      </div>
      <div className="flex justify-center space-x-4">
        <Link href="/">
          <button>Continue Shopping </button>
        </Link>
        <button> Checkout </button>{" "}
      </div>
      <p className="font-bold">
        Subtotal: ${totalAmount > 0 ? totalAmount : "0"}
      </p>
    </main>
  );
};

export default Index;
