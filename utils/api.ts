import axios from "axios";
import { URL_LOGIN } from "../config/config";
import { Login, Register } from "../config/types";

const sleep = (t: number) => new Promise((resolve) => setTimeout(resolve, t));

/* Authentification */
export const authenticate = (credentials: Login | Register, url: string = URL_LOGIN) => {
  return axios
    .post(url, credentials)
    .then((res) => res.data)
    .then((data) => {
      window.localStorage.setItem("authToken", data.token);
      window.localStorage.setItem("name", data.name);
      window.localStorage.setItem("email", data.email);
    });
};
