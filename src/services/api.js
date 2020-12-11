import axios from "axios";

export const API = "https://api.openweathermap.org/data/2.5/";

export const GET_FORECAST = "/";

export const weatherApi = axios.create({
  baseURL: API,
  timeout: 10000,
});

export const handleAxiosError = (error) => {
  const UNEXPECTED_ERROR = {
    message: "Something went wrong :( ",
  };
  if (error.request && !error.response)
    return {
      message: "You are offline, check your internet and try again",
      details: error.message,
    };
  else return UNEXPECTED_ERROR;
};
