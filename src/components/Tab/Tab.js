import React from "react";
import { StyledTab } from "./styles/Tab.styled";

function Tab(props) {
  return <StyledTab>{props.name}</StyledTab>;
}

export default Tab;
