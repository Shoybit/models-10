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
import MyModels from "../Pages/MyModels";
import MyDawnload from "../Pages/Mydownloads";
import Mydownloads from "../Pages/Mydownloads";

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
        path: 'my-models',
        element:(

          <PrivateRoute>
           <MyModels></MyModels>
          </PrivateRoute>
        ),
      },
      {
        path: 'my-downloads',
        element:(

          <PrivateRoute>
           <Mydownloads></Mydownloads>
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
