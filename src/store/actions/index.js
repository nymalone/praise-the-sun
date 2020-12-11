import {
  WEATHER_FORECAST_FETCHED,
  WEATHER_LOADING,
  WEATHER_ERROR,
} from "../consts";

import { weatherApi, handleAxiosError } from "../../services/api";
import { API_KEY } from "../../config/apiKey";

export const setWeatherForecast = (weatherForecast = []) => ({
  type: WEATHER_FORECAST_FETCHED,
  payload: weatherForecast,
});

export const setWeatherLoading = (state = false) => ({
  type: WEATHER_LOADING,
  payload: state,
});

export const setWeatherError = (error) => ({
  type: WEATHER_ERROR,
  error,
});

export const fetchWeather = (lat, lon) => async (dispatch) => {
  dispatch(setWeatherLoading(true));
  try {
    const { data } = await weatherApi({
      method: "GET",
      url: `/onecall?lat=${lat}&lon=${lon}&units=metric&lang=pt_br&appid=${API_KEY}`,
    });
    dispatch(setWeatherForecast(data));
    console.log("data")
  } catch (axiosError) {
    const error = handleAxiosError(axiosError);
    dispatch(setWeatherError(error));
  } finally {
    dispatch(setWeatherLoading(false));
  }
};
