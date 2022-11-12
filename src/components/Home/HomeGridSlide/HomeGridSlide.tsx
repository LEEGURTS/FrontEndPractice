import React from "react";
import { HomeSkillGridItemList } from "./HomeSkillGridItemList";
import HomeGrid from "./HomeGrid";
interface HomeGridSlideProps {
  slideTitle: string;
}

const HomeGridSlide: React.FunctionComponent<HomeGridSlideProps> = ({
  slideTitle,
}) => {
  return (
    <div className="w-[80%] flex flex-col">
      <p className="font-bold text-[1.5em]">{slideTitle}</p>
      <section className="mt-[1em] flex flex-row overflow-x-scroll scrollbar-hide">
        {HomeSkillGridItemList.map((item) => {
          return (
            <HomeGrid
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
