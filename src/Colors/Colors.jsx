import Input from '../components/Input'
import React from 'react'

const Colors = ({ handleCheckbox }) => {
  return (
    <>
      <div className="font-sans text-[20px] flex justify-center items-center mt-7">
        Colors
      </div>
      <Input onChange={handleCheckbox} value="black" name="color" title="Black" />
      <Input onChange={handleCheckbox} value="white" name="color" title="White" />
      <Input onChange={handleCheckbox} value="blue" name="color" title="Blue" />
      <Input onChange={handleCheckbox} value="brown" name="color" title="Brown" />
      <Input onChange={handleCheckbox} value="green" name="color" title="Green" />
    </>
  );
};

export default Colors;
