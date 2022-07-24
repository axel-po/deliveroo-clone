import { createContext, useContext, useSyncExternalStore } from "react";
import { useState } from "react";

type CityContextType = {
  city: string;
  setCity: Function;
  cityFormAlert: boolean;
  setCityFormAlert: Function;
};

const CityContext = createContext<null | CityContextType>(null);

export function CityContextProvider(props: any) {
  const [city, setCity] = useState<string>("");
  const [cityFormAlert, setCityFormAlert] = useState<boolean>(false);

  return <CityContext.Provider value={{ city, setCity, cityFormAlert, setCityFormAlert }}>{props.children}</CityContext.Provider>;
}

export const useCity = () => {
  const context = useContext(CityContext);
  if (!context) {
    throw new Error("CityContext s'utilise avec CityContext.Provider");
  }

  return context;
};
