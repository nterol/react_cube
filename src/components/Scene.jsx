import React, { Component } from "react";
import x3dom from "x3domWrapper";

import { positionsGenerator, colorGenerator } from "./shapeGenerator";

if (x3dom.Viewarea) {
  x3dom.Viewarea.prototype.onDoubleClick = () => {};
}
export class Scene extends Component {
  state = {
    positions: positionsGenerator(100),
    colors: colorGenerator(100)
  };

  componentDidMount() {
    setTimeout(() => {
      x3dom.reload();
      if (x3dom.current) {
        const canvas = x3dom.current.querySelector("canvas");
        canvas.setAttribute("tabIndex", -1);
        canvas.setAttribute("aria-label", this.props.label);
      }
    });
  }

  render() {
    const { positions, colors } = this.state;
    return (
      <x3d is="x3d" className="x3d" ref={this.x3d}>
        <scene is="x3d">
          <viewpoint is="x3d" position="0,0,5">
            {positions.map((x, i) => (
              <transform key={i.toString()} is translation={x} ref="comp">
                <shape>
                  <appearance>
                    <material is diffuseColor={colors[i]} />
                  </appearance>
                </shape>
              </transform>
            ))}
          </viewpoint>
        </scene>
      </x3d>
    );
  }
}
