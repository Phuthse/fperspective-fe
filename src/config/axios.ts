import axios, { AxiosRequestConfig } from "axios";

const blogConfig: AxiosRequestConfig = {
  baseURL: "http://13.212.101.8:8080/api/v1/blog",
};

const userConfig: AxiosRequestConfig = {
  baseURL: "http://13.212.101.8:8080/api/v1/user",
};

const tagConfig: AxiosRequestConfig = {
  baseURL: "http://13.212.101.8:8080/api/v1/tag",
};

export const blogApi = axios.create(blogConfig);

export const userApi = axios.create(userConfig);

export const tagApi = axios.create(tagConfig);



