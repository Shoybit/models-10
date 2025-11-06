import React from "react";
import { useLoaderData } from "react-router";
import ProductCard from "../Components/ProductCard";

const Home = () => {
  const data = useLoaderData();

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-center mb-10">All Products</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.map((item) => (
          <ProductCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
