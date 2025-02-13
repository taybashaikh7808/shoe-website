import React from "react";

const Card = () => {
  return (
    <div className="h-[350px] w-full max-w-[250px] shadow-lg border border-gray-300 rounded-lg p-4 flex flex-col">
      {/* Image */}
      <img
        src="https://images.nike.com/is/image/DotCom/CT2302_002"
        alt="Nike Air Max 270"
        className="h-[250px] w-full object-contain mx-auto mb-4"
      />

      {/* Product Name */}
      <h2 className="text-lg font-bold text-left">Nike Air Max 270</h2>

      {/* Ratings */}
      <div className="flex items-center text-sm text-gray-600 mt-1">
        <span>⭐</span>
        <div className="ml-1">(123 reviews)</div>
      </div>

      {/* Price */}
      <div className="flex items-center justify-between w-full mt-2">
        <div className="flex space-x-2">
          <span className="line-through text-gray-500">$150</span>
          <span className="text-teal-500 font-bold">$120</span>
        </div>
        <span>🛒</span>
      </div>
    </div>
  );
};

export default Card;
