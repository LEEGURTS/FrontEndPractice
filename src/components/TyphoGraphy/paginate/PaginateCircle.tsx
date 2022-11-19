import React from "react";
import PaginateCircleItem from "./PaginateCircleItem";

interface PaginateCircle {
  pageLength: number;
  selectedIdx: number;
  className?: string;
  setSelectedIdx: React.Dispatch<React.SetStateAction<number>>;
}

const PaginateCircle: React.FunctionComponent<PaginateCircle> = ({
  pageLength,
  selectedIdx,
  className,
  setSelectedIdx,
}) => {
  return (
    <div className={className}>
      {Array(pageLength)
        .fill(0)
        .map((_, idx) => {
          return (
            <PaginateCircleItem
              key={idx}
              selectedIdx={selectedIdx}
              itemIdx={idx}
              setSelectedIdx={setSelectedIdx}
            />
          );
        })}
    </div>
  );
};

export default PaginateCircle;
