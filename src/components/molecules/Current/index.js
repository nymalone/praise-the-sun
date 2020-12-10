import React from 'react';
import { useSelector } from "react-redux";

import Card from '../../atoms/Card';

const Current = () => {
  const cityName = useSelector((weather) => weather?.weatherForecast.cityName);
  // const cityStatus = useSelector((weather) => weather.weatherForecast?.cityStatus);
  // const temp = useSelector((weather) => weather.weatherForecast?.temp);
  // const tempMin = useSelector((weather) => weather.weatherForecast?.tempMin);
  // const tempMax = useSelector((weather) => weather.weatherForecast?.tempMax);

  //console.log("cityName", cityName)

  return (
    <Card></Card>
  );
};

export default Current;
