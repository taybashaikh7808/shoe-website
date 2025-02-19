import React from "react";

const Input = ({ handleCheckbox, value, title, color, name }) => {
  return (
    <div className="pl-15 mt-4 space-y-2 ml-20">
      <label className="flex items-center space-x-2">
        <input
          onChange={handleCheckbox} // Make sure this is handleCheckbox, not onChange
          type="checkbox"
          name={name}
          value={value}
          style={{ accentColor: color }}
          className="mr-2"
        />

        {title}
      </label>
    </div>
  );
};

export default Input;
