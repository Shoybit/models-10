import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    createUser(email, password)
      .then(() => navigate("/"))
      .catch(console.error);
  };

  return (
    <div className="max-w-md mx-auto mt-20 bg-white shadow-lg rounded-xl p-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
      <form onSubmit={handleRegister} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="input input-bordered w-full"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="input input-bordered w-full"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="btn btn-primary w-full">Register</button>
      </form>

      <p className="mt-3 text-center">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-500">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
