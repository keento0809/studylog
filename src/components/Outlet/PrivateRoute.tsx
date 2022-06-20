import { Navigate, Outlet } from "react-router-dom";
import { auth } from "../../pages/Main";

const PrivateRoute = () => {
  const currentUser = auth.currentUser;
  return currentUser ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
