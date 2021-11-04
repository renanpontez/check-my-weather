import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  ROUTE_SEARCH,
  ROUTE_HOME,
  ROUTE_LOGIN,
  ROUTE_HISTORY,
} from "./utils/routes";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import SearchPage from "./pages/search";
import HistoryPage from "./pages/history";
import PrivateRoute from "./PrivateRoute";

import DashboardProvider from "./contexts/DashboardContext";
import DashboardLayout from "./components/Layouts/DashboardLayout";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <DashboardProvider>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTE_HOME} element={<DashboardLayout />}>
            <Route index element={<HomePage />} />
            <Route path={ROUTE_LOGIN} element={<LoginPage />} />
            <Route
              path={ROUTE_SEARCH}
              element={
                <PrivateRoute>
                  <SearchPage />
                </PrivateRoute>
              }
            />
            <Route
              path={ROUTE_HISTORY}
              element={
                <PrivateRoute>
                  <HistoryPage />
                </PrivateRoute>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </DashboardProvider>
  );
}

export default App;
