import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../../context/useAuth";

const DashboardRoute = ({ children }) => {
  const { userRole, adminVerify } = useAuth();
  if (adminVerify) {
    return <h3 className="text-center">Verifying...</h3>;
  }
  return userRole === "admin" ? children : <Navigate to="/" />;
};

export default DashboardRoute;
