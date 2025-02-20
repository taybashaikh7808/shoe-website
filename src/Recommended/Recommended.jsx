import React from "react";
import Buttons from "../components/Buttons";


const Recommended = ({ handleButton }) => {
  return (
    <>
    
      <div className="font-bold text-lg h-[40px] w-full flex items-center pl-10 pt-4">
        Recommended
      </div>
      <div className="flex space-x-4 mt-2 pl-10">
        <Buttons handleButton={handleButton} value="" title="All Products" />
        <Buttons handleButton={handleButton} value="Nike" title="Nike" />
        <Buttons handleButton={handleButton} value="Adidas" title="Adidas" />
        <Buttons handleButton={handleButton} value="Puma" title="Puma" />
      </div>
    </>
  );
};

export default Recommended;