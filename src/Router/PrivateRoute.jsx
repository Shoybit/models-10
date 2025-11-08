import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <p className="text-center mt-10"> plase Loading...</p>;
  if (!user) return <Navigate to="/login" />;

  return children;
};

export default PrivateRoute;
