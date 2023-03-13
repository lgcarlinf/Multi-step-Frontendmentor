import React from "react";

const Number = ({ number, text, isActive }) => {
  return (
    <>
      <div className="flex md:items-center md:gap-4">
        <div
          className={`flex justify-center items-center rounded-full z-20 border-[2px] border-white transition-all duration-300 h-[40px] w-[40px] font-bold ${
            isActive ? "bg-[#bee1fe] text-[#072954]" : ""
          }`}
        >
          {number}
        </div>
        <div className="hidden md:block">
          <p className="uppercase text-[#8989ff] font-bold">Step {number}</p>
          <p className="uppercase font-bold ">{text}</p>
        </div>
      </div>
    </>
  );
};

export default Number;
