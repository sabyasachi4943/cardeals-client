import { createBrowserRouter } from "react-router-dom";
import Login from "../../Pages/Login/Login";
import Home from "../../Pages/Home/Home/Home";
import Main from "../../Layout/Main";
import SignUp from "../../Pages/SignUp/SignUp";
import DashboardLayout from "../../Layout/DashboardLayout";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import SpecificCategoryCars from "../../Pages/SpecificCategoryCars/SpecificCategoryCars";
import Orders from "../../Pages/Home/Orders/Orders";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import SellerRoute from "../SellerRoute/SellerRoute";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import AdminRoute from "../AdminRoute/AdminRoute";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";

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
        path: "/category/:type",
        element: <SpecificCategoryCars></SpecificCategoryCars>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.type}`),
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
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/products",
        element: (
          <SellerRoute>
            <MyProducts></MyProducts>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/addproducts",
        element: (
          <SellerRoute>
            <AddProduct></AddProduct>
          </SellerRoute>
        ),
      },
    ],
  },
]);

export default router;
