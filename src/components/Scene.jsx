import React, { Component } from "react";
import { Shape } from "./Shape";

export class Scene extends Component {
  state = {
    positions: Array.from(
      { length: 100 },
      () =>
        `${Math.random() * 100 - 50} ${Math.random() * 100 -
          50} ${Math.random() * 100 - 50}`
    ),
    colors: Array.from(
      { length: 100 },
      () => `${Math.random()} ${Math.random()} ${Math.random()}`
    )
  };

  render() {
    const { positions, colors } = this.state;
    return (
      <div className="scene-container">
        <x3d width="800px" height="600px">
          <scene>
            {positions.map((x, i) => (
              <Shape key={i.toString()} translation={x} color={colors[i]} />
            ))}
          </scene>
        </x3d>
      </div>
    );
  }
}
