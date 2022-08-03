import { createContext, useContext } from "react";
import { useState } from "react";

const CityContext = createContext();

export const CityContextProvider = ({ children }) => {
  const [city, setCity] = useState("");

  return <CityContext.Provider value={{ city, setCity }}>{children}</CityContext.Provider>;
};

export const useCity = () => {
  const context = useContext(CityContext);
  if (!context) {
    throw new Error("CityContext s'utilise avec CityContext.Provider");
  }

  return context;
};
