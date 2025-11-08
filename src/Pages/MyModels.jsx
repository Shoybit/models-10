import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import ProductCard from "../Components/ProductCard";

const MyModels = () => {
  const { user } = useContext(AuthContext);
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`http://localhost:3000/my-models?email=${user.email}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setModels(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching models:", err);
        setLoading(false);
      });
  }, [user]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[50vh] text-lg font-semibold">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">
        My Uploaded Models
      </h2>

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-6
          place-items-stretch
        "
      >
        {models?.map((model) => (
          <div key={model._id} className="w-full h-full flex">
            <ProductCard item={model} className="flex-1" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyModels;
