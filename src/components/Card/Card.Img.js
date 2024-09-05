import React from "react";
import { StyledCardImg } from "./styles/Card.Img.styled";

function CardImg(props) {
  return <StyledCardImg src={props.src}></StyledCardImg>;
}

export default CardImg;
