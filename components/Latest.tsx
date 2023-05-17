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
    <div className="flex flex-col items-center w-full p-4 h-[600px] sm:h-screen">
      <FullWidthImageContainer />
    </div>
  );
};

export default Latest;
