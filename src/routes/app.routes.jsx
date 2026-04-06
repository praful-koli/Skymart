import { createBrowserRouter } from "react-router-dom";
import AuthLayOut from "../LayOut/AuthLayOut";
import Login from "../features/auth/pages/Login";
import Register from "../features/auth/pages/Register";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../features/product/pages/Home";
import Products from "../features/product/pages/Products";
import ProductDetail from "../features/product/pages/Productdetail";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayOut />,
    children: [
      {
        path: "",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },

  {
    path: "/home",
    element: <MainLayOut />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path:"productdetail/:id",
        element : <ProductDetail/>
      },
    ],
  },
]);
