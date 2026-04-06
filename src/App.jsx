import { RouterProvider } from "react-router-dom";
import "./features/shared/global.scss";
import { AppRouter } from "./routes/app.routes.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./features/auth/context/AuthContext.jsx";
import { CartProvider } from "./features/product/context/CartContext.jsx";
const App = () => {
  return (
    <div>
      <CartProvider>
        <AuthProvider>
          <RouterProvider router={AppRouter} />
          <ToastContainer position="top-right" autoClose={3000} />
        </AuthProvider>
      </CartProvider>
    </div>
  );
};

export default App;
