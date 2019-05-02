import React, { Component } from "react";
import styled from "styled-components";
import { Scene } from "./components/Scene";

const BubblyContainer = styled.div`
  border: 1px solid blue;
`;

const BubblyTitle = styled.h1`
  font-family: Avenir;
`;
class App extends Component {
  render() {
    return <Scene label="test" />;
  }
}

export default App;
