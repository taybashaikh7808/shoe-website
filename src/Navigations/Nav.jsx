import React from "react";
import { CiHeart ,CiUser , AiOutlineShoppingCart} from "react-icons/ci";

const Nav = () => {
  return (
    <nav>
      <div>
        <input type="text" placeholder="Enter shoe type.."/>
      </div>
      <div>
        <a href="">
          <CiHeart />
          <AiOutlineShoppingCart />
          <CiUser />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
