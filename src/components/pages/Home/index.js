import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Geocoder from 'react-native-geocoding';

import useGeoLocation from "../../../config/useGeolocation";
import { fetchWeather } from "../../../store/actions";

import Card from "../../atoms/Card";
import Current from "../../molecules/Current";
import Pin from '../../../assets/pin.png';

import { CityContainer, City, Image } from './styles.js'

const Home = () => {
  const dispatch = useDispatch();

  const latLon = useGeoLocation();
  console.log("latlon", latLon);

  useEffect(() => {
    if (latLon) {
      dispatch(fetchWeather(...latLon));
    }
  }, [latLon]);

  return (
    <>
      <Card>
        <CityContainer>
        <Image source={Pin} />
        <City>São Paulo, SP</City>
        </CityContainer>
        <Current />
      </Card>
    </>
  );
};

export default Home;
