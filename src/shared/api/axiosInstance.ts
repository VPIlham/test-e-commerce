import axios from "axios";

const AxiosInstance = axios.create({
  timeout: 60000,
  baseURL: "https://my-json-server.typicode.com/VPIlham/test-e-commerce",
});

export default AxiosInstance;
