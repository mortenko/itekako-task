import React from "react";
import PacmanSpinner from "./assets/spinner.gif";
import { StyledSpinner } from "./styles";
const Spinner = () => (
  <StyledSpinner>
    <img src={PacmanSpinner} alt="spin_me_around" />
  </StyledSpinner>
);
export default Spinner;
