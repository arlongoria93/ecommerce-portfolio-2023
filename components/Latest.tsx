import React, { use, useEffect, useState } from 'react';
import { Keyboard } from '../types/Keyboard';
import useSWR from 'swr';
import Image from 'next/image';
import { useRouter } from 'next/router';

// Create a Latest component that will display the latest product we have in our store.

const Latest = () => {
  const [latest, setLatest] = useState({} as Keyboard);
  const { data, isLoading, error } = useSWR('/api/keyboard');
  const router = useRouter();
  useEffect(() => {
    if (data) {
      setLatest(data.products[0]);
    }
  }, [data]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return (
    <div className="z-20 flex flex-col items-center w-full p-4 sm:flex-row">
      <div className="flex flex-col items-center justify-center w-full h-full gap-3 p-8 border-2 border-black">
        <h1 className="text-4xl font-bold">Our Latest</h1>
        <button
          className="p-2 pl-8 pr-8 text-xl text-white bg-black "
          onClick={() => {
            router.push('/keyboards');
          }}
        >
          Shop All
        </button>
      </div>

      <div className="flex flex-col items-center justify-center w-full h-full p-8 border-2 border-t-0 border-black sm:border-l-0 sm:border-t-2">
        <Image
          onClick={() => {
            router.push(`/products/${latest.id}`);
          }}
          className="hover:cursor-pointer"
          src={latest.image}
          alt={latest.name}
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default Latest;
