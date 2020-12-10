import {
  WEATHER_FORECAST_FETCHED,
  WEATHER_LOADING,
  WEATHER_ERROR,
} from "../consts";

const INITIAL_STATE = {
  weatherForecast: [],
  loading: false,
  error: undefined,
};

const weatherReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WEATHER_FORECAST_FETCHED:
      return { ...state, weatherForecast: action.payload };
    case WEATHER_LOADING:
      return { ...state, loading: action.payload };
    case WEATHER_ERROR:
      return { ...state, error: action.error };
  }
};

export default weatherReducer;
