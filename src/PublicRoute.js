import React from "react";
import { Route } from "react-router";
import DashboardLayout from "./components/Layouts/DashboardLayout";

const PublicRoute = ({ component: Component }) => (
  <Route
    strict
    exact
    render={(props) => (
      <DashboardLayout>
        <Component {...props} />
      </DashboardLayout>
    )}
  />
);

export default PublicRoute;
