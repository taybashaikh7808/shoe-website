import React from "react";

const Input = ({ handleCheckbox, value, title, color, name }) => {
  return (
    <div className="pl-15 mt-4 space-y-2 ml-20">
      <label className="flex items-center space-x-2">
        <input
          onChange={handleCheckbox}
          type="checkbox"
          name={name}
          value={value}
          style={{ accentColor: color }} // This dynamically sets the checkbox color
          className="mr-2"
        />

        {title}
      </label>
    </div>
  );
};

export default Input;
