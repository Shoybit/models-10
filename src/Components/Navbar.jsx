import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut()
      .then(() => navigate("/login"))
      .catch((err) => console.error(err));
  };

  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
          >
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/allmodels">All Models</NavLink></li>
            <li><NavLink to="/addmodels">Add Models</NavLink></li>
            <li><NavLink to="/my-models">My Models</NavLink></li>
            <li><NavLink to="/my-downloads">My Dawnload</NavLink></li>
            {user && (
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            )}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Modal Website</a>
      </div>

      {/* Navbar Center (Desktop) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><NavLink to="/" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : ""}>Home</NavLink></li>
          <li><NavLink to="/allmodels" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : ""}>All Models</NavLink></li>
          <li><NavLink to="/addmodels" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : ""}>Add Models</NavLink></li>


        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            {/* User Avatar */}
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box mt-2 w-52"
            >
              <li>
                <span className="font-semibold">{user.email}</span>
              </li>
               <li><NavLink to="/my-models" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : ""}>My Models</NavLink></li>
               <li><NavLink to="/my-downloads" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : ""}>My Dawnload</NavLink></li>

              <li>
                <button className="w-full text-left" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <NavLink to="/login" className="btn btn-sm btn-primary">Login</NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
