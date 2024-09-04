import React from "react";
import { StyledBreadcrumbItem } from "./styles/BreadcrumbItem.styled";

function BreadcrumbItem(props) {
  return (
    <StyledBreadcrumbItem>
      <a href={props.href}>{props.children}</a>
    </StyledBreadcrumbItem>
  );
}

export default BreadcrumbItem;
