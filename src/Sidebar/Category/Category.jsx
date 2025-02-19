import Input from "../../components/Input";
import React from "react";

const Category = ({ handleCheckbox }) => {
  return (
    <>
      <div className="font-sans text-[20px] flex justify-center align-center mt-7">
        Category
      </div>
      <Input
        handleCheckbox={handleCheckbox}
        name="shoe"
        title="All"
        value="All"
      />
      <Input
        handleCheckbox={handleCheckbox}
        name="shoe"
        title="Sneakers"
        value="sneakers"
      />
      <Input
        handleCheckbox={handleCheckbox}
        name="shoe"
        title="Flats"
        value="flats"
      />
      <Input
        handleCheckbox={handleCheckbox}
        name="shoe"
        title="Sandal"
        value="sandal"
      />
      <Input
        handleCheckbox={handleCheckbox}
        name="shoe"
        title="Heals"
        value="heals"
      />
    </>
  );
};

export default Category;
