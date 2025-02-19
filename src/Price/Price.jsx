import Input from "../components/Input";
import React from "react";

const Price = ({ handleCheckbox }) => {
  return (
    <>
      <div className="font-sans text-[20px] flex justify-center align-center mt-7">
        Price
      </div>
      <Input
        handleCheckbox={handleCheckbox}
        value="0-50"
        name="price"
        title="$0 - $50"
      />
      <Input
        handleCheckbox={handleCheckbox}
        value="50-100"
        name="price"
        title="$50 - $100"
      />
      <Input
        handleCheckbox={handleCheckbox}
        value="150-200"
        name="price"
        title="$150 - $200"
      />
      <Input
        handleCheckbox={handleCheckbox}
        value="250-300"
        name="price"
        title="$250 - $300"
      />
      <Input
        handleCheckbox={handleCheckbox}
        value="350-400"
        name="price"
        title="$350 - $400"
      />
    </>
  );
};

export default Price;
