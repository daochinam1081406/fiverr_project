import axios from "axios";
import { TOKEN } from "../util/settings/config";
const TokenCybersoft =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1NSIsIkhldEhhblN0cmluZyI6IjI0LzA1LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxNjUwODgwMDAwMCIsIm5iZiI6MTY4Nzg4NTIwMCwiZXhwIjoxNzE2NjU2NDAwfQ.HsoestvkIN5Kub3jnAr8UddrPugJcxCsAm4QfMi4ZbU";
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
