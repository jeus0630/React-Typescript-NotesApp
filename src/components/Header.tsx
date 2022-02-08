import React, { FunctionComponent } from 'react';
import {Container, Navbar} from "react-bootstrap";

interface OwnProps {}

type Props = OwnProps;

const Header: FunctionComponent<Props> = (props) => {

  return (
      <Navbar fixed={"top"} bg={"dark"} variant={"dark"}>
        <Container>
            <Navbar.Brand>
                React Typescript Bootstrap Tutorial
            </Navbar.Brand>
        </Container>
      </Navbar>
  );
};

export default Header;
