import React from 'react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
  display: 'swap'
});

const FullWidthImageContainer = () => {
  return (
    <div className={`relative w-full h-full ${poppins.className}`}>
      <img
        className="absolute object-cover w-full h-full"
        src="/images/featured.jpg"
        alt="Your Image"
      />
      <div className="absolute inset-0 opacity-60 bg-gradient-to-t from-black"></div>
      <div className="absolute inset-0 opacity-70 bg-gradient-to-b from-black"></div>
      <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full gap-8 p-4 text-center text-white">
        <h1 className="text-4xl font-normal ">
          Upgrade Your Typing Experience
        </h1>
        <p className="text-lg">Discover High-Quality Mechanical Keyboards</p>
        <button className="p-3 pl-6 pr-6 border-2">Shop Now</button>
      </div>
    </div>
  );
};

export default FullWidthImageContainer;
