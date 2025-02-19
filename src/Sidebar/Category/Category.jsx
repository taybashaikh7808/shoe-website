import Input from "../../components/Input";
import React from "react";

const Category = ({ handleCheckbox }) => {
  return (
    <>
      <div className="font-sans text-[20px] flex justify-center align-center mt-7">
        Category
      </div>
      <Input handleCheckbox={handleCheckbox} name="category" title="All" value="" />
<Input handleCheckbox={handleCheckbox} name="category" title="Sneakers" value="Sneakers" />
<Input handleCheckbox={handleCheckbox} name="category" title="Flats" value="Flats" />
<Input handleCheckbox={handleCheckbox} name="category" title="Sandals" value="Sandals" />
<Input handleCheckbox={handleCheckbox} name="category" title="Heels" value="Heels" />
    </>
  );
};

export default Category;