import { RouterProvider } from "react-router-dom";
import "./features/shared/global.scss";
import { AppRouter } from "./routes/app.routes.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./features/auth/context/AuthContext.jsx";
const App = () => {
  return (
    <div>
      <AuthProvider>
        <RouterProvider router={AppRouter} />
        <ToastContainer position="top-right" autoClose={3000} />
      </AuthProvider>
    </div>
  );
};

export default App;
