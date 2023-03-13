import React, { useState } from "react";

const Switch = ({ isChecked, handleChange }) => {
  return (
    <div>
      <label className="switch">
        <input
          type="checkbox"
          value={isChecked}
          checked={isChecked}
          onChange={handleChange}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default Switch;
