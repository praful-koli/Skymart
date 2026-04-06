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
   const { loggedInUser ,registers } = useAuth();
   if (loggedInUser || registers ) {
   
    return  <Navigate to={'/home'}/>
  }
  return <Outlet />;
};

export { ProtectedHome , ProtectedAuth};
