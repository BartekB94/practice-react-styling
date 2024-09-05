import styled from 'styled-components';

const StyledAlert = styled.div`
  display: block;
  background-color: ${(props) => props.theme[props.variant].bg || "#CBE5FF"};
  border: 1px solid ${(props) => props.theme[props.variant].border || "#b8daff"};
  color: ${(props) => props.theme[props.variant].color || "#004085"};
  padding: 0.75rem 1.25rem;
  border-radius: 0.25rem;
  margin: 0.25rem 0;
`;

export { StyledAlert };

