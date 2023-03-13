import React from "react";

const ThankYou = () => {
  return (
    <div className="my-20 md:my-24 md:pr-16">
      <img
        src="./icon-thank-you.svg"
        alt="thank you"
        className="text-center mx-auto"
      />
      <h1 className="text-3xl font-bold text-[#062652] text-center">
        Thank You!
      </h1>
      <p className="text-[#9699AB] mt-4 font-semibold text-center min-[440px]:w-[320px] md:w-[480px] mx-auto">
        Thanks For confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};

export default ThankYou;
