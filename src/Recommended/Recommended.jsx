import React from "react";

const Recommended = () => {
  return (
    <>
      {/* Recommended Header */}
      <div className="font-bold text-lg h-[40px] w-full flex items-center pl-10 pt-4">
        Recommended
      </div>

      {/* Buttons aligned right below Recommended */}
      <div className="flex space-x-4 mt-2 pl-10">
        <button className="border border-gray-300 px-4 py-1 text-black rounded-md">
          All Products
        </button>
        <button className="border border-gray-300 px-4 py-1 text-black rounded-md">
          Nike
        </button>
        <button className="border border-gray-300 px-4 py-1 text-black rounded-md">
          Adidas
        </button>
        <button className="border border-gray-300 px-4 py-1 text-black rounded-md">
          Puma
        </button>
      </div>
    </>
  );
};

export default Recommended;
