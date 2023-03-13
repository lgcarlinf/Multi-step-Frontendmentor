import React, { createContext, useState } from "react";

export const FormContext = createContext();

const FormProvider = ({ children }) => {
  const [plan, setPlan] = useState(null);
  const [addons, setAddons] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  const totalPrice = () => {
    let total = 0;
    if (plan) {
      total += parsePrice(plan.price);
    }
    if (addons.length > 0) {
      addons.forEach((addon) => {
        total += parsePrice(addon.price);
      });
    }
    return total;
  };

  const parsePrice = (price) => {
    const regex = /\$(\d+)/;
    const match = regex.exec(price);
    return match && parseInt(match[1]);
  };

  return (
    <FormContext.Provider
      value={{
        isChecked,
        setIsChecked,
        plan,
        setPlan,
        addons,
        setAddons,
        totalPrice,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
