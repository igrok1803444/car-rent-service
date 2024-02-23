import axios from "axios";

const axiosConfig = {
  baseURL: "https://65d606e7f6967ba8e3bd4de5.mockapi.io/advert/",
  params: {
    limit: 12,
  },
};

const instance = axios.create(axiosConfig);

export default instance;
