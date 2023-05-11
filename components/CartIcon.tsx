import { ShopContext, ContextType } from '@/context/shop-context';
import React from 'react';
import { IconContext } from 'react-icons';
import { BsBag } from 'react-icons/bs';
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
      <IconContext.Provider value={{ className: 'text-2xl' }}>
        <BsBag />
      </IconContext.Provider>
    </div>
  );
};
export default CartIcon;
