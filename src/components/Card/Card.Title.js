import React from "react";
import { StyledCardTitle } from "./styles";

function CardTitle(props) {
  return <StyledCardTitle>{props.children}</StyledCardTitle>;
}

export default CardTitle;
