import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import Category from './Category/Category'
import Price from '../Price/Price';
import Colors from '../Colors/Colors'
const Sidebar = () => {
  return (
    <div className='h-[1000px] w-50  shadow-lg' >
        <div className='flex justify-center align-center mt-6'><FaCartShopping size={30} /></div>
       <Category />
       <Price />
       <Colors />

    </div>
  )
}

export default Sidebar