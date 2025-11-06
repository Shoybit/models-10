import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";

const ModelDetails = () => {
  const model = useLoaderData();
  const navigate = useNavigate(); 

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/moduls/${model._id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0 || data.success) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              navigate("/allmodels"); 
            }
          })
          .catch(err => console.log(err));
      }
    });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="w-full">
          <img
            src={model.thumbnail}
            alt={model.name}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold mb-3 text-gray-800">{model.name}</h1>

          <p className="text-sm text-gray-500 mb-2">
            Category:{" "}
            <span className="font-semibold text-primary">{model.category}</span>
          </p>

          <p className="text-gray-700 leading-relaxed mb-5">{model.description}</p>

          <div className="flex items-center gap-4 mb-6">
            <div className="badge badge-outline py-3 px-5 text-sm">
              Downloads: {model.downloads || 0}
            </div>
            <div className="badge badge-outline py-3 px-5 text-sm">
              Created by: {model.created_by}
            </div>
          </div>

          <div className="flex gap-5">
            <Link to={`/UpdateModals/${model._id}`}>
              <button className="btn btn-primary px-8">Update</button>
            </Link>
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white px-8 py-2 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t pt-8 text-sm text-gray-600">
        <p>
          Uploaded on:{" "}
          <span className="font-medium">
            {new Date(model.created_at).toLocaleDateString()}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ModelDetails;
