import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { format } from "date-fns";
import ptBrLocale from "date-fns/locale/pt-BR";

import { toUpperCase, getDT } from "../../../utils/stringUtils";

import Hourly from "../Hourly";

import { Image } from "react-native";
import {
  CurrentCard,
  FlexContainer,
  Container,
  Description,
  Text,
  Status,
  Date,
} from "./styles.js";

const Current = () => {
  const temp = useSelector((weather) => weather?.weatherForecast.current.temp);

  const status = useSelector(
    (weather) => weather?.weatherForecast.current.weather[0].description
  );

  const icon = useSelector(
    (weather) => weather?.weatherForecast.current.weather[0].icon
  );

  const tempMin = useSelector(
    (weather) => weather?.weatherForecast.daily[0].temp.min
  );

  const tempMax = useSelector(
    (weather) => weather?.weatherForecast.daily[0].temp.max
  );

  const feelsLike = useSelector(
    (weather) => weather?.weatherForecast.current.feels_like
  );

  const dt = useSelector((weather) => weather?.weatherForecast.current.dt);
  const dateTime = getDT(dt);

  return (
    <CurrentCard>
      <Date>
        {dateTime
          ? format(dateTime, "dd 'de' MMMM', às ' HH:mm'h'", {
              addSuffix: true,
              locale: ptBrLocale,
            })
          : " "}
      </Date>
      <FlexContainer>
        <Container>
          <FlexContainer>
            <Image
              style={{ width: 60, height: 60 }}
              source={{
                uri: `http://openweathermap.org/img/wn/${icon}@2x.png`,
              }}
            />
            <Text>{Math.round(temp)}°</Text>
          </FlexContainer>
        </Container>
        <Description>
          <Status>{toUpperCase(status)}</Status>
          <Status>
            {Math.round(tempMin)}° / {Math.round(tempMax)}°
          </Status>
          <Status>Sensação {Math.round(feelsLike)}°</Status>
        </Description>
      </FlexContainer>
      <Hourly />
    </CurrentCard>
  );
};

export default Current;
