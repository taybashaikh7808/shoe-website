import React from "react";

const Input = ({ handleCheckbox, value, title, color, name }) => {
  return (
    <>
      <div className=" pl-15 mt-4 space-y-2 ml-20">
        <label className="flex items-center space-x-2">
          <input
            onChange={handleCheckbox}
            type="checkbox"
            className="mr-2"
            name={name}
            value={value}
            style={{ backgroundColor: color }}
          />
          {title}
        </label>
      </div>
    </>
  );
};

export default Input;
