import Input from "../../components/Input";
import React from "react";

const Category = ({handleCheckbox}) => {
  return (
    <>
      <div className="font-sans text-[20px] flex justify-center align-center mt-7">
        Category
      </div>
      <Input onChange={handleCheckbox} name="shoe" title="All" value="All" />
      <Input onChange={handleCheckbox} name="shoe" title="Sneakers" value="sandals" />
      <Input onChange={handleCheckbox} name="shoe" title="Flats" value="flats" />
      <Input onChange={handleCheckbox} name="shoe" title="Sandal" value="heals" />
      <Input onChange={handleCheckbox} name="shoe" title="Heals" value="sneakers" />
    </>
  );
};

export default Category;
