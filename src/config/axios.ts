import axios, { AxiosRequestConfig } from "axios";

const blogConfig: AxiosRequestConfig = {
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/api/v1/blog`,
};

const userConfig: AxiosRequestConfig = {
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/api/v1/user`,
};

const tagConfig: AxiosRequestConfig = {
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/api/v1/tag`,
};

const loginConfig: AxiosRequestConfig = {
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/api/v1/admin`,
};

const subjectConfig: AxiosRequestConfig = {
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/api/v1/subject`,
};

const categoryConfig: AxiosRequestConfig = {
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/api/v1/category`,
};

const commentConfig: AxiosRequestConfig = {
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/api/v1/comment`,
};

const followConfig: AxiosRequestConfig = {
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/api/v1/follow`,
}

const bookmarkConfig: AxiosRequestConfig = {
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/api/v1/bookmark`,
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
