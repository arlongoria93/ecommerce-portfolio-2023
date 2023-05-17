import React, { use, useEffect, useState } from 'react';
import { Keyboard } from '../types/Keyboard';
import useSWR from 'swr';
import Image from 'next/image';
import { useRouter } from 'next/router';
import FullWidthImageContainer from './FullWidthImageContainer';

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
    <div className="z-20 flex flex-col items-center w-full p-4 h-1/3 sm:h-3/4">
      <FullWidthImageContainer />
    </div>
  );
};

export default Latest;
