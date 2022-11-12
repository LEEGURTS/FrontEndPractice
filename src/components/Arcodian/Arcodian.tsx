import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { arcodianItems } from "./arcodianItems";
import ArcodianInfo from "./ArcodianInfo";

const Arcodian: React.FunctionComponent = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);
  return (
    <>
      <div className="w-full h-full max-w-[1000px] flex flex-row items-center justify-start rounded-[10px] bg-slate-100 overflow-hidden">
        <AnimatePresence initial={false}>
          {arcodianItems.map((arcodianItem) => {
            return (
              <motion.div
                key={arcodianItem.id}
                animate={{
                  width: selectedIndex === arcodianItem.id ? "50%" : "10%",
                  height: "70vh",
                }}
                transition={{ type: "tween", duration: 0.5 }}
                onClick={() => {
                  setSelectedIndex(arcodianItem.id);
                  console.log("Clicked");
                }}
              >
                <img
                  alt={arcodianItem.id.toString()}
                  src={arcodianItem.path}
                  className="w-full h-full object-cover object-center cursor-pointer"
                ></img>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
      <ArcodianInfo
        id={selectedIndex}
        path={arcodianItems[selectedIndex - 1].path}
      />
    </>
  );
};

export default Arcodian;
