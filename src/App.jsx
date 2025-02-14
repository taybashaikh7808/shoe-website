import React, { useState } from "react";
import Nav from "./Navigations/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import { data } from "./db/data.js";

const App = () => {
  const [selectedcategory, setselectedcategory] = useState(null);
  const [query, setquery] = useState("");

  const handleInput = (e) => {
    setquery(e.target.value);
  };

  const filteredItems = data.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  const handleButton = (e) => {
    setselectedcategory(e.target.value);
  };

  const handleCheckbox = (e) => {
    setselectedcategory(e.target.value);
  };

  function filteredData(data, selected, query) {
    let filteredData = data;

    if (query) {
      filteredData = filteredItems;
    }

    if (selected) {
      filteredData = filteredData.filter(
        ({ category, color, company, prevPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          prevPrice === selected ||
          title === selected
      );
    }

    return filteredData.map(({ img, title, star, reviews, newPrice }) => (
      <Card
        key={Math.random()}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        newPrice={newPrice}
      />
    ));
  }
  //const result = filteredData(data,selectedcategory,query)
  return (
    <div className="grid grid-cols-[250px_auto] h-screen">
      <Sidebar handleCheckbox={handleCheckbox} />
      <div className="flex flex-col w-full">
        <Nav />
        <Recommended />
        <Products />
      </div>
    </div>
  );
};

export default App;
