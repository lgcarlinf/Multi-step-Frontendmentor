import React, { useEffect, useState } from "react";
import useInfoSave from "../hook/useInfoSave";

const Finishing = ({ redirectToSelectPlan }) => {
  const { plan, addons, totalPrice, isChecked } = useInfoSave();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calcTotal = totalPrice();
    setTotal(calcTotal);
  }, [plan, addons, isChecked]);

  return (
    <div>
      <h2 className="text-2xl font-bold text-[#072954] mb-4 mt-2">
        Finishing up
      </h2>
      <p className="text-[#9699AB] font-medium w-[80%] text-md mb-4">
        Double-check everything look s OK before confirming.
      </p>
      <div className="flex flex-col gap-3 w-full bg-[#f8f9ff] rounded-lg p-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-[#042959] font-bold">
              {plan.title}({plan.time})
            </p>
            <p
              className="text-[#9699AB] underline cursor-pointer block w-fit"
              onClick={redirectToSelectPlan}
            >
              Change
            </p>
          </div>
          <div>
            <p className="text-[#042959] font-bold">{plan.price}</p>
          </div>
        </div>
        {addons.length > 0 && <hr />}
        {addons.length > 0 && (
          <div className="flex justify-between items-center">
            <div>
              {addons.map((addon) => (
                <p key={addon.option} className="text-[#9699AB] font-edium">
                  {addon.title}
                </p>
              ))}
            </div>
            <div>
              {addons.map((addon) => (
                <p key={addon.option} className="text-[#9699AB] font-edium">
                  {addon.price}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-between p-4">
        <p className="text-[#9699AB] font-medium ">Total (per {plan.time})</p>
        <p className="text-[#072954] font-semibold">${total}/mo</p>
      </div>
    </div>
  );
};

export default Finishing;
