import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getAuth } from "firebase/auth";

const PrivateRouteAuth = () => {
  const auth = getAuth();
  const currentUser = auth.currentUser;
  return !currentUser ? <Outlet /> : <Navigate to="/home" />;
};

export default PrivateRouteAuth;
