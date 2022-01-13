/* eslint-disable no-undef */
import axios from "axios";

// create a new axios instance
const instance = axios.create({
  baseURL: `${process.env.VUE_APP_ENDPOINT_URL}/api/v1`
});

// before a request is made start the nprogress
instance.interceptors.request.use(config => {
  const userString = JSON.parse(sessionStorage.getItem("setResponse"));
  if (userString && userString.token) {
    config.headers['Authorization'] =  `Bearer ${userString.token.secret}`;
  }
  return config;
});

// before a response is returned stop nprogress
instance.interceptors.response.use(response => {
  return response;
});

export default () => instance;