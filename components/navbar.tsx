import React, { useState } from 'react';
import Link from 'next/link';
import CartIcon from '@/components/CartIcon';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsXLg } from 'react-icons/bs';
import { Roboto } from 'next/font/google';
import { Fade } from 'react-awesome-reveal';

const roboto = Roboto({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  display: 'swap'
});
const navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <>
      <nav
        className={`bg-white shadow-lg font-black font-display p-4 ${roboto.className}  z-50 h-[59px] md:h-[69px] flex justify-center items-center   w-full sticky top-0`}
      >
        <div className="flex justify-between align-center w-full items-center flex-row md:w-3/4">
          <Link
            href="/"
            className="text-black italic font-black text-xl md:text-2xl md:font-black  "
          >
            AustinSwitchSociety
          </Link>
          <div className="hidden md:block md:mr-44">
            <Link
              href="/keyboards"
              className=" text-black  font-bold text-xl text-center "
            >
              Keyboards
            </Link>
          </div>
          {!isOpen ? (
            <div className="flex flex-row items gap-4">
              <Link href="/cart">
                <CartIcon />
              </Link>
              <GiHamburgerMenu
                className=" text-2xl md:hidden"
                onClick={toggleMenu}
              />
            </div>
          ) : (
            <Fade triggerOnce damping={1}>
              <BsXLg className=" text-2xl" onClick={toggleMenu} />
            </Fade>
          )}
        </div>
      </nav>
      {isOpen && (
        <Fade direction="down" cascade triggerOnce>
          <div className=" overflow-auto bg-white  flex flex-col h-fit p-4 border-b border-b-black border-opacity-40 ">
            <Link
              href="/keyboards"
              className="text-black font-bold text-lg bg-[#d4d4d4] rounded p-4"
            >
              Keyboards
            </Link>
          </div>
        </Fade>
      )}
    </>
  );
};

export default navbar;
