import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <div
      className="
        card 
        bg-base-100 
        w-full 
        sm:w-72 
        md:w-80 
        shadow-md 
        hover:shadow-xl 
        transition-transform 
        duration-300 
        hover:scale-105
      "
    >
      <figure className="px-6 pt-6">
        <img
          src={item.thumbnail}
          alt={item.name}
          className="rounded-xl w-full h-48 object-cover"
        />
      </figure>

      <div className="card-body items-center text-center">
        <h2 className="card-title">{item.name}</h2>
        <p className="text-sm text-gray-600 line-clamp-3">
          {item.description}
        </p>
        <p className="text-sm text-gray-600 line-clamp-3">
          {item.created_by}
        </p>
        <div className="card-actions mt-3">
          <Link to={`/model-details/${item._id}`}>
            <button className="btn btn-primary btn-sm">{item.category}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
