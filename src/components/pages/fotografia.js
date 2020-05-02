import React from "react";
import { Jumbotron, Alert } from "react-bootstrap";
import styled from "styled-components";
import Carousel from "../carousel.js";

const StyledA = styled.a`
  color: #1a1a1a;
`;

const StyledAlert = styled(Alert)`
  margin-top: 20px;
`;

const Page = () => (
  <Jumbotron className="text-center">
    <h1 className="text-center">Fotografia</h1>
    <Carousel
      links={[
        "https://live.staticflickr.com/8232/8383008389_ed37a05589_c.jpg",
        "https://live.staticflickr.com/8497/8383948608_820095edc9_c.jpg"
      ]}
      render={currentUrl => (
        <a
          data-flickr-embed="true"
          data-header="true"
          data-footer="true"
          href="https://www.flickr.com/photos/medicengonzo/albums/72157714091070728"
          title="Portafolio"
        >
          <img src={currentUrl} width="100%" height="100%" alt="Portafolio" />
        </a>
      )}
    />
    <StyledAlert variant="dark" className="text-center">
      Para más fotos visita mi{" "}
      <strong>
        <StyledA href="http://flickr.com/medicengonzo">Flickr</StyledA>
      </strong>
    </StyledAlert>
  </Jumbotron>
);

export default Page;
