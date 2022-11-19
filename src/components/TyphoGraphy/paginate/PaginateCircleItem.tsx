import React from "react";

interface PaginateCircleItemProps {
  selectedIdx: number;
  itemIdx: number;
  setSelectedIdx: React.Dispatch<React.SetStateAction<number>>;
}

const PaginateCircleItem: React.FunctionComponent<PaginateCircleItemProps> = ({
  selectedIdx,
  itemIdx,
  setSelectedIdx,
}) => {
  return (
    <div
      className="w-[1em] h-[1em] rounded-[999px] border-[1px] border-[#000000] my-[1.5em] cursor-pointer duration-300"
      style={{
        backgroundColor: itemIdx == selectedIdx ? "black" : "transparent",
      }}
      onClick={() => setSelectedIdx(itemIdx)}
    />
  );
};

export default PaginateCircleItem;
