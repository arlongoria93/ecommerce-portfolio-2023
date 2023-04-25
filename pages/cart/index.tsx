import { keyboards } from "@/data/keyboards";
import { Typography } from "@material-tailwind/react";
import { ShopContext } from "@/context/shop-context";
import { ContextType } from "@/context/shop-context";
import CartItem from "./cartItem";
import React from "react";

const index = () => {
  const { cartItems } = React.useContext(ShopContext) as ContextType;
  return (
    <main>
      <Typography>Your Cart Items</Typography>
      <div>
        {keyboards.map((keyboard) => {
          if (cartItems[keyboard.id] !== 0) {
            return (
              <div key={keyboard.id}>
                <CartItem data={keyboard} />
              </div>
            );
          }
        })}
      </div>
    </main>
  );
};

export default index;
