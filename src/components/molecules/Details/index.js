import React from "react";
import { useSelector } from "react-redux";
import { format } from "date-fns";
import ptBrLocale from "date-fns/locale/pt-BR";

import {  getDT } from "../../../utils/stringUtils";

import Sunset from "../../../assets/sunset.png";
import Sunrise from "../../../assets/sunrise.png";
import Humidity from "../../../assets/humidity.png";
import Uv from "../../../assets/uv.png";
import Mist from "../../../assets/mist.png";
import Wind from "../../../assets/wind.png";

import {
  DetailsCard,
  Image,
  Image2,
  Detail,
  ImgCard,
  Info,
  Description,
  Title,
  Text,
  TextInfo,
} from "./styles.js";

const Details = () => {
  const sunrise = useSelector(
    (weather) => weather?.weatherForecast.current.sunrise
  );
  const sunriseTime = getDT(sunrise);

  const sunset = useSelector(
    (weather) => weather?.weatherForecast.current.sunset
  );
  const sunsetTime = getDT(sunset);

  const humidity = useSelector(
    (weather) => weather?.weatherForecast.current.humidity
  );

  const wind = useSelector(
    (weather) => weather?.weatherForecast.current.wind_speed
  );

  const uv = useSelector((weather) => weather?.weatherForecast.current.uvi);

  const visibility = useSelector(
    (weather) => weather?.weatherForecast.current.visibility
  );

  return (
    <DetailsCard>
      <Detail>
        <ImgCard>
          <Image source={Sunrise} />
        </ImgCard>
        <Info>
          <Title>
            <Text>Nascer do sol</Text>
          </Title>
          <Description>
            <TextInfo>
              {sunriseTime
                ? format(sunriseTime, "HH:mm'h'", {
                    addSuffix: true,
                    locale: ptBrLocale,
                  })
                : " "}
            </TextInfo>
          </Description>
        </Info>
      </Detail>
      <Detail>
        <ImgCard>
          <Image source={Sunset} />
        </ImgCard>
        <Info>
          <Title>
            <Text>Pôr do sol</Text>
          </Title>
          <Description>
            <TextInfo>
              {sunsetTime
                ? format(sunsetTime, "HH:mm'h'", {
                    addSuffix: true,
                    locale: ptBrLocale,
                  })
                : " "}
            </TextInfo>
          </Description>
        </Info>
      </Detail>
      <Detail>
        <ImgCard>
          <Image2 source={Humidity} />
        </ImgCard>
        <Info>
          <Title>
            <Text>Umidade</Text>
          </Title>
          <Description>
            <TextInfo>{humidity}%</TextInfo>
          </Description>
        </Info>
      </Detail>
      <Detail>
        <ImgCard>
          <Image2 source={Wind} />
        </ImgCard>
        <Info>
          <Title>
            <Text>Vento</Text>
          </Title>
          <Description>
            <TextInfo>{Math.round(wind)} m/s</TextInfo>
          </Description>
        </Info>
      </Detail>
      <Detail>
        <ImgCard>
          <Image2 source={Uv} />
        </ImgCard>
        <Info>
          <Title>
            <Text>Índice UV</Text>
          </Title>
          <Description>
            <TextInfo>{uv}</TextInfo>
          </Description>
        </Info>
      </Detail>
      <Detail>
        <ImgCard>
          <Image2 source={Mist} />
        </ImgCard>
        <Info>
          <Title>
            <Text>Visibilidade</Text>
          </Title>
          <Description>
            <TextInfo>{visibility / 1000} k/m</TextInfo>
          </Description>
        </Info>
      </Detail>
    </DetailsCard>
  );
};

export default Details;
