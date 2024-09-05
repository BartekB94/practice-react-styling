import React from "react";
import { StyledButton } from "./Button.styled";

function Button({ children, variant, size, disabled }) {
  return (
    <StyledButton variant={variant} size={size} disabled={disabled}>
      {children}
    </StyledButton>
  );
}

export default Button;
