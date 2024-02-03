import axios from "axios";

const instance = axios.create({
  baseURL: "https://fiverrnew.cybersoft.edu.vn",
  headers: {
    TokenCybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1NSIsIkhldEhhblN0cmluZyI6IjI0LzA1LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxNjUwODgwMDAwMCIsIm5iZiI6MTY4Nzg4NTIwMCwiZXhwIjoxNzE2NjU2NDAwfQ.HsoestvkIN5Kub3jnAr8UddrPugJcxCsAm4QfMi4ZbU",
  },
});

instance.interceptors.request.use((config) => {
  const authProfile = JSON.parse(localStorage.getItem("authProfile"));

  if (authProfile) {
    config.headers = {
      ...config.headers,
      token: authProfile.token,
    };
  }

  return config;
});

export default instance;
