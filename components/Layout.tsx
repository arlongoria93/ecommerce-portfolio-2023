import React from "react";
import Nav from "./navbar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Nav />
      <main className="container mx-auto my-7">{children}</main>
    </div>
  );
};

export default Layout;
