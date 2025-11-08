import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import ProductCard from '../Components/ProductCard';

const Mydownloads = () => {
      const { user } = useContext(AuthContext);
      const [models, setModels] = useState([]);
      const [loading, setLoading] = useState(true);

        useEffect(() => {
          if (!user?.email) return;
      
          fetch(`http://localhost:3000/my-downloads?email=${user.email}`, {
            headers: {
              authorization: `Bearer ${user.accessToken}`,
            },
          })
            .then((res) => res.json())
            .then((data) => {
            setModels(data.data || data);
              setLoading(false);
            })
            .catch((err) => {
              console.error("Error fetching models:", err);
              setLoading(false);
            });
        }, [user]);
          if (loading) {
    return <div className="text-center py-10 text-lg"> plase Loading...</div>;
  }
    return (
<div className="container mx-auto px-4 py-10">
  <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
    My Downloads
  </h2>

  <div
    className="
      grid
      grid-cols-1
      sm:grid-cols-2
      md:grid-cols-3
      lg:grid-cols-4
      gap-5
      justify-items-center
    "
  >
    {models.map((model) => (
      <ProductCard key={model._id} item={model} />
    ))}
  </div>
</div>

    );
};

export default Mydownloads;