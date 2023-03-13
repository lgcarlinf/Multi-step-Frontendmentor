import React from "react";

const PersonalInfo = ({ error, setError, personalInfo, setPersonalInfo }) => {
  const { name, email, phone } = personalInfo;

  const handleChange = (e) => {
    setError((error) => ({ ...error, [e.target.name]: "" }));
    setPersonalInfo((info) => ({
      ...info,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div>
      <h2 className="text-3xl font-bold text-[#072954] mb-4 mt-2">
        Personal info
      </h2>
      <p className="text-[#9699AB] font-medium w-[80%] text-lg mb-4">
        Please provide your name, email address, and phone number.
      </p>
      <div>
        <div className="flex justify-between">
          <label htmlFor="" className="text-[#072954] block">
            Name
          </label>
          {error.name !== "" && (
            <label className="text-red-600 font-semibold text-sm">
              {error.name}
            </label>
          )}
        </div>
        <input
          name="name"
          value={name}
          onChange={handleChange}
          type="text"
          placeholder="e.g. Stephen King"
          className={`block w-full bg-white border-[1px] text-[#9699AB] p-2 placeholder:font-bold rounded-md outline-none focus:border-indigo-600 ${
            error.name ? "border-red-600 " : ""
          }`}
        />
      </div>
      <div className="mt-4">
        <div className="flex justify-between">
          <label htmlFor="" className="text-[#072954] block">
            Email Address
          </label>
          {error.email !== "" && (
            <label className="text-red-600 font-semibold text-sm">
              {error.email}
            </label>
          )}
        </div>
        <input
          name="email"
          value={email}
          type="email"
          onChange={handleChange}
          placeholder="e.g. stephenking@lorem.com"
          className={`block w-full bg-white border-[1px] text-[#9699AB] p-2 placeholder:font-bold rounded-md outline-none focus:border-indigo-600 ${
            error.email ? "border-red-600 " : ""
          }}`}
        />
      </div>
      <div className="mt-4">
        <div className="flex justify-between">
          <label htmlFor="" className="text-[#072954] block">
            Phone Number
          </label>
          {error.phone !== "" && (
            <label className="text-red-600 font-semibold text-sm">
              {error.phone}
            </label>
          )}
        </div>
        <input
          name="phone"
          value={phone}
          onChange={handleChange}
          type="text"
          placeholder="e.g. +1 234 567 890"
          className={`block w-full bg-white border-[1px] text-[#9699AB] p-2 placeholder:font-bold rounded-md outline-none focus:border-indigo-600 ${
            error.phone ? "border-red-600 " : ""
          }}`}
        />
      </div>
    </div>
  );
};

export default PersonalInfo;
