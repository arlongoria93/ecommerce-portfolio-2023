import React from 'react';
import { useRouter } from 'next/router';

export function NavItem({
  toggleMenu,
  route
}: {
  route: string;
  toggleMenu: () => void;
}) {
  const router = useRouter();
  return (
    <div className="bg-[#d4d4d4] bg-opacity-50">
      <button
        className="p-4 text-black text-opacity-90 text-start"
        onClick={() => {
          toggleMenu();
          router.push(`/${route}`);
        }}
      >
        {route}
      </button>
    </div>
  );
}
