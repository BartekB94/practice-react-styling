import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 0.25rem 1.25rem;
  display: inline-block;
  max-width: fit-content;
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
  background-color: ${(props) => props.theme[props.variant]?.bg || "#0168D9"};
  color: ${(props) => props.theme[props.variant]?.color || "#fff"};
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
`;
