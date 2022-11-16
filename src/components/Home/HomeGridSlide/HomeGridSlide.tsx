import React from "react";
import HomeGrid from "./HomeGrid";

interface HomeGridSlideProps {
  slideTitle: string;
  skillList: { img: string; title: string; content: string }[];
}

const HomeGridSlide: React.FunctionComponent<HomeGridSlideProps> = ({
  slideTitle,
  skillList,
}) => {
  return (
    <div className="w-[80%] my-[2em] flex flex-col">
      <p className="font-bold text-[1.5em]">{slideTitle}</p>
      <section className="mt-[1em] flex flex-row overflow-x-scroll  scrollbar-hide">
        {skillList.map((item) => {
          return (
            <HomeGrid
              key={item.img}
              title={item.title}
              imgPath={item.img}
              content={item.content}
            />
          );
        })}
      </section>
    </div>
  );
};

export default HomeGridSlide;
