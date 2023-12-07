import Menu from "@/components/header/Menu";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="flex ">
      <Menu />
      {children}
    </div>
  );
};

export default Layout;
