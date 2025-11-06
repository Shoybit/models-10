import React from "react";
import { Link, useLoaderData } from "react-router"; 

const AllModels = () => {
  const models = useLoaderData();
  console.log(models);

  return (
    <div className="px-4 py-10 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">
        All <span className="text-primary">Models</span>
      </h2>

      <div className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-2 
        lg:grid-cols-3 
        gap-8
        place-items-center
      ">
        {models.map((model) => (
          <div
            key={model._id}
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
                src={
                    model.thumbnail
                }
                alt={model.name}
                className="rounded-xl w-full h-48 object-cover"
              />
            </figure>

            <div className="card-body items-center text-center">
              <h2 className="card-title">{model.name}</h2>
              <p className="text-sm text-gray-600 line-clamp-3">
                {model.description}
              </p>
              <div className="card-actions mt-3">
                <Link to={`/model-details/${model._id}`}>
                  <button className="btn btn-primary btn-sm">
                  {model.category}
                </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllModels;
