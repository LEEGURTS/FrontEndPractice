import React from "react";

interface IconProps {
  path: string;
  content: string;
}

const HomeIconSlideItem: React.FunctionComponent<IconProps> = ({
  path,
  content,
}) => {
  return (
    <div className="min-w-[6em] flex flex-col items-center justify-center text-[1em] font-normal">
      <img src={path} alt="" className="w-[4em] h-[4em]" />
      <p className="mt-[1em]">{content}</p>
    </div>
  );
};

export default HomeIconSlideItem;
