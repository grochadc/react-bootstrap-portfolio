import React from "react";
import { Jumbotron, Alert } from "react-bootstrap";
import styled from "styled-components";
import VideoCarousel from "../videoCarousel";

const videoUrls = [
  "https://vimeo.com/355028451",
  "https://vimeo.com/294508362",
  "https://vimeo.com/293291428",
  "https://vimeo.com/97610630"
];

const StyledA = styled.a`
  color: #1a1a1a;
`;

const StyledAlert = styled(Alert)`
  margin-top: 20px;
`;

const Page = () => (
  <Jumbotron className="text-center">
    <h1 className="text-center">Video</h1>
    <VideoCarousel videos={videoUrls} />
    <StyledAlert variant="dark" className="text-center">
      Para más videos visita mi{" "}
      <strong>
        <StyledA href="http://vimeo.com/medicengonzo" target="_blank">
          Vimeo
        </StyledA>
      </strong>
    </StyledAlert>
  </Jumbotron>
);

export default Page;
