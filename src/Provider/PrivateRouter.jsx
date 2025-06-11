import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router";
import Loader from "../pages/Loader/Loader";

const PrivateRouter = ({children}) => {
  const { user, loading } = use(AuthContext);
  // console.log(user);

  const location = useLocation();
  // console.log(location);

  if (loading) {
    return <Loader></Loader>;
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRouter;
