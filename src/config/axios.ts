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
  // baseURL: "https://fperspective-server.onrender.com/api/v1/admin",
  baseURL: "http://localhost:8080/api/v1/admin",
};

const subjectConfig: AxiosRequestConfig = {
  // baseURL: "https://fperspective-server.onrender.com/api/v1/subject",
  baseURL: "http://localhost:8080/api/v1/subject",
};

const categoryConfig: AxiosRequestConfig = {
  // baseURL: "https://fperspective-server.onrender.com/api/v1/subject",
  baseURL: "http://localhost:8080/api/v1/category",
};

const commentConfig: AxiosRequestConfig = {
  // baseURL: "https://fperspective-server.onrender.com/api/v1/subject",
  baseURL: "http://localhost:8080/api/v1/comment",
};

const followConfig: AxiosRequestConfig = {
  // baseURL: "https://fperspective-server.onrender.com/api/v1/subject",
  baseURL: "http://localhost:8080/api/v1/follow",
}

const bookmarkConfig: AxiosRequestConfig = {
  // baseURL: "https://fperspective-server.onrender.com/api/v1/bookmark",
  baseURL: "http://localhost:8080/api/v1/bookmark",
};

export const blogApi = axios.create(blogConfig);

export const userApi = axios.create(userConfig);

export const tagApi = axios.create(tagConfig);

export const loginApi = axios.create(loginConfig);

export const subjectApi = axios.create(subjectConfig);

export const categoryApi = axios.create(categoryConfig);

export const commentApi = axios.create(commentConfig);

export const followApi = axios.create(followConfig);

export const bookmarkApi = axios.create(bookmarkConfig);
