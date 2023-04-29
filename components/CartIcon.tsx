import { AiOutlineShoppingCart } from "react-icons/ai";
import { ShopContext, ContextType } from "@/context/shop-context";
import React from "react";

const CartIcon = () => {
  const { getTotalItemCountInCart } = React.useContext(
    ShopContext
  ) as ContextType;
  const itemCount = getTotalItemCountInCart();
  return (
    <div className="relative">
      {itemCount > 0 && (
        <div className="absolute bottom-4 left-5">
          <span className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
            {itemCount}
          </span>
        </div>
      )}
      <AiOutlineShoppingCart className="w-4 h-4 text-white-700 cursor-pointer" />
    </div>
  );
};
export default CartIcon;
