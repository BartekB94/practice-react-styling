import React from 'react';

import { StyledAlert } from './Alert.styled';


const Alert = (props) => {
  return <StyledAlert theme={props.variant}>{props.children}</StyledAlert>;
};

export default Alert;