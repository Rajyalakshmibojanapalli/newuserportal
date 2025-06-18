import React from "react";

import { Navigate, Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const PublicRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  if (token) {
    return <Navigate to="/home" />;
  } else {
    return (
      <>
        <Outlet />
      </>
    );
  }
  return children;
};
export default PublicRoute;
