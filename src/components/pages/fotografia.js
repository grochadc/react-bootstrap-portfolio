import React from "react";
import { Jumbotron, Alert } from "react-bootstrap";
import styled from "styled-components";

const FlickrPhotoEmbed =
  '<a data-flickr-embed="true" data-header="true" data-footer="true" href="https://www.flickr.com/photos/medicengonzo/albums/72157714091070728" title="Portafolio"><img src="https://live.staticflickr.com/8232/8383008389_ed37a05589_c.jpg" width="800" height="533" alt="Portafolio"></a>';

const StyledA = styled.a`
  color: #1a1a1a;
`;

const StyledAlert = styled(Alert)`
  margin-top: 20px;
`;

const Page = () => (
  <Jumbotron className="text-center">
    <h1 className="text-center">Fotografia</h1>
    <div dangerouslySetInnerHTML={{ __html: FlickrPhotoEmbed }} />
    <StyledAlert variant="dark" className="text-center">
      Para más fotos visita mi{" "}
      <strong>
        <StyledA href="http://flickr.com/medicengonzo">Flickr</StyledA>
      </strong>
    </StyledAlert>
  </Jumbotron>
);

export default Page;
