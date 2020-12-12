import React from "react";

import { ActivityIndicator } from "react-native";

import { StyledSpinner } from "./styles.js";

const Spinner = () => {
  return (
    <StyledSpinner>
      <ActivityIndicator size="large" color="#000" />
    </StyledSpinner>
  );
};

export default Spinner;
