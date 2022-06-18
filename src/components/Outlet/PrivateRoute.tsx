import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const PrivateRoute = () => {
  const auth = getAuth();
  const currentUser = auth.currentUser;
  console.log(currentUser);
  return currentUser ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
