import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGeoLocation from "../../../config/useGeolocation";
import { fetchWeather } from "../../../store/actions";

import Card from "../../atoms/Card";
import Current from "../../molecules/Current";
import Daily from "../../molecules/Daily";

import Pin from '../../../assets/pin.png';
import Refresh from '../../../assets/refresh.png';


import { CityContainer, City, Image, ImageButton, Button } from './styles.js'

const Home = () => {
  const dispatch = useDispatch();

  const latLon = useGeoLocation();

  useEffect(() => {
    if (latLon) {
      dispatch(fetchWeather(...latLon));
    }
  }, [latLon]);

  const handleRefresh = () => {
    dispatch(fetchWeather(...latLon))
  }

  return (
    <>
    <Button onPress={handleRefresh}>
      <ImageButton source={Refresh} />
    </Button>
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
    </>
  );
};

export default Home;
