import axios from "axios";

const AxiosInstance = axios.create({
  timeout: 60000,
});

export default AxiosInstance;
