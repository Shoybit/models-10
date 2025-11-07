import React, { useContext } from "react";
import { AuthContext } from "../Context/Authcontext";
import Swal from "sweetalert2";

const AddModels = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      category: e.target.category.value,
      description: e.target.description.value,
      thumbnail: e.target.thumbnail.value,
      created_at: new Date(), 
      downloads: 0,
      created_by: user.email,
    };

    fetch("http://localhost:3000/moduls", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${user.accessToken}`, 
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Model added successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          e.target.reset();
        }
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };

  return (
    <div className="px-4 py-10 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">
        Add <span className="text-primary">New Model</span>
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-base-100 shadow-lg p-8 rounded-2xl space-y-6"
      >
        {/* Model Name */}
        <div>
          <label className="label">
            <span className="label-text font-medium">Model Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter model name"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="label">
            <span className="label-text font-medium">Category</span>
          </label>
          <select name="category" className="select select-bordered w-full" required>
            <option value="" disabled>-- Select Category --</option>
            <option value="vehicles">Vehicles</option>
            <option value="plants">Plants</option>
            <option value="foods">Foods</option>
            <option value="home-living">Home & Living</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="others">Other</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="label">
            <span className="label-text font-medium">Description</span>
          </label>
          <textarea
            name="description"
            placeholder="Write short description"
            className="textarea textarea-bordered w-full h-32"
            required
          ></textarea>
        </div>

        {/* Image URL */}
        <div>
          <label className="label">
            <span className="label-text font-medium">Image URL</span>
          </label>
          <input
            type="text"
            name="thumbnail"
            placeholder="Enter image URL"
            className="input input-bordered w-full"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center pt-4">
          <button type="submit" className="btn btn-primary px-8">
            Add Model
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddModels;
