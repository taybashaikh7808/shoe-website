import React from "react";

const Products = () => {
  return (
    <>
      <div className="max-w-fit rounded-md flex ml-10 mt-3 space-x-4">
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
      <div className="h-[350px] w-[250px] ml-10 mt-5 shadow-lg border border-gray-300 rounded-lg p-4 flex flex-col">
        {/* Image with a fixed size to fit inside the container */}
        <img
          src="https://images.nike.com/is/image/DotCom/CT2302_002"
          alt="Nike Air Max 270"
          className="h-[250px] w-[250px] object-contain mx-auto mb-4"
        />

        {/* Product Name */}
        <h2 className="text-lg font-bold text-left">Nike Air Max 270</h2>

        {/* Ratings Section */}
        <div className="flex items-center text-sm text-gray-600 mt-1">
          <span>⭐</span>
          <div className="ml-1">(123 reviews)</div>
        </div>

        {/* Price Section */}
        <div className="flex items-center justify-between w-full mt-2">
          <div className="flex space-x-2">
            <span className="line-through text-gray-500">$150</span>
            <span className="text-teal-500 font-bold">$120</span>
          </div>
          <span>🛒</span> 
        </div>
      </div>
    </>
  );
};

export default Products;
