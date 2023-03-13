import React, { useEffect, useState } from "react";
import useInfoSave from "../hook/useInfoSave";
import AddonOption from "./AddonOption";

const Addons = () => {
  const { isChecked } = useInfoSave();
  const [addonsSelected, setAddonsSelected] = useState([]);
  const { setAddons } = useInfoSave();

  const addons = [
    {
      option: 1,
      title: "Online service",
      description: "Access to multiplayer games",
      price: isChecked ? "+$10/yr" : "+$1/mo",
    },
    {
      option: 2,
      title: "Larger storage",
      description: "Extra 1TB of cloud save",
      price: isChecked ? "+$20/yr" : "+$2/mo",
    },
    {
      option: 3,
      title: "Customizable profile",
      description: "Customize them on your profile",
      price: isChecked ? "+$20/yr" : "+$2/mo",
    },
  ];

  useEffect(() => {
    if (addonsSelected) {
      setAddons(addonsSelected);
    }
  }, [addonsSelected]);

  return (
    <div>
      <h2 className="text-2xl font-bold text-[#072954] mb-4 mt-2">
        Select your plan
      </h2>
      <p className="text-[#9699AB] font-medium w-[80%] text-lg mb-4">
        You have the option of monthly or yearly billing.
      </p>
      <div className="flex flex-col gap-3 w-full">
        <div className="flex flex-col gap-2  w-full">
          {addons.map((addon) => (
            <AddonOption
              key={addon.option}
              addon={addon}
              setAddonsSelected={setAddonsSelected}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Addons;
