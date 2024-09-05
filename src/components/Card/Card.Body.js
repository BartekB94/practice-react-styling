import React from "react";
import { StyledCardBody } from "./styles";

function CardBody(props) {
  return <StyledCardBody>{props.children}</StyledCardBody>;
}

export default CardBody;
