import React from 'react';
import { Link, useLoaderData } from 'react-router';

const Home = () => {
  const data = useLoaderData();
  console.log(data);


// category
// : 
// "vehicles"
// created_a
// : 
// "2025-11-04T16:31:08.042Z"
// created_by
// : 
// "email@example.com"
// description
// : 
// "Unexpected Application Error!\n404 Not Found\n💿 Hey developer 👋\n\nYou can provide a way better UX than this when your app throws errors by providing your own ErrorBoundary or errorElement prop on your route.\n\n,"
// downloads
// : 
// 0
// name
// : 
// "Shoyaib "
// thumbnail
// : 
// "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIALcAxgMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xAA+EAACAQMCAwQIBAQFBAMAAAABAgMABBEFEgYhMRNBUWEiMlJxgZGhsQcUQmIjcsHwFSRD0fFTgpLhM0Rj/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAEDAgQF/8QAJBEAAgICAgEFAAMAAAAAAAAAAAECEQMhEjFBBBMiMlEUQlL/2gAMAwEAAhEDEQA/ANBo8e60FMrZbrmVv3VK0E7rEDzNSIF9Ob+etNWTTooLmwV7hty1Hj0tJLkoF6NWjmhzIx8hQ06D/Mv76nxNqRdaTpkaW6+j3VRcT6Okq7lrWW7bF21FvIe3bFHEdnJ77SvyKi4X0W3ZLV03g25/MaXA3lioetaEtzZ7PGrjhDTV0/Tki9kVmOmNu0X+3nRMKfAwKS/SqtmRpA3s08BTadadpDBSGLezSjSaACBb2aVmk0M0xBlqLc3s0M0KADBo6TR5oGFlvZoA0dCkARFJYcqXRUANHd7NCnCKFFiOc6BbTW1vsmXoxxVzDZ8pGqZsiT0V99Ohd0JHjWJcrVAkq2ULcmI8BTmmr/GNKubKQMzDpmlaYjrI27xqpitl7GPTPuptxtfNOKdrE+VRZp1UmkbD1FilnvHXuqNoeuo7m3kbZKp+dLuplltseVY6/ieK67aLrnNYdmk0dVhfevrUbdKymgcQRTxrHK2JuXLxrSpKH6dKaYhxOtPY/dTINOKeVMA9v7qGKOhmgBJWk7P3UvNHQAgLR"
// _id
// : 
// "690a2a4ccb92da960b57414f"



  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-center mb-10">All Products</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.map((item) => (
          <div
            key={item._id}
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
                    item.thumbnail
                }
                alt={item.name}
                className="rounded-xl w-full h-48 object-cover"
              />
            </figure>

            <div className="card-body items-center text-center">
              <h2 className="card-title">{item.name}</h2>
              <p className="text-sm text-gray-600 line-clamp-3">
                {item.description}
              </p>
              <div className="card-actions mt-3">
                <Link to={`/model-details/${item._id}`}>
                  <button className="btn btn-primary btn-sm">
                  {item.category}
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

export default Home;
