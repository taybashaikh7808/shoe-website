import React from "react";
import Nav from "./Navigations/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";

const App = () => {
  return (
    <div className="grid grid-cols-[250px_auto] h-screen">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Nav />
        <Recommended />
        <Products />
      </div>
    </div>
  );
};

export default App;
