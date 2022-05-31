import { AuthValue, PropsChildren } from "../models/Model";
import AuthContext from "./auth-context";
import { useState } from "react";

const AuthProvider = ({ children }: PropsChildren) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleAuthLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("authState", "true");
  };
  const handleAuthLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("authState");
  };

  const authContext: AuthValue = {
    isLoggedIn: false,
    authLogin: handleAuthLogin,
    authLogout: handleAuthLogout,
  };

  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
