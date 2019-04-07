import React, { Component } from "react";
import { Container } from "./components/Styles";
import { Scene } from "./components/Scene";
import "./components/main.scss";

class App extends Component {
  render() {
    return (
      <Container>
        <Scene label="test" />
      </Container>
    );
  }
}

export default App;
