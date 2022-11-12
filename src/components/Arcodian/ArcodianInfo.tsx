import React from "react";

interface ArcodianInfoProps {
  id: number;
  path: string;
}

const ArcodianInfo: React.FunctionComponent<ArcodianInfoProps> = ({
  id,
  path,
}) => {
  return (
    <div className="mt-[4em] flex flex-col items-center font-bold">
      <p>Image Id : {id}</p>
      <a href={path}>Image Path : {path}</a>
    </div>
  );
};

export default ArcodianInfo;
