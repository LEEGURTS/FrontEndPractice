import React from "react";

interface HomeGridProps {
  className?: string;
  imgPath: string;
  title: string;
  content: string;
}

const HomeGrid: React.FunctionComponent<HomeGridProps> = ({
  className,
  title,
  imgPath,
  content,
}) => {
  return (
    <article
      className={
        "min-w-[16em] w-[20%] min-h-[24em] h-[30%] mr-[1em] rounded-[1em] bg-white flex flex-col items-center font-semibold" +
        className
      }
      style={{ boxShadow: "1px 1px 1em 0px rgba(0, 0, 0, 0.1)" }}
    >
      <div className="w-[80%] flex flex-col items-start">
        <p className="mt-[1em] text-[0.5em] text-[#333333]">{title}</p>
        <p className="text-[1em] font-bold">{content}</p>
      </div>
      <div className="flex flex-grow" />
      <img src={imgPath} className="w-[80%]" />
    </article>
  );
};

export default HomeGrid;
