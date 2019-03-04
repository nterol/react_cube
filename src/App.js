import React, { Component } from "react";
import { Container } from "./components/Container";
import { Scene } from "./components/Scene";
import "./components/main.scss";

class App extends Component {
  render() {
    return (
      <Container>
        <h1>TITRE</h1>
        <Scene />
      </Container>
    );
  }
}

export default App;
