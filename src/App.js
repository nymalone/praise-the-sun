navigator.geolocation = require('@react-native-community/geolocation');
import React from "react";
import { Provider } from "react-redux";
import store from "./store/index";

import DayImagem from "./assets/day.png";
import NightImagem from "./assets/night.png";

import Home from "./components/pages/Home";

import { Container, ImageBackground, Title } from "./styles/globalStyles";

const App = () => (
  <Provider store={store}>
    <Container>
      <ImageBackground source={DayImagem}>
        <Title>Weather</Title>
        <Home />
      </ImageBackground>
    </Container>
  </Provider>
);

export default App;
