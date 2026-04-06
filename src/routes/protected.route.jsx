import { Navigate, Outlet,  } from "react-router";
import { useAuth } from "../features/auth/hook/useAuth.js";
import { toast } from "react-toastify";

const ProtectedHome = () => {
  const { loggedInUser } = useAuth();

  if (!loggedInUser) {
    toast.error("Unhothorized access");
   
    return  <Navigate to={'/'}/>
  }
  return <Outlet />;
};

const ProtectedAuth = () => {
<<<<<<< HEAD
  const { loggedInUser ,registers } = useAuth();
   if (loggedInUser || registers ) {
=======
   const { loggedInUser  } = useAuth();
   if (loggedInUser ) {
>>>>>>> c149305db4d605e5b4e66dc007e3ec0f94e9c75c
   
    return  <Navigate to={'/home'}/>
  }
  return <Outlet />;
};

export { ProtectedHome , ProtectedAuth};
