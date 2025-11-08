import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/Authcontext";

const ModelDetails = () => {
  const { id } = useParams();
  const [model, setModel] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user?.accessToken) return;

    fetch(`http://localhost:3000/moduls/${id}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
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
  }, [id, user]);

  // ✅ Delete Handler
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/moduls/${model._id}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              navigate("/allmodels");
            }
          })
          .catch((err) => console.log(err));
      }
    });
  };

  // ✅ Download Handler
  const handleDownload = () => {
    fetch(`http://localhost:3000/downloads`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...model,
        downloaded_by: user?.email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Download logged:", data);
        Swal.fire("Downloaded!", "Model has been added to downloads.", "success");
      })
      .catch((err) => console.log(err));
  };

  // ✅ Loading & Error States
  if (loading) {
    return <div className="text-center py-10 text-lg">Loading...</div>;
  }

  if (!model || !model.thumbnail) {
    return <div className="text-center py-10 text-red-500">No model data found.</div>;
  }

  // ✅ Main Return
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
              onClick={handleDownload}
              className="bg-green-500 text-white px-8 py-2 rounded"
            >
              Download
            </button>
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
            {model.created_at
              ? new Date(model.created_at).toLocaleDateString()
              : "N/A"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ModelDetails;