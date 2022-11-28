import { createBrowserRouter } from "react-router-dom";
import Login from "../../Pages/Login/Login";
import Home from "../../Pages/Home/Home/Home";
import Main from "../../Layout/Main"
import SignUp from "../../Pages/SignUp/SignUp";
import DashboardLayout from "../../Layout/DashboardLayout";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import SpecificCategoryCars from "../../Pages/SpecificCategoryCars/SpecificCategoryCars";
import Orders from "../../Pages/Home/Orders/Orders";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/category/:id",
        element: <SpecificCategoryCars></SpecificCategoryCars>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    // errorElement: ,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/orders",
        element: <Orders></Orders>,
      },
      {
        path: "/dashboard/allusers",
        element: <AllUsers></AllUsers>,
      },
    ],
  },
]);

export default router;