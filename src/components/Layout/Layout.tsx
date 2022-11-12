import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col items-center mx-[2em] mt-[38px]">
      {children}
    </div>
  );
};

export default Layout;
