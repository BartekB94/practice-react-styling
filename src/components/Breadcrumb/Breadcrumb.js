import React from "react";
import { StyledBreadcrumb } from "./styles/Breadcrumb.styled";

function Breadcrumb(props) {
  return <StyledBreadcrumb>{props.children}</StyledBreadcrumb>;
}

export default Breadcrumb;
