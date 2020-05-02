import React, { useState } from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "react-bootstrap";

/*
HOW TO USE THE CAROUSEL COMPONENT
This component takes two props:

Prop Name |  Type  | Description
links        array   An array with the links you want to use.
render     function  An anonymous functional component.

The function you use in the render prop will give you the current link as an argument.

<Carousel
  links={["an array with","the links you want to use"]}
  render={(currentLink => <AComponentToRender href={currentLink} /> )} />
*/

const StyledButton = styled.button`
  background: none !important;
  border: none;
  padding: 0 25px !important;
  /*input has OS specific font-family*/
  cursor: pointer;
  color: #1a1a1a;
  margin: 20px 20px;
  ${props =>
    props.disabled &&
    css`
      opacity: 0.6;
      cursor: not-allowed;
    `};
`;

const Carousel = ({ links, render }) => {
  const [count, setCount] = useState(0);
  const nextVideo = () => {
    if (count === links.length) {
    }
    setCount(count + 1);
  };
  const previousVideo = () => {
    setCount(count - 1);
  };
  const LeftButton = ({ disabled }) => (
    <StyledButton onClick={() => previousVideo()} disabled={disabled}>
      <FontAwesomeIcon icon={faAngleLeft} size="2x" />
    </StyledButton>
  );

  const RightButton = ({ disabled }) => (
    <StyledButton onClick={() => nextVideo()} disabled={disabled}>
      <FontAwesomeIcon icon={faAngleRight} size="2x" />
    </StyledButton>
  );
  return (
    <Container className="text-center">
      <Row>
        <Col>{render(links[count])}</Col>
      </Row>
      <Row>
        <Col>
          {count === 0 ? <LeftButton disabled /> : <LeftButton />}
          {count === links.length - 1 ? (
            <RightButton disabled />
          ) : (
            <RightButton />
          )}
        </Col>
      </Row>
      <Row>
        <Col>
          {count + 1} de {links.length}
        </Col>
      </Row>
    </Container>
  );
};

export default Carousel;
