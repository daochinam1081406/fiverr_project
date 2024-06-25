import axios from "axios";
import { TOKEN } from "../util/settings/config";

const TokenCybersoft =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJOb2RlSlMgMzgiLCJIZXRIYW5TdHJpbmciOiIxNC8wNy8yMDI0IiwiSGV0SGFuVGltZSI6IjE3MjA5MTUyMDAwMDAiLCJuYmYiOjE3MDI0ODY4MDAsImV4cCI6MTcyMTA2MjgwMH0.cB5XSbdlq0lzL-wmbcuAyvlRLMYFWmr20ODRWN5rPZc";

const baseURL = "https://fiverrnew.cybersoft.edu.vn/api/";

let token = localStorage.getItem(TOKEN);

export const api = axios.create({
  baseURL,
  headers: {
    TokenCybersoft,
    token,
  },
});

api.interceptors.request.use((config) => {
  const newToken = localStorage.getItem(TOKEN);
  if (newToken !== token) {
    token = newToken;
    config.headers.token = token;
  }

  return config;
});
