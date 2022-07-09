import axios from "axios";
import { Inputs } from "../config/types";

export const useAuth = () => {
  const sleep = (t: number) => new Promise((resolve) => setTimeout(resolve, t));

  const sendAuth = async (url: string, formData: Inputs) => {
    try {
      axios.post(url, formData);
    } catch (err: any) {
      alert(err);
    }
  };

  return { sendAuth };
};
