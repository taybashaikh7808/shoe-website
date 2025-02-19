import React, { useState } from "react";
import Nav from "./Navigations/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import { data } from "./db/data.js";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [query, setQuery] = useState("");

  // Input handler for the search query
  const handleInput = (e) => {
    setQuery(e.target.value);
  };

  // Checkbox handler for filters
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

  // Button handler for recommended filter buttons
  const handleButton = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Function to filter data based on query, category, color, and price
  const filteredData = (data, category, colors, prices, query) => {
    let filteredData = data;

    // Filter by query (search bar)
    if (query) {
      filteredData = filteredData.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Filter by selected category
    if (category) {
      filteredData = filteredData.filter(
        (item) => item.category.toLowerCase() === category.toLowerCase()
      );
    }

    // Filter by selected colors
    if (colors.length > 0) {
      filteredData = filteredData.filter((item) =>
        colors.includes(item.color.toLowerCase())
      );
    }

    // Filter by selected prices
    if (prices.length > 0) {
      filteredData = filteredData.filter((item) => {
        return prices.some((priceRange) => {
          const [min, max] = priceRange.split("-").map(Number);
          return item.newPrice >= min && item.newPrice <= max;
        });
      });
    }

    return filteredData;
  };

  // Get filtered data
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
