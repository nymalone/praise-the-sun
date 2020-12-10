import React, {useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";

import useGeoLocation from '../../../config/useGeolocation';
import { fetchWeather } from "../../../store/actions";

import Card from '../../atoms/Card';
import Current from '../../molecules/Current';


const Home = () => {
  const dispatch = useDispatch();

  const latLon = useGeoLocation();
  console.log("latlon", latLon)

  useEffect(() => {
    if (latLon) {
      dispatch(fetchWeather(...latLon));
    }
  }, [latLon]);

  // const weatherForecast = useSelector(
  //   (weather) => weather?.weatherForecast
  // );
  // console.log("weatherForecast ===>", weatherForecast?.current.feels_like)

  return (
    <Card>
      <Current />
    </Card>
  );
};

export default Home;
