import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import PaginateCircle from "./paginate/PaginateCircle";

const TyphoGraphy: React.FunctionComponent = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const typhoPageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const wheelHandler = (e: WheelEvent) => {
      e.preventDefault();
      const deltaY = e.deltaY;
      const scrollTop = window.scrollY;
      const pageHeight = window.innerHeight - 38.4;
      console.log(selectedIdx);
      if (deltaY > 0) {
        window.scrollBy({
          top: pageHeight,
          behavior: "smooth",
        });
      } else {
        window.scrollBy({
          top: -pageHeight,
          behavior: "smooth",
        });
      }
    };

    typhoPageRef.current?.addEventListener("wheel", wheelHandler);
    return () => {
      typhoPageRef.current?.removeEventListener("wheel", wheelHandler);
    };
  }, [typhoPageRef]);

  return (
    <div className="flex flex-col items-center" ref={typhoPageRef}>
      <PaginateCircle
        pageLength={7}
        selectedIdx={selectedIdx}
        setSelectedIdx={setSelectedIdx}
        className="fixed top-[50%] -translate-y-[50%] right-2"
      />
      {Array(7)
        .fill(0)
        .map((_, idx) => {
          return (
            <motion.p
              key={idx}
              className="font-bold text-[2em] w-full h-[calc(100vh-38.4px)] flex flex-col items-center justify-center"
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
            >{`${idx + 1} 번째의 놀라운 문구.`}</motion.p>
          );
        })}
    </div>
  );
};

export default TyphoGraphy;
