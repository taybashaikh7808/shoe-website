// App.js
import React, { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import Nav from "./Navigations/Nav";
import Recommended from "./Recommended/Recommended";
import Products from "./Products/Products";
import data from "./db/data"; // Ensure this path is correct

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [query, setQuery] = useState("");

  const handleInput = (e) => {
    setQuery(e.target.value);
  };

  const handleCheckbox = (e) => {
    const { name, value, checked } = e.target;

    if (name === "category") {
      setSelectedCategory((prevCategory) =>
        checked ? value : prevCategory === value ? "" : prevCategory
      );
    }

    if (name === "color") {
      setSelectedColors((prevColors) =>
        checked ? [...prevColors, value] : prevColors.filter((color) => color !== value)
      );
    }

    if (name === "price") {
      setSelectedPrices((prevPrices) =>
        checked ? [...prevPrices, value] : prevPrices.filter((price) => price !== value)
      );
    }
  };

  const handleButton = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredData = (data, category, colors, prices, query) => {
    let filteredData = data;

    if (query) {
      filteredData = filteredData.filter((item) =>
        item?.title?.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (category) {
      filteredData = filteredData.filter(
        (item) =>
          item?.category?.toLowerCase() === category.toLowerCase() ||
          item?.company?.toLowerCase() === category.toLowerCase()
      );
    }

    if (colors.length > 0) {
      filteredData = filteredData.filter((item) =>
        colors.includes(item?.color?.toLowerCase())
      );
    }

    if (prices.length > 0) {
      filteredData = filteredData.filter((item) => {
        return prices.some((priceRange) => {
          const [min, max] = priceRange.split("-").map(Number);
          return item?.newPrice >= min && item?.newPrice <= max;
        });
      });
    }

    return filteredData;
  };

  const result = filteredData(data, selectedCategory, selectedColors, selectedPrices, query);

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