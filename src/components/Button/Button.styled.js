import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  padding: 0.25rem 1.25rem;
  margin: 0.5rem;
  border: none;
  border-radius: 0.3rem;
  font-size: ${({ size }) =>
    size === "lg"
      ? "1.25rem"
      : size === "md"
      ? "1rem"
      : size === "sm"
      ? "0.75rem"
      : "1rem"};
  background-color: ${({ variant }) => variant.bg || "#0168D9"};
  color: ${({ variant }) => variant.color || "#fff"};
  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.5;
    `}
`;
