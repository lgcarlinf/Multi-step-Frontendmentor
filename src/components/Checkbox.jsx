import React from "react";

const Checkbox = ({ isCheck, setIsCheck }) => {
  return (
    <>
      <label className="custom-checkbox cursor-pointer">
        <input
          type="checkbox"
          checked={isCheck}
          value={isCheck}
          onChange={setIsCheck}
        />
        <span className="checkmark"></span>
      </label>
    </>
  );
};

export default Checkbox;
