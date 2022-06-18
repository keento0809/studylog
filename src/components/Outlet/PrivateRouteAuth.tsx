import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getAuth } from "firebase/auth";

const PrivateRouteAuth = () => {
  const auth = getAuth();
  const currentUser = auth.currentUser;
  console.log(currentUser);
  return currentUser ? <Navigate to="/home" /> : <Outlet />;
};

export default PrivateRouteAuth;
