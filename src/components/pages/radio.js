import React from "react";
import ReactPlayer from "react-player";
import { Jumbotron, Alert } from "react-bootstrap";
import styled from "styled-components";
import Carousel from "../carousel";

const StyledA = styled.a`
  color: #1a1a1a;
`;

const StyledAlert = styled(Alert)`
  margin-top: 20px;
`;

const audioUrls = [
  "https://soundcloud.com/medicengonzo/el-pueblo-de-los-gatos-radionovela"
];

const Page = () => (
  <Jumbotron className="text-center">
    <h1 className="text-center">Radio</h1>
    <Carousel
      links={audioUrls}
      render={currentUrl => <ReactPlayer url={currentUrl} width="100%" />}
    />

    <StyledAlert variant="dark" className="text-center">
      Para más radio visita mi{" "}
      <strong>
        <StyledA href="http://soundcloud.com/medicengonzo" target="_blank">
          Soundcloud
        </StyledA>
      </strong>
    </StyledAlert>
  </Jumbotron>
);

export default Page;
