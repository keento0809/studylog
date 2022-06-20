import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { auth } from "../../pages/Main";

const PrivateRouteAuth = () => {
  const currentUser = auth.currentUser;
  return currentUser ? <Navigate to="/home" /> : <Outlet />;
};

export default PrivateRouteAuth;
