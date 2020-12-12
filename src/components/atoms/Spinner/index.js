import React from "react";

import {StyledSpinner} from './styles.js'

const Spinner = () => {
  return (
    <StyledSpinner viewBox="0 0 50 50">
      <circle
        className="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="2"
      />
    </StyledSpinner>
  );
};

export default Spinner;
