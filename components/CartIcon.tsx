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
        <div className="absolute top-3 md:top-[7px] left-4 ">
          <span className="flex h-1 w-1 items-center justify-center rounded-full bg-red-500 p-2 md:p-[9px] text-xs text-white">
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
