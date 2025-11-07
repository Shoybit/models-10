import { createBrowserRouter } from "react-router-dom";
import MinLayout from "../Layout/MinLayout";
import Home from "../Pages/Home";
import AllModels from "../Pages/AllModels";
import ModelDetails from "../Pages/ModelDetails";
import UpdateModals from "../Pages/UpdateModals";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import AddModels from "../Pages/Admodels";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MinLayout />, 
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch("http://localhost:3000/letest-moduls"),
      },
      {
        path: "allmodels",
        element: <AllModels />,
        loader: () => fetch("http://localhost:3000/moduls"),
      },
      {
        path: "addmodels",
        element: (
          <PrivateRoute>
            <AddModels/>
          </PrivateRoute>
        ),
      },
      {
        path: "model-details/:id",
        element: (
          <PrivateRoute>
            <ModelDetails />
          </PrivateRoute>
        ),
      },
 {
        path: "updatemodals/:id", 
        element: (
          <PrivateRoute>
            <UpdateModals />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
