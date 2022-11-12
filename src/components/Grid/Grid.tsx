import { motion } from "framer-motion";
import React, { useRef, useState, useCallback } from "react";

const Grid: React.FunctionComponent = () => {
  const observer = useRef<IntersectionObserver>();
  const [index, setIndex] = useState(0);

  const onObserverChanged = useCallback(
    (node: HTMLDivElement | null) => {
      if (observer.current) {
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver(
        (e) => {
          if (e[0].isIntersecting) {
            setIndex(index + 1);
          }
        },
        { threshold: 0.4 }
      );
      if (node) {
        observer.current.observe(node);
      }
    },
    [index, observer]
  );

  return (
    <div className="w-full min-h-screen">
      <div className="w-full flex flex-wrap p-20 gap-10 justify-center items-start">
        {Array(index * 32 + 32)
          .fill(0)
          .map((_, idx) => {
            const lastIdx = (index + 1) * 32 - 1;
            return (
              <motion.div
                key={idx}
                initial={{ y: 50 }}
                viewport={{ once: true }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5 },
                }}
                ref={idx == lastIdx ? onObserverChanged : null}
                className="md:w-52 md:h-52 w-80 h-80 relative"
              >
                <img
                  className="rounded-[1em] drop-shadow-lg"
                  src={"http://placeimg.com/250/250/any?random=" + idx}
                ></img>
              </motion.div>
            );
          })}
      </div>
    </div>
  );
};

export default Grid;
