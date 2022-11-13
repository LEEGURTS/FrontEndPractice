import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  bgColor?: string;
}

const Layout: React.FunctionComponent<LayoutProps> = ({
  children,
  bgColor,
}) => {
  return (
    <div
      className={
        "flex flex-col items-center px-[2em] mt-[38px] overflow-visible"
      }
      style={{ backgroundColor: `#${bgColor}` }}
    >
      {children}
    </div>
  );
};

export default Layout;
