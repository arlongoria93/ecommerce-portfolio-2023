import React from "react";
import Nav from "./navbar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="grid grid-cols-1">
      <Nav />
      <main className="flex flex-col items-center h-screen">{children}</main>
    </div>
  );
};

export default Layout;
