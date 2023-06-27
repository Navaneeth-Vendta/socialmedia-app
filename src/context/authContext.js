import { createContext, useEffect, useState } from "react";
import Profile from "../img/register-bg.jpg";
export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = () => {
    setCurrentUser(
      {id:1,name:'leo',pic:Profile
    })
    
  };
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{  currentUser,login}}>
      {children}
    </AuthContext.Provider>
  );
};