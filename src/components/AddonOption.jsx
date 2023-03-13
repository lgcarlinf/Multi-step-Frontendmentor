import React, { useEffect, useState } from "react";
import Checkbox from "./Checkbox";

const AddonOption = ({ addon, setAddonsSelected }) => {
  const [isCheck, setIsCheck] = useState(false);
  const handleCheckboxChange = (event) => {
    setIsCheck(event.target.checked);
  };

  useEffect(() => {
    if (isCheck) {
      setAddonsSelected((prev) => [...prev, addon]);
    }
  }, [isCheck]);

  return (
    <div
      key={addon.option}
      className={`w-full flex justify-between gap-4 p-3 items-center border-[1px]  rounded-lg ${
        isCheck ? "border-[#7d76c6] bg-[#f8f9ff]" : "border-[#e5e4eb]"
      }`}
    >
      <div className="  flex items-center gap-4 justify-between">
        <Checkbox isCheck={isCheck} setIsCheck={handleCheckboxChange} />
        <div>
          <h3 className="text-[#072954] font-bold text-lg">{addon.title}</h3>
          <p className="text-[#9699AB] font-medium text-sm">
            {addon.description}
          </p>
        </div>
      </div>
      <p className="text-[#7d76c6] pr-4 font-medium text-sm">{addon.price}</p>
    </div>
  );
};

export default AddonOption;
