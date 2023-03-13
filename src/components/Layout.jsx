import React, { useEffect, useState } from "react";
import useInfoSave from "../hook/useInfoSave";

const Layout = ({
  children,
  handleNextStepClick,
  handlePrevStepClick,
  activeNumber,
}) => {
  const { plan, addons } = useInfoSave();
  const [isDisabled, setIsDisabled] = useState(false);

  const checkDisableButton = () => {
    if (activeNumber === 2) {
      if (plan?.title) {
        setIsDisabled(false);
      } else {
        setIsDisabled(true);
      }
    }
  };

  useEffect(() => {
    checkDisableButton();
  }, [plan, addons]);

  return (
    <div className="flex flex-col justify-between  h-full  w-full absolute md:static md:w-2/3">
      <form
        className={`relative bg-white p-8 md:px-0 mx-6 rounded-xl transition-all max-[440px]:mx-[5%] md:z-10 mt-[120px] md:mt-0 md:h-full md:flex md:flex-col  ${
          activeNumber === 5 ? "md:justify-center" : "md:justify-between"
        }`}
      >
        {children}
        {activeNumber !== 5 && (
          <footer
            className={` absolute bottom-[-100px] left-0  md:static w-full font-bold flex ${
              activeNumber === 1 ? "justify-end" : "justify-between"
            } items-center jbg-white p-6 pr-0 md:p-0 `} //max-[359px]:bottom-[-180px] max-[375px]:bottom-[-40px]
          >
            {activeNumber != 1 && (
              <div
                className="text-[#9699AB] hover:text-[#042959] cursor-pointer hover:scale-105 transition-all duration-300"
                onClick={handlePrevStepClick}
              >
                Go Back
              </div>
            )}
            <button
              type="button"
              className={` rounded-md  outline-none border-none active:outline-none active:border-none focus:outline-none focus:border-none hover:scale-105 transition-all duration-300 ${
                isDisabled
                  ? "bg-[#eee] text-[#ababab] border-[1px] border-[#ababab] hover:scale-100"
                  : " text-white"
              } ${activeNumber === 4 ? "bg-[#473fff]" : "bg-[#042959]"} }`}
              onClick={handleNextStepClick}
              disabled={isDisabled}
            >
              {activeNumber === 4 ? "Confirm" : "Next Step"}
            </button>
          </footer>
        )}
      </form>
    </div>
  );
};

export default Layout;
