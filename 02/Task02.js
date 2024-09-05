import React from 'react';

import Button from "./../src/components/Button";
import { Row, Col, Button as RBButton } from "react-bootstrap";
import themeSettings from "../src/themeSettings";
import { ThemeProvider } from "styled-components";

const Task02 = () => {
  return (
    <Row>
      <Col>
        <RBButton variant="primary" size="lg">
          Button!
        </RBButton>
      </Col>
      <Col>
        <ThemeProvider theme={themeSettings}>
          <Button variant={"primary"} size="lg" disabled>
            Button!
          </Button>
          <Button variant={"secondary"} size="sm" active>
            Button!
          </Button>
        </ThemeProvider>
      </Col>
    </Row>
  );
};

export default Task02;

