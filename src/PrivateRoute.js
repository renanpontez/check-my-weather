import React, { useContext } from "react";
import { Navigate } from "react-router";
import { DashboardContext } from "./contexts/DashboardContext";
import { ROUTE_LOGIN } from "./utils/routes";

const PrivateRoute = ({ children }) => {
  const { userLogged } = useContext(DashboardContext);
  return !!userLogged ? <>{children}</> : <Navigate to={ROUTE_LOGIN} replace />;
};

export default PrivateRoute;
