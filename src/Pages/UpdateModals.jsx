import React from "react";
import { useLoaderData, useNavigate } from "react-router";

const UpdateModals = () => {
  const model = useLoaderData();
  const navigate = useNavigate();

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedModel = {
      name: form.name.value,
      category: form.category.value,
      description: form.description.value,
      thumbnail: form.thumbnail.value,
      created_by: form.created_by.value,
    };

    const res = await fetch(`http://localhost:3000/moduls/${model._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedModel),
    });

    const data = await res.json();
    console.log("Update response:", data);

    if (data.modifiedCount > 0) {
      alert("Model updated successfully!");
      navigate("/allmodels");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-xl mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Update Model Info
      </h2>

      <form onSubmit={handleUpdate} className="space-y-5">
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Model Name
          </label>
          <input
            type="text"
            name="name"
            defaultValue={model?.name}
            className="input input-bordered w-full"
            placeholder="Enter model name"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Category
          </label>
          <select
            name="category"
            defaultValue={model?.category}
            className="select select-bordered w-full"
          >
            <option disabled>Select category</option>
            <option>Electronics</option>
            <option>Vehicles</option>
            <option>Robotics</option>
            <option>Fashion</option>
            <option>Furniture</option>
            <option>Toys</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            defaultValue={model?.description}
            className="textarea textarea-bordered w-full"
            rows="4"
            placeholder="Enter model description"
          ></textarea>
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Thumbnail URL
          </label>
          <input
            type="text"
            name="thumbnail"
            defaultValue={model?.thumbnail}
            className="input input-bordered w-full"
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Created By
          </label>
          <input
            type="text"
            name="created_by"
            defaultValue={model?.created_by}
            className="input input-bordered w-full"
            placeholder="Creator's email"
          />
        </div>

        <button type="submit" className="btn btn-primary w-full mt-4">
          Update Model
        </button>
      </form>
    </div>
  );
};

export default UpdateModals;
