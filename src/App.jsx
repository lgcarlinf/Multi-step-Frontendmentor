import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import Addons from "./components/Addons";
import Finishing from "./components/Finishing";
import Layout from "./components/Layout";
import Number from "./components/Number";
import PersonalInfo from "./components/PersonalInfo";
import SelectPlan from "./components/SelectPlan";
import ThankYou from "./components/ThankYou";
import useInfoSave from "./hook/useInfoSave";

function App() {
  const [activeNumber, setActiveNumber] = useState(1);
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [error, setError] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const { plan } = useInfoSave();

  const numberOptions = [
    { number: 1, text: "your info" },
    { number: 2, text: "select plan" },
    { number: 3, text: "add-ons" },
    { number: 4, text: "summary" },
  ];

  const handleNextStepClick = () => {
    if (personalInfo.name === "") {
      setError((error) => ({ ...error, name: "This field is required" }));
    }
    if (personalInfo.email === "") {
      setError((error) => ({ ...error, email: "This field is required" }));
    }
    if (personalInfo.phone === "") {
      setError((error) => ({ ...error, phone: "This field is required" }));
    }
    if (
      personalInfo.name === "" ||
      personalInfo.email === "" ||
      personalInfo.phone === ""
    ) {
      return;
    }
    setActiveNumber((number) => number + 1);
  };

  const handlePrevStepClick = () => {
    if (activeNumber === 1) return;
    setActiveNumber((number) => number - 1);
  };

  const redirectToSelectPlan = () => {
    if (activeNumber === 1) return;
    setActiveNumber(2);
  };

  const heightGenerate = () => {
    if (activeNumber === 1 || activeNumber === 5) {
      return "min-h-[710px]";
    }
    if (activeNumber === 2 || activeNumber === 4) {
      return "min-h-[740px]";
    }
    if (activeNumber === 3) {
      return "min-h-[840px]";
    }
  };

  return (
    <div
      className={`bg-[#eff5ff] w-screen  ${heightGenerate()} md:min-h-screen md:h-screen md:flex md:justify-center md:items-center`}
    >
      <div className="flex flex-col md:flex-row md:justify-between App h-screen w-screen md:w-[auto] md:h-[80%] bg-[#eff5ff] md:bg-white md:rounded-xl relative md:m-10">
        <header className="md:m-6 md:p-4 md:h-auto w-screen md:w-1/3 md:rounded-lg md:bg-[url('/bg-sidebar-desktop.svg')] flex justify-center bg-[url('/bg-sidebar-mobile.svg')] h-52  bg-no-repeat bg-cover relative md:static ">
          <div className="flex md:flex-col gap-4 mt-8">
            {numberOptions.map((numberOption, i) => (
              <Number
                key={i}
                number={numberOption.number}
                text={numberOption.text}
                isActive={numberOption.number === activeNumber}
              />
            ))}
          </div>
        </header>
        {activeNumber === 1 && (
          <Layout
            handleNextStepClick={handleNextStepClick}
            handlePrevStepClick={handlePrevStepClick}
            activeNumber={activeNumber}
          >
            <PersonalInfo
              error={error}
              setError={setError}
              personalInfo={personalInfo}
              setPersonalInfo={setPersonalInfo}
            />
          </Layout>
        )}
        {activeNumber === 2 && (
          <Layout
            handleNextStepClick={handleNextStepClick}
            handlePrevStepClick={handlePrevStepClick}
            activeNumber={activeNumber}
          >
            <SelectPlan />
          </Layout>
        )}
        {activeNumber === 3 && (
          <Layout
            handleNextStepClick={handleNextStepClick}
            handlePrevStepClick={handlePrevStepClick}
            activeNumber={activeNumber}
          >
            <Addons />
          </Layout>
        )}
        {activeNumber === 4 && plan && Object.keys(plan).length > 0 && (
          <Layout
            handleNextStepClick={handleNextStepClick}
            handlePrevStepClick={handlePrevStepClick}
            activeNumber={activeNumber}
          >
            <Finishing redirectToSelectPlan={redirectToSelectPlan} />
          </Layout>
        )}
        {activeNumber === 5 && (
          <Layout
            handleNextStepClick={handleNextStepClick}
            handlePrevStepClick={handlePrevStepClick}
            activeNumber={activeNumber}
          >
            <ThankYou />
          </Layout>
        )}
      </div>
    </div>
  );
}

export default App;
