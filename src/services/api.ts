import axios from "axios";

const api = axios.create({
  baseURL: "https://github.com/devzgabriel/technical-dictionary",
});

export default api;
