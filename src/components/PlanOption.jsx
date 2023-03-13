import React from "react";

const PlanOption = ({ plan, selectPlanChange, selectPlan }) => {
  const isSelected = selectPlan === plan.option;
  return (
    <div
      key={plan.option}
      className={`w-full flex md:flex-col md:items-start md:w-1/3 justify-start gap-4 p-3 items-center border-[1px]  rounded-lg cursor-pointer ${
        isSelected ? "border-[#7d76c6] bg-[#f8f9ff]" : "border-[#e5e4eb]"
      }`}
      onClick={() => selectPlanChange(plan.option)}
    >
      <img src={plan.img} alt="" />
      <div>
        <h3 className="text-[#072954] font-bold text-lg">{plan.title}</h3>
        <p className="text-[#9699AB] font-medium text-sm">{plan.price}</p>
      </div>
    </div>
  );
};

export default PlanOption;
