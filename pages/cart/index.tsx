import { useState } from 'react';
import axios from 'axios';
import { keyboards } from '@/data/keyboards';
import { ShopContext, ContextType } from '@/context/shop-context';
import getStripe from '@/utils/get-stripe';
import { CartItem } from '@/components/CartItem';
import React from 'react';
import Link from 'next/link';

const Index = () => {
  const [redirecting, setRedirecting] = useState(false);
  const { cartItems, getTotalCartAmount } = React.useContext(
    ShopContext
  ) as ContextType;
  const totalAmount = Number(getTotalCartAmount());
  //add count of item to CartItem component

  const getCartItemById = (id: number) => {
    return keyboards.find((keyboard) => keyboard.id === id);
  };

  const redirectToCheckout = async () => {
    //redirect to checkout page
    //get lineItems from cartItems
    // Create a Checkout Session
    const cartItemsWithQuantity = Object.entries(cartItems)
      .filter((item) => item[1] > 0)
      .map((item) => ({ id: item[0], quantity: item[1] }));
    const items = Object.entries(cartItemsWithQuantity).map((item) => {
      const keyboard = getCartItemById(Number(item[1].id));
      if (!keyboard) return null;
      return {
        price: keyboard.stripePrice,
        quantity: item[1].quantity
      };
    });

    const {
      data: { id }
    } = await axios.post('/api/checkout_sessions', {
      items
    });
    // Redirect to checkout
    const stripe = await getStripe();
    if (id) await stripe.redirectToCheckout({ sessionId: id });
  };

  return (
    <main className="flex flex-col items-center justify-center w-full h-screen gap-8">
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
      <div className="flex justify-center gap-4">
        <Link href="/">
          <button className="px-6 py-2 mt-4 text-black transition-colors border rounded bg-rose-500 hover:bg-rose-600 border-rose-500 hover:border-rose-600 focus:ring-4 focus:ring-opacity-50 focus:ring-rose-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-rose-500 max-w-max">
            Continue Shopping{' '}
          </button>
        </Link>
        <button
          onClick={redirectToCheckout}
          disabled={redirecting}
          className="px-6 py-2 mt-4 text-black transition-colors border rounded bg-rose-500 hover:bg-rose-600 border-rose-500 hover:border-rose-600 focus:ring-4 focus:ring-opacity-50 focus:ring-rose-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-rose-500 max-w-max"
        >
          {redirecting ? 'Redirecting...' : 'Go to Checkout'}
        </button>
      </div>
      <p className="font-bold">
        Subtotal: ${totalAmount > 0 ? totalAmount : '0'}
      </p>
    </main>
  );
};

export default Index;
