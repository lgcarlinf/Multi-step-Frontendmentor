import React, { useEffect, useState } from "react";
import useInfoSave from "../hook/useInfoSave";
import PlanOption from "./PlanOption";
import Switch from "./Switch";

const SelectPlan = () => {
  const [selectPlan, setSelectPlan] = useState(null);
  const [planObj, setPlanObj] = useState({});
  const { plan, setPlan, isChecked, setIsChecked } = useInfoSave();

  const plans = [
    {
      option: 1,
      price: isChecked ? "$90/yr" : "$9/mo",
      title: "Arcade",
      img: "./icon-arcade.svg",
      time: isChecked ? "Yearly" : "Monthly",
    },
    {
      option: 2,
      price: isChecked ? "$120/yr" : "$12/mo",
      title: "Advanced",
      img: "./icon-advanced.svg",
      time: isChecked ? "Yearly" : "Monthly",
    },
    {
      option: 3,
      price: isChecked ? "$150/yr" : "$15/mo",
      title: "Pro",
      img: "./icon-pro.svg",
      time: isChecked ? "Yearly" : "Monthly",
    },
  ];

  const selectPlanChange = (option) => {
    setSelectPlan(option);
  };

  const handleChange = (e) => {
    setIsChecked(e.target.checked);
  };

  useEffect(() => {
    setIsChecked(isChecked);
  }, []);

  useEffect(() => {
    if (plan && Object.keys(plan).length > 0) {
      setSelectPlan(plan.option);
    }
  }, []);

  useEffect(() => {
    const findPlan =
      selectPlan && plans.find((plan) => plan.option === selectPlan);
    setPlanObj(findPlan);
  }, [selectPlan, isChecked]);

  useEffect(() => {
    if (planObj && Object.keys(planObj).length > 0) {
      setPlan(planObj);
    }
  }, [planObj, isChecked]);

  return (
    <div>
      <h2 className="text-2xl font-bold text-[#072954] mb-4 mt-2">
        Select your plan
      </h2>
      <p className="text-[#9699AB] font-medium w-[80%] text-lg mb-4">
        You have the option of monthly or yearly billing.
      </p>
      <div className="flex flex-col gap-3 w-full">
        <div className="flex flex-col gap-2 md:flex-row w-full">
          {plans.map((plan) => (
            <PlanOption
              key={plan.option}
              plan={plan}
              selectPlanChange={selectPlanChange}
              selectPlan={selectPlan}
            />
          ))}
        </div>
        <div className="bg-[#f8f9ff] flex justify-evenly items-center p-[8px] mt-3 rounded-lg">
          <p
            className={` font-semibold ${
              isChecked ? "text-[#9699AB]" : "text-[#042959]"
            }`}
          >
            Monthly
          </p>
          <Switch isChecked={isChecked} handleChange={handleChange} />
          <p
            className={`font-semibold ${
              isChecked ? "text-[#042959]" : "text-[#9699AB]"
            }`}
          >
            Yearly
          </p>
        </div>
      </div>
    </div>
  );
};

export default SelectPlan;
