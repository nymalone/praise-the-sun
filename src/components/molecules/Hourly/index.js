import React from "react";
import { useSelector } from "react-redux";
import { format } from "date-fns";
import ptBrLocale from "date-fns/locale/pt-BR";

import { getDT } from "../../../utils/stringUtils";

import { Image } from "react-native";
import {
  HourlyCard,
  HourlyContainer,
  Hour,
  Temp,
} from "./styles.js";

const Current = () => {
  const hourly = useSelector((weather) => weather?.weatherForecast.hourly);
  const hourlyIcon = useSelector((weather) => weather?.weatherForecast.hourly[0].weather[0]);

  return (
    <HourlyCard horizontal={true}>
      {hourly?.slice(0, 24).map((hour, index) => {
        const dateTime = getDT(hour.dt);

        return (
          <>
          <HourlyContainer key={index}>
              <Image
                style={{ width: 50, height: 50 }}
                source={{
                  uri: `http://openweathermap.org/img/wn/${hourlyIcon.icon}@2x.png`,
                }}
              />
            <Hour>
              {format(dateTime, "HH:mm", {
                addSuffix: true,
                locale: ptBrLocale,
              })}
            </Hour>
            <Temp>{Math.round(hour.temp)}°</Temp>
          </HourlyContainer>
          </>
        );
      })}
    </HourlyCard>
  );
};

export default Current;
