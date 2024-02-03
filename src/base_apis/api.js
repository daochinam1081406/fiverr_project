import axios from "axios";
import { TOKEN } from "../settings/config";

const TokenCybersoft = TOKEN;
const baseURL = "https://fiverrnew.cybersoft.edu.vn/api/";

let token = localStorage.getItem(TOKEN);

export const api = axios.create();

api.interceptors.request.use((config) => {
  config = {
    ...config,
    headers: {
      TokenCybersoft,
      token,
      // token,
    },
    baseURL,
  };

  return config;
});
