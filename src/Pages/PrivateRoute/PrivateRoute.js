import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../context/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useAuth();
  let location = useLocation();
  if (isLoading) {
    return <h3 className="text-center">Loading...</h3>;
  }
  return user?.email ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoute;
