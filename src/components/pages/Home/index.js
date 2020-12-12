import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import useGeoLocation from "../../../config/useGeolocation";
import { fetchWeather } from "../../../store/actions";

import Card from "../../atoms/Card";
import Spinner from "../../atoms/Spinner";

import Current from "../../molecules/Current";
import Daily from "../../molecules/Daily";
import Details from "../../molecules/Details";

import Pin from "../../../assets/pin.png";
import Refresh from "../../../assets/refresh.png";

import {
  CityContainer,
  City,
  Image,
  ImageButton,
  Button,
  Error,
} from "./styles.js";

const Home = () => {
  const dispatch = useDispatch();

  const latLon = useGeoLocation();

  const loading = useSelector((weather) => weather?.weatherForecast.loading);
  const error = useSelector(
    (weather) => weather.weatherForecast.error?.message
  );

  useEffect(() => {
    if (latLon) {
      dispatch(fetchWeather(...latLon));
    }
  }, [latLon]);

  const handleRefresh = () => {
    dispatch(fetchWeather(...latLon));
  };

  return (
    <>
      <Button onPress={handleRefresh}>
        <ImageButton source={Refresh} />
      </Button>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Card>
            <CityContainer>
              <Image source={Pin} />
              <City>São Paulo, SP</City>
            </CityContainer>
            <Current />
          </Card>
          <Card>
            <Daily />
          </Card>
          <Card>
            <Details />
          </Card>
        </>
      )}
      {error && <Error> {error} </Error>}
    </>
  );
};

export default Home;
