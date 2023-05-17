import React, { useState } from 'react';
import { BsArrow90DegRight, BsCheckCircleFill } from 'react-icons/bs';

type Props = {};

const Footer = (props: Props) => {
  const [email, setEmail] = useState('');
  const [isEmail, setIsEmail] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission logic here
    setIsEmail(true);
    // Reset the form
    setEmail('');
  };
  return (
    <div className="flex flex-col items-center justify-center p-4 mt-4 bg-black max-h-xl">
      <h1 className="mb-4 text-lg font-medium text-white ">
        Subscribe to our emails
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex w-1/2 pt-3 pb-3 mb-3 transition duration-300 ease-in-out delay-150 bg-black border border-white border-opacity-40 hover:border-opacity-100 focus-within:border-opacity-10 "
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 font-normal text-white bg-black focus:outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="px-4 py-2 font-semibold text-white">
          <BsArrow90DegRight />
        </button>
      </form>
      {/* if email is true */}
      {isEmail && (
        <div className="flex flex-row items-center gap-2 align-center">
          <BsCheckCircleFill className="bg-black text-green fill-green-600" />
          <p className="mt-1.5 mb-2 text-sm font-normal text-white text-opacity-80">
            Thank you for subscribing!
          </p>
        </div>
      )}
      {/* Line divide */}
      <div className="w-full h-px my-4 bg-white bg-opacity-10"></div>
      {/* TM Austin Switch Society */}
      <div className="flex flex-col items-center justify-center">
        <p className="mb-2 text-sm font-normal text-white text-opacity-40">
          TM Austin Switch Society 2021 © All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
