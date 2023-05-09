import React from "react";
import Nav from "./navbar";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={`grid grid-cols-1 ${roboto.className}`}>
      <Nav />
      <main className="flex flex-col items-center h-screen">{children}</main>
    </div>
  );
};

export default Layout;
