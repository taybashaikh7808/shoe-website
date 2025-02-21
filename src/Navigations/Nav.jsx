import React from "react";
import { CiHeart, CiUser } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Nav = ({ query, handleInput }) => {
  return (
    <nav className="h-[70px] w-full bg-white text-black flex justify-between shadow-md ">
      <div>
        <input
          type="text"
          placeholder="Enter shoe type.."
          className="h-10 w-70 ml-10 mt-4 rounded-md p-3 bg-gray-200 text-black placeholder-black"
          onChange={handleInput}
          value={query}
        />
      </div>
      <div className="flex space-x-4 mt-5 mr-10 ">
        <CiHeart size={25} className="hover:text-red-900 cursor-pointer "/>
        <AiOutlineShoppingCart size={25} />
        <CiUser size={25} />
      </div>
    </nav>
  );
};

export default Nav;
