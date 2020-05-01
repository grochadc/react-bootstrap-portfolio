import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Container } from "react-bootstrap";

import Navigation from "./components/navigation.js";
import RadioPage from "./components/pages/radio.js";
import VideoPage from "./components/pages/video.js";
import FotografiaPage from "./components/pages/fotografia.js";
import HomePage from "./components/pages/home.js";

import "./App.css";
import "bootswatch/dist/lux/bootstrap.min.css";

const App = () => (
  <Router>
    <Container className="p-3">
      <Navigation
        links={[
          { title: "Video", link: "video" },
          { title: "Fotografia", link: "fotografia" },
          { title: "Radio", link: "radio" }
        ]}
      />
      <Switch>
        <Route path="/radio">
          <RadioPage />
        </Route>
        <Route path="/video">
          <VideoPage />
        </Route>
        <Route path="/fotografia">
          <FotografiaPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Container>
  </Router>
);

export default App;
