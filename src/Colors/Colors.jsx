import Input from '../components/Input';
import React from 'react';

const Colors = ({ handleCheckbox }) => {
  return (
    <>
      <div className="font-sans text-[20px] flex justify-center items-center mt-7">
        Colors
      </div>
      <Input 
        onChange={handleCheckbox} 
        value="black" 
        name="color" 
        title="Black" 
        color="#000000" 
      />
      <Input 
        onChange={handleCheckbox} 
        value="white" 
        name="color" 
        title="White" 
        color="#ffffff" 
      />
      <Input 
        onChange={handleCheckbox} 
        value="blue" 
        name="color" 
        title="Blue" 
        color="#0000ff" 
      />
      <Input 
        onChange={handleCheckbox} 
        value="brown" 
        name="color" 
        title="Brown" 
        color="#8B4513" 
      />
      <Input 
        onChange={handleCheckbox} 
        value="green" 
        name="color" 
        title="Green" 
        color="#008000" 
      />
    </>
  );
};

export default Colors;
