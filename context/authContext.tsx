import { createContext, useContext } from "react";
import { useState } from "react";
// import { isAuthticated } from "../utils/api";

type AuthContextType = {
  isAuth: boolean;
  setIsAuth: Function;
};

const AuthContext = createContext<null | AuthContextType>(null);

export function AuthContextProvider(props: any) {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  return <AuthContext.Provider value={{ isAuth, setIsAuth }}>{props.children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth s'utilise avec AuthContext.Provider");
  }

  return context;
};
