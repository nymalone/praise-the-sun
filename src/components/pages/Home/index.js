import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Geocoder from "react-native-geocoding";

import useGeoLocation from "../../../config/useGeolocation";
import { MAP_API_KEY } from "../../../config/apiKey";

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
  const [address, setAddress] = useState(null);

  const loading = useSelector((weather) => weather?.weatherForecast.loading);
  const error = useSelector((weather) => weather?.weatherForecast.error);

  const latLon = useGeoLocation();

  useEffect(() => {
    if (latLon) {
      dispatch(fetchWeather(...latLon));
    }
  }, [latLon]);

  const handleRefresh = () => {
    dispatch(fetchWeather(...latLon));
  };

  const lat = latLon?.slice(0, 1);
  const lon = latLon?.slice(1);
  function getCity() {
    Geocoder.init(MAP_API_KEY);

    Geocoder.from({
      latitude: lat,
      longitude: lon,
    })
      .then((json) => {
        setAddress(json.results[0].address_components);
      })
      .catch((error) => console.warn(error));
    return address;
  }

  const cityName = getCity()

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
              <City>
                {cityName[1].short_name}, {cityName[4].short_name}
              </City>
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
      {error && (
        <Card>
          <Error> {error?.message} </Error>
        </Card>
      )}
    </>
  );
};

export default Home;
