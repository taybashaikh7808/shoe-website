import React from "react";

const Buttons = ({ handleButton, value, title }) => {
  
  return (
    <>
      <button onClick={handleButton} value={value} className="border border-gray-300 px-4 py-1 text-black rounded-md">
        {title}
      </button>
    </>
  );
};

export default Buttons;
