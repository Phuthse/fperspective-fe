import axios, { AxiosRequestConfig } from "axios";

const blogConfig: AxiosRequestConfig = {
  // baseURL: "https://fperspective-server.onrender.com/api/v1/blog",
  baseURL: "http://localhost:8080/api/v1/blog",
};

const userConfig: AxiosRequestConfig = {
  // baseURL: "https://fperspective-server.onrender.com/api/v1/user",
  baseURL: "http://localhost:8080/api/v1/user",
};

const tagConfig: AxiosRequestConfig = {
  // baseURL: "https://fperspective-server.onrender.com/api/v1/tag",
  baseURL: "http://localhost:8080/api/v1/tag",
};

const loginConfig: AxiosRequestConfig = {
  // baseURL: "https://fperspective-server.onrender.com/api/v1/tag",
  baseURL: "http://localhost:8080/api/v1/admin",
};

export const blogApi = axios.create(blogConfig);

export const userApi = axios.create(userConfig);

export const tagApi = axios.create(tagConfig);

export const loginApi = axios.create(loginConfig);