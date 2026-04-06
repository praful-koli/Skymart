import { useContext } from "react";
import { AuthContext } from "../context/authContext";
export const useAuth = () => {
  const { registers, loggedInUser, setRegisters, setLoggedInUser } =
    useContext(AuthContext);
    const singOut = () =>{
      setLoggedInUser(localStorage.removeItem('log user'))
    }
  return { registers, loggedInUser, setRegisters, setLoggedInUser,singOut };
};
