import React from "react";

const Card = ({ img, category, color, company, prevPrice, title, newPrice, star, reviews }) => {
  return (
    <div className="h-[350px] w-full max-w-[250px] shadow-lg border border-gray-300 rounded-lg p-4 flex flex-col">
      {/* Image */}
      <img
        src={img}
        alt={title}
        className="h-[250px] w-full object-contain mx-auto mb-4"
      />

      {/* Product Name */}
      <h2 className="text-lg font-bold text-left">{title}</h2>

      {/* Star and Reviews */}
      <div className="flex items-center text-sm text-gray-600 mt-1">
        <span>{star}⭐</span>
        <div className="ml-3">({reviews} reviews)</div>
      </div>

      {/* Price */}
      <div className="flex items-center justify-between w-full mt-2">
        <div className="flex space-x-2">
          <span className="line-through text-gray-500">${prevPrice}</span>
          <span className="text-teal-500 font-bold">${newPrice}</span>
        </div>
        <span>🛒</span>
      </div>
    </div>
  );
};

export default Card;
