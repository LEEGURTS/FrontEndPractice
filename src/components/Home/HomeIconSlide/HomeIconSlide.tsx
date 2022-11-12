import React from "react";
import { motion } from "framer-motion";
import { HomeItemList } from "./HomeItemList";
import HomeIconSlideItem from "./HomeIconSlideItem";
const HomeIconSlide: React.FunctionComponent = () => {
  const homeIconSlideItemList = HomeItemList.map((item) => {
    return (
      <HomeIconSlideItem
        key={item.path}
        path={item.path}
        content={item.content}
      />
    );
  });

  return (
    <motion.nav
      className="w-[80%] my-[3em] flex flex-row items-center scrollbar-hide"
      style={{
        overflow: "scroll",
      }}
    >
      {homeIconSlideItemList}
    </motion.nav>
  );
};

export default HomeIconSlide;
