import React from "react";
import {
  Container,
  Row,
  Col,
  Jumbotron,
  Figure,
  ListGroup
} from "react-bootstrap";
import profile from "../../images/profile-cropped-250.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faSoundcloud,
  faFlickr,
  faVimeo,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

import styled from "styled-components";

const StyledAnchor = styled.a`
  color: #1a1a1a;
`;

const StyledListGroup = styled(ListGroup)`
  margin: 0 15%;
`;

const StyledFigureCaption = styled(Figure.Caption)`
  margin: 0 25%;
`;

const Page = () => (
  <Jumbotron className="text-center">
    <Container>
      <Row>
        <Col>
          <Figure className="text-center">
            <h6>Acerca de Mi</h6>
            <Figure.Image width={171} height={180} src={profile} rounded />
            <StyledFigureCaption>
              Soy Licenciado en Ciencias de la Comunicación por la Universidad
              de Colima. Me apasiona el cine y la producción radiofónica.
            </StyledFigureCaption>
          </Figure>
        </Col>
      </Row>
      <Row>
        <Col>
          <StyledListGroup className="text-center" horizontal="sm">
            <ListGroup.Item>
              <FontAwesomeIcon icon={faInstagram} />{" "}
              <StyledAnchor
                href="http://instagram.com/medicengonzo"
                target="_blank"
              >
                Instagram
              </StyledAnchor>
            </ListGroup.Item>
            <ListGroup.Item>
              <FontAwesomeIcon icon={faSoundcloud} />{" "}
              <StyledAnchor
                href="http://soundcloud.com/medicengonzo"
                target="_blank"
              >
                Soundcloud
              </StyledAnchor>
            </ListGroup.Item>
            <ListGroup.Item>
              <FontAwesomeIcon icon={faVimeo} />{" "}
              <StyledAnchor
                href="http://vimeo.com/medicengonzo"
                target="_blank"
              >
                Vimeo
              </StyledAnchor>
            </ListGroup.Item>
            <ListGroup.Item>
              <FontAwesomeIcon icon={faFlickr} />{" "}
              <StyledAnchor
                href="http://flickr.com/medicengonzo"
                target="_blank"
              >
                Flickr
              </StyledAnchor>
            </ListGroup.Item>
            <ListGroup.Item>
              <FontAwesomeIcon icon={faTwitter} />{" "}
              <StyledAnchor
                href="http://twitter.com/medicengonzo"
                target="_blank"
              >
                Twitter
              </StyledAnchor>
            </ListGroup.Item>
          </StyledListGroup>
        </Col>
      </Row>
    </Container>
  </Jumbotron>
);

export default Page;
