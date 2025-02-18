import React from "react";
import Card from "../components/Card";

const Products = ({ result }) => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {result.map(({ img, title, star, reviews, newPrice ,prevPrice }) => (
          <Card
            key={title} 
            img={img}
            title={title}
            //star={star}
            reviews={reviews}
            newPrice={newPrice}
            prevPrice={prevPrice}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
