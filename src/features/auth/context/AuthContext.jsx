
import { useState } from "react";
import { AuthContext } from "./authContext";



export const AuthProvider = ({ children }) => {
  const [registers, setRegisters] = useState(JSON.parse(localStorage.getItem("reg users")) || []);
  
  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem("log user")) || null
  );
  
  return (
    <AuthContext.Provider value={{ registers, loggedInUser, setRegisters, setLoggedInUser }}>
      {children}
    </AuthContext.Provider>
  );
};
