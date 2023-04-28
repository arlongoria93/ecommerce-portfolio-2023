import { FaShoppingCart } from "react-icons/fa";
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
      <FaShoppingCart className="w-8 h-8 text-gray-700 cursor-pointer" />
    </div>
  );
};
export default CartIcon;
