import axios, { AxiosRequestConfig } from "axios";

const config: AxiosRequestConfig = {
  baseURL: "http://13.229.236.26:8080/api/v1/blog",
};

const api = axios.create(config);

export default api;