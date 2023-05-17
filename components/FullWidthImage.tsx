import Image from 'next/image';
import React from 'react';

type Props = {
  image?: string;
};

const FullWidthImageContainer = ({ image }: Props) => {
  if (!image) {
    image = '/images/featured.jpg';
  }
  return (
    <div className="relative w-full h-full">
      <Image
        className="object-contain w-full h-full "
        src={image}
        alt="Your Image"
        fill
        sizes="(max-width: 640px) 100vw, 640px"
      />
    </div>
  );
};

export default FullWidthImageContainer;
