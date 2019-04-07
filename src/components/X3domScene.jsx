import React, { Component } from "react";
import x3dom from "x3dom";

export class X3dScene extends Component {
  componentDidMount() {
    setTimeout(() => {
      x3dom.reload();
      if (x3dom.current) {
        const canvas = x3dom.current.querySelector("canvas");
        canvas.setAttribute("tabIndex", -1);
        canvas.setHeight(400);
        canvas.setWidth(400);
        canvas.setAttribute("aria-label", this.props.label);
      }
    });
  }

  x3dom = null;

  render() {
    const { children } = this.props;
    return (
      <x3d is="x3d" className="x3d" ref={this.x3d}>
        <scene is="">
          <viewpoint is="x3d" position="0,0,5" />
          {children}
        </scene>
      </x3d>
    );
  }
}
