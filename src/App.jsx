import React, { useState } from "react";
import Nav from "./Navigations/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import { data } from "./db/data.js";

const App = () => {
  const [selectedcategory, setselectedcategory] = useState("");
  const [query, setquery] = useState("");

  // Input handler for the search query
  const handleInput = (e) => {
    setquery(e.target.value);
  };

  // Checkbox handler for category selection
  const handleCheckbox = (e) => {
    console.log("Checkbox value:", e.target.value);
    setselectedcategory(e.target.value);
  };

  // Button handler for recommended filter buttons
  const handleButton = (e) => {
    setselectedcategory(e.target.value);
  };

  // Function to filter data based on query and selected category
  const filteredData = (data, selected, query) => {
    let filteredData = data;

    // Filter by query (search bar)
    if (query) {
      filteredData = filteredData.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Filter by selected category (checkboxes or buttons)
    if (selected) {
      filteredData = filteredData.filter(
        ({ category }) => category.toLowerCase() === selected.toLowerCase()
      );
    }

    return filteredData;
  };

  // Get filtered data
  const result = filteredData(data, selectedcategory, query);

  return (
    <div className="grid grid-cols-[250px_auto] h-screen">
      <Sidebar handleCheckbox={handleCheckbox} />
      <div className="flex flex-col w-full">
        <Nav query={query} handleInput={handleInput} />
        <Recommended handleButton={handleButton} />
        <Products result={result} />
      </div>
    </div>
  );
};

export default App;
