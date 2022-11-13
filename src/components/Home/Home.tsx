import React from "react";
import { motion } from "framer-motion";
import HomeIconSlide from "./HomeIconSlide/HomeIconSlide";
import HomeGridSlide from "./HomeGridSlide/HomeGridSlide";
import { HomeSkillGridItemList } from "./HomeGridSlide/HomeSkillGridItemList";
import { HomeWhatDidGridItemList } from "./HomeGridSlide/HomeWhatDidGridItemList";

const Home: React.FunctionComponent = () => {
  const iconVariants = {
    out: {
      x: -100,
      opacity: 0,
    },
    in: {
      x: 0,
      opacity: 1,
    },
  };
  const box = {
    out: {
      x: -100,
      opacity: 0,
    },
    in: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.3,
        delayChildren: 0.3,
        staggerChildren: 0.3,
      },
    },
  };
  return (
    <motion.div
      className="w-full min-h-screen flex flex-col items-center"
      variants={box}
      initial="out"
      animate="in"
    >
      <motion.header
        variants={iconVariants}
        className="w-[calc(100%+4.5em)] text-[0.9em] bg-white py-4 flex items-center justify-center"
      >
        생각나는대로 열심히 업데이트중.
      </motion.header>
      <main className="w-full flex flex-col items-center">
        <section className="m-8 w-[80%] flex flex-row items-center justify-between ">
          <motion.article
            variants={iconVariants}
            className="text-[3em] font-bold"
          >
            <p>React, TypeScript.</p>
            <p className="text-[#777777]">프론트엔드의 떠오르는 빛.</p>
          </motion.article>
          <motion.aside variants={iconVariants} className="font-semibold">
            <p>JS 보다 이제는 TS.</p>
            <p>개발자 선호도 1위, React.</p>
          </motion.aside>
        </section>
        <HomeIconSlide />
        <HomeGridSlide
          slideTitle="다양한 언어로."
          skillList={HomeSkillGridItemList}
        />
        <HomeGridSlide
          slideTitle="어떤걸 해왔는지."
          skillList={HomeWhatDidGridItemList}
        />
      </main>
    </motion.div>
  );
};

export default Home;
