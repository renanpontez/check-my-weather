import React from "react";
import { Outlet } from "react-router";
import { Navbar, NavbarBrand } from "reactstrap";
import "./Dashboard.css";

const DashboardLayout = () => {
  return (
    <div id="AppContainer">
      <Navbar expand="md" dark color="dark" className="text-white">
        <NavbarBrand href="/">CheckMyWeather</NavbarBrand>
      </Navbar>
      <div className="container py-5">
        <Outlet />
      </div>
    </div>
  );
};
export default DashboardLayout;
