import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
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

  const addCitiesToContext = (cities) => {
    const validCities = cities.filter((t) => t !== undefined);

    const uniqueCities = validCities.filter((eachCity) => {
      if (citiesSearched.some((t) => t.id === eachCity.id)) {
        toast.warn(`We've already added ${eachCity.name} on the list.`);
        return null;
      } else {
        return eachCity;
      }
    });

    setCitiesSearched(citiesSearched.concat(uniqueCities));
  };

  const removeCityFromContext = (cityId) => {
    setCitiesSearched(citiesSearched.filter((t) => t.id !== cityId));
  };

  return (
    <DashboardContext.Provider
      value={{
        userLogged,
        setUserLogged,
        citiesSearched,
        removeCityFromContext,
        addCitiesToContext,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardProvider;
