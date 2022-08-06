import axios from "axios";

const api = axios.create({
  baseURL: "https://api.allorigins.win/raw?url=https://www.fruityvice.com/api/fruit/all",
});

export default api;
