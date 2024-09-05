import React from "react";
import { StyledCardText } from "./styles/Card.Text.styled";

function CardText(props) {
  return <StyledCardText>{props.children}</StyledCardText>;
}

export default CardText;
