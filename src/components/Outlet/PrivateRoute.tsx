import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const PrivateRoute = () => {
  const auth = getAuth();
  const isUser: any = onAuthStateChanged(auth, (user) => {
    if (user) {
      return true;
    } else {
      return false;
    }
  });
  return isUser ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
