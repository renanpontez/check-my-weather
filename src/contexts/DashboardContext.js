import React, { createContext, useEffect, useState } from "react";
import { getUserLogged, loginUser } from "../utils/auth";

export const DashboardContext = createContext(null);

export const DashboardProvider = ({ children }) => {
  const [userLogged, setUserLogged] = useState(getUserLogged());
  const [citiesSearched, setCitiesSearched] = useState([]);

  useEffect(() => {
    if (userLogged && !getUserLogged()) {
      loginUser(userLogged);
    }
  }, [userLogged]);

  return (
    <DashboardContext.Provider
      value={{
        citiesSearched,
        setCitiesSearched,
        userLogged,
        setUserLogged,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardProvider;
