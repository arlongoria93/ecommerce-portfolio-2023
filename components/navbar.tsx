import { NavItem } from './NavItem';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import CartIcon from '@/components/CartIcon';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsXLg } from 'react-icons/bs';
import { Roboto, Poppins } from 'next/font/google';
import { Fade } from 'react-awesome-reveal';

const poppins = Poppins({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  display: 'swap'
});
const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <>
      <nav
        className={`bg-white shadow-lg font-black font-display p-4 ${poppins.className}  z-50 h-[59px] md:h-[69px] flex justify-center items-center   w-full sticky top-0`}
      >
        <div className="flex flex-row items-center justify-between w-full align-center md:w-3/4">
          <Link
            href="/"
            className="text-xl font-normal text-black md:text-2xl "
          >
            AustinSwitchSociety
          </Link>
          <div className="hidden md:block md:mr-44">
            <Link
              href="/keyboards"
              className="text-xl font-bold text-center text-black "
            >
              Keyboards
            </Link>
          </div>
          {!isOpen ? (
            <div className="flex flex-row gap-4 items">
              <Link href="/cart">
                <CartIcon />
              </Link>
              <GiHamburgerMenu
                className="text-2xl md:hidden"
                onClick={toggleMenu}
              />
            </div>
          ) : (
            <Fade triggerOnce damping={1}>
              <BsXLg className="text-2xl " onClick={toggleMenu} />
            </Fade>
          )}
        </div>
      </nav>
      {isOpen && (
        <Fade direction="down" cascade triggerOnce duration={100}>
          <div
            className={`flex flex-col gap-4 pt-8 pb-8 overflow-auto font-normal bg-white border-b h-fit border-b-black border-opacity-40 ${poppins.className}`}
          >
            <NavItem toggleMenu={toggleMenu} route="keyboards" />
            <NavItem toggleMenu={toggleMenu} route="cart" />
          </div>
        </Fade>
      )}
    </>
  );
};

export default Navbar;
