import { useState } from "react";
import axios from "axios";
import { keyboards } from "@/data/keyboards";
import { Typography } from "@material-tailwind/react";
import { ShopContext, ContextType } from "@/context/shop-context";
import getStripe from "@/utils/get-stripe";
import { CartItem } from "@/components/CartItem";
import React from "react";
import Link from "next/link";
import { getEffectiveConstraintOfTypeParameter } from "typescript";

const Index = () => {
  const [redirecting, setRedirecting] = useState(false);
  const { cartItems, getTotalCartAmount } = React.useContext(
    ShopContext
  ) as ContextType;
  const totalAmount = Number(getTotalCartAmount());
  //add count of item to CartItem component

  const redirectToCheckout = async () => {
    //redirect to checkout page
    //get lineItems from cartItems
    const {
      data: { id },
    } = await axios.post("/api/checkout_sessions", {
      cartItems,
    });
    // Redirect to checkout
    const stripe = await getStripe();
    await stripe.redirectToCheckout({ sessionId: id });
  };

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
        <button
          onClick={redirectToCheckout}
          disabled={redirecting}
          className="border rounded py-2 px-6 bg-rose-500 hover:bg-rose-600 border-rose-500 hover:border-rose-600 focus:ring-4 focus:ring-opacity-50 focus:ring-rose-500  transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-rose-500 max-w-max mt-4 text-black"
        >
          {redirecting ? "Redirecting..." : "Go to Checkout"}
        </button>
      </div>
      <p className="font-bold">
        Subtotal: ${totalAmount > 0 ? totalAmount : "0"}
      </p>
    </main>
  );
};

export default Index;
