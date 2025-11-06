import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const { googleSignIn, loginUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    googleSignIn()
      .then(() => navigate("/"))
      .catch(console.error);
  };

  const handleEmailLogin = (e) => {
    e.preventDefault();
    loginUser(email, password)
      .then(() => navigate("/"))
      .catch(console.error);
  };

  return (
    <div className="max-w-md mx-auto mt-20 bg-white shadow-lg rounded-xl p-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      <form onSubmit={handleEmailLogin} className="space-y-4">
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
        <button className="btn btn-primary w-full">Login</button>
      </form>

      <div className="divider">OR</div>
      <button onClick={handleGoogleLogin} className="btn btn-outline w-full">
        Continue with Google
      </button>

      <p className="mt-3 text-center">
        New user?{" "}
        <Link to="/register" className="text-blue-500">
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
