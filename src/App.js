navigator.geolocation = require("@react-native-community/geolocation");
import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import { format } from "date-fns";
import ptBrLocale from "date-fns/locale/pt-BR";

import store from "./store/index";

import DayImage from "./assets/day.png";
import NightImage from "./assets/night.png";

import Home from "./components/pages/Home";

import { SafeAreaView } from "react-native";

import { Container, ImageBackground, Title } from "./styles/globalStyles";

const App = () => {
  const [backgroundImage, setBackgroundImage] = useState(DayImage);

  useEffect(() => {
    const currentHour = Date.now();
    const hour = format(currentHour, "HH", {
      addSuffix: true,
      locale: ptBrLocale,
    });
    console.log("HOUR", hour)

    if (hour >= 6 && hour < 18) {
      setBackgroundImage(DayImage);
    } else {
      setBackgroundImage(NightImage);
    }
  }, []);
  return (
    <Provider store={store}>
      <SafeAreaView>
        <Container vertical={true}>
          <ImageBackground source={`${backgroundImage}`}>
            <Title>Weather</Title>
            <Home />
          </ImageBackground>
        </Container>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
