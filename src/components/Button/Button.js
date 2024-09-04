import React from "react";
import { StyledButton } from "./Button.styled";

function Button({ children, variant, size }) {
  return (
    <StyledButton variant={variant} size={size}>
      {children}
    </StyledButton>
  );
}

export default Button;
