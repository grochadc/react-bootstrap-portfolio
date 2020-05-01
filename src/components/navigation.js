import React from "react";

import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnchor } from "@fortawesome/free-solid-svg-icons";

const Navigation = props => (
  <Navbar bg="light" expand="lg">
    <LinkContainer to="/">
      <Navbar.Brand>
        <FontAwesomeIcon icon={faAnchor} /> Gonzalo Rocha
      </Navbar.Brand>
    </LinkContainer>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        {props.links.map((item, index) => (
          <LinkContainer to={item.link} key={index}>
            <Nav.Link>{item.link}</Nav.Link>
          </LinkContainer>
        ))}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;
