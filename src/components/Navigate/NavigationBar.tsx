import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const NavigationBar: React.FunctionComponent = () => {
  const navigate = useNavigate();
  return (
    <div
      className="w-full h-[3em] flex flex-row items-center justify-around fixed top-0 bg-black bg-opacity-[80%] text-white font-extralight text-[0.8em]"
      style={{ zIndex: 100 }}
    >
      <button
        onClick={() => navigate("/")}
        className="hover:bg-slate-700 duration-300 p-[5px] rounded-[5px]"
      >
        Home
      </button>
      <button
        onClick={() => navigate("/arcodian")}
        className="hover:bg-slate-700 duration-300 p-[5px] rounded-[5px]"
      >
        Arcodian
      </button>
      <button
        onClick={() => navigate("/grid")}
        className="hover:bg-slate-700 duration-300 p-[5px] rounded-[5px]"
      >
        Grid
      </button>
      <button
        onClick={() => navigate("/slide")}
        className="hover:bg-slate-700 duration-300 p-[5px] rounded-[5px]"
      >
        Slide
      </button>
      <button
        onClick={() => navigate("/typhography")}
        className="hover:bg-slate-700 duration-300 p-[5px] rounded-[5px]"
      >
        Typho
      </button>
    </div>
  );
};

export default NavigationBar;
