import React from "react";
import { StyledCard } from "./styles";

function CardContainer(props) {
  return <StyledCard width={props.width}>{props.children}</StyledCard>;
}

export default CardContainer;
