import styled from "styled-components";

export const StyledBreadcrumbItem = styled.li`
  /* margin: 0 0.5rem; */
  ::before {
    content: "/ ";
    padding-left: 0.5rem;
    color: #6c757d;
  }
  :first-child::before {
    content: "";
    padding-left: 0;
  }
  &:a {
    text-decoration: none;
  }
  &:a:hover {
    text-decoration: underline;
  }
`;
