import React from "react";
import { useLoaderData } from "react-router";
import ProductCard from "../Components/ProductCard"; 

const AllModels = () => {
  const models = useLoaderData();

  return (
    <div className="px-4 py-10 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">
        All <span className="text-primary">Models</span>
      </h2>

      <div
        className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-2 
        lg:grid-cols-3 
        gap-8
        place-items-center
      "
      >
        {models?.map((model) => (
          <ProductCard key={model._id} item={model} />
        ))}
      </div>
    </div>
  );
};

export default AllModels;
