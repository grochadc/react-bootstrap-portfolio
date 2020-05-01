import React from "react";
import ReactPlayer from "react-player";
import { Jumbotron, Alert } from "react-bootstrap";
import styled from "styled-components";

const StyledA = styled.a`
  color: #1a1a1a;
`;

const StyledAlert = styled(Alert)`
  margin-top: 20px;
`;

const Page = () => (
  <Jumbotron className="text-center">
    <h1 className="text-center">Radio</h1>
    <ReactPlayer url="https://soundcloud.com/medicengonzo/el-pueblo-de-los-gatos-radionovela" />
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
