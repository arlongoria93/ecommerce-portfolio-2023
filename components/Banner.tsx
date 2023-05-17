import React from 'react';
import { Roboto } from 'next/font/google';

// Create a Banner component that will display a banner on the homepage.

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
});

type Props = {
  visible: boolean;
};
const Banner = ({ visible }: Props) => {
  if (!visible) return null;
  return (
    <div
      className={`flex flex-col items-center justify-center w-full p-2 font-normal text-white bg-black align-center ${roboto.className}`}
    >
      Use Discount Code: ON3PUR for 20% Off
    </div>
  );
};

export default Banner;
