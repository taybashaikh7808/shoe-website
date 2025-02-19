import Input from '../components/Input';
import React from 'react';

const Colors = ({ handleCheckbox }) => {
  return (
    <>
      <div className="font-sans text-[20px] flex justify-center items-center mt-7">
        Colors
      </div>
      <Input 
        handleCheckbox={handleCheckbox} 
        value="black" 
        name="color" 
        title="Black" 
        color="#000000" 
      />
      <Input 
        handleCheckbox={handleCheckbox} 
        value="white" 
        name="color" 
        title="White" 
        color="#ffffff" 
      />
      <Input 
        handleCheckbox={handleCheckbox} 
        value="blue" 
        name="color" 
        title="Blue" 
        color="#0000ff" 
      />
      <Input 
        handleCheckbox={handleCheckbox} 
        value="brown" 
        name="color" 
        title="Brown" 
        color="#8B4513" 
      />
      <Input 
        handleCheckbox={handleCheckbox} 
        value="pink" 
        name="color" 
        title="Pink" 
        color="#e27bb1" 
      />
    </>
  );
};

export default Colors;
