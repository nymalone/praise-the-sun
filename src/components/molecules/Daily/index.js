import React from "react";
import { useSelector } from "react-redux";
import { format } from "date-fns";
import ptBrLocale from "date-fns/locale/pt-BR";

import { toUpperCase, getDT } from "../../../utils/stringUtils";

import { Image } from "react-native";
import {
  DailyCard,
  DailyContainer,
  Day,
  WeekDay,
  Text,
  Title,
} from "./styles.js";

const Daily = () => {
  const daily = useSelector((weather) => weather?.weatherForecast.daily);

  return (
    <DailyCard>
      {daily?.slice(1, 8).map((day) => {
        const weekDay = getDT(day.dt);
        const formatedWeekDay = format(weekDay, "EEEE", {
          addSuffix: true,
          locale: ptBrLocale,
        });
        return (
          <DailyContainer>
            <Day>
              <WeekDay>{toUpperCase(formatedWeekDay)}</WeekDay>
            </Day>
            <Day>
              <Title>Min / Max</Title>
              <Text>
                {Math.round(day.temp.min)}° / {Math.round(day.temp.max)}°
              </Text>
            </Day>
          </DailyContainer>
        );
      })}
    </DailyCard>
  );
};

export default Daily;
