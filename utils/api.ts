import axios from "axios";
import { URL_LOGIN } from "../config/config";
import { Login, Register } from "../config/types";
import jwtDecode from "jwt-decode";

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

export function isAuthticated() {
  let token;
  if (typeof window !== "undefined") {
    token = window.localStorage.getItem("authToken");
  }

  if (token) {
    const { exp } = jwtDecode(token);
    if (exp * 1000 > new Date().getTime()) {
      return true;
    }
    return false;
  }
  return false;
}
