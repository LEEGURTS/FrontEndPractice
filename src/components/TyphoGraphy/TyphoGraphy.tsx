import React from "react";

const TyphoGraphy: React.FunctionComponent = () => {
  return (
    <article className="flex flex-col items-center">
      {Array(15)
        .fill(0)
        .map((_, idx) => {
          return (
            <p key={idx} className="font-bold text-[2em] my-[5em]">{`${
              idx + 1
            } 번째의 놀라운 문구.`}</p>
          );
        })}
    </article>
  );
};

export default TyphoGraphy;
