import React, { useContext, useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthContext";
const UpdateModals = () => {

const { id } = useParams(); 
const [model, setModel] = useState({});
const [loading, setLoading] = useState(true);
const navigate = useNavigate(); 
const { user } = useContext(AuthContext);


    useEffect(() => {
      fetch(`http://localhost:3000/moduls/${id}`, {
  headers: {
    authorization: `Bearer ${user.accessToken}`
  },
  
      })
        .then((res) => res.json()) 
        .then((data) => {
          console.log("Fetched data:", data);
          setModel(data); 
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching model:", err);
          setLoading(false);
        });
    }, [id,user]);
  

  // const data = useLoaderData();
  console.log(model);


  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedModel = {
      name: form.name.value.trim(),
      category: form.category.value.trim(),
      description: form.description.value.trim(),
      thumbnail: form.thumbnail.value.trim(),
      created_by: form.created_by.value.trim(),
    };

    const isChanged =
      updatedModel.name !== model.name ||
      updatedModel.category !== model.category ||
      updatedModel.description !== model.description ||
      updatedModel.thumbnail !== model.thumbnail ||
      updatedModel.created_by !== model.created_by;

    if (!isChanged) {
      return Swal.fire({
        icon: "info",
        title: "No Changes Detected",
        text: "No fields were modified.",
        confirmButtonColor: "#2563eb",
        position: "center",
        width: "350px",
      });
    }

    try {
      const res = await fetch(`http://localhost:3000/moduls/${model._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedModel),
      });

      const data = await res.json();

      if (data.modifiedCount > 0) {
        Swal.fire({
          icon: "success",
          title: "Model Updated Successfully!",
          showConfirmButton: false,
          timer: 1500,
          position: "center",
          width: "350px",
        });
        navigate("/allmodels");
      }
    } catch (error) {
      console.error("Update failed:", error);
      Swal.fire({
        icon: "error",
        title: "Update Failed!",
        text: "Something went wrong.",
        confirmButtonColor: "#ef4444",
      });
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-xl mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Update Model Info
      </h2>

      <form onSubmit={handleUpdate} className="space-y-5">
        <div>
          <label className="block mb-2 font-medium text-gray-700">Model Name</label>
          <input
            type="text"
            name="name"
            defaultValue={model?.name}
            className="input input-bordered w-full"
            placeholder="Enter model name"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-700">Category</label>
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
          <label className="block mb-2 font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            defaultValue={model?.description}
            className="textarea textarea-bordered w-full"
            rows="4"
            placeholder="Enter model description"
          ></textarea>
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-700">Thumbnail URL</label>
          <input
            type="text"
            name="thumbnail"
            defaultValue={model?.thumbnail}
            className="input input-bordered w-full"
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-700">Created By</label>
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
