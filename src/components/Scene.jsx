import React, { useRef, useEffect, useState } from "react";
import x3dom from "../x3domWrapper";

import { positionsGenerator, colorGenerator } from "./shapeGenerator";
import { Shape } from "./Shape";

if (x3dom.Viewarea) {
  x3dom.Viewarea.prototype.onDoubleClick = () => {};
}
export function Scene({ label }) {
  const [positions] = useState(positionsGenerator(100));
  const [colors] = useState(colorGenerator(100));

  const x3d = useRef(null);

  const handleClick = e => {
    console.log(e);
  };

  useEffect(() => {
    setTimeout(() => {
      x3dom.reload();
      if (x3dom.current) {
        const canvas = x3dom.current.querySelector("canvas");
        canvas.setAttribute("tabIndex", -1);

        canvas.setAttribute("aria-label", label);
      }
    });
  }, []);

  return (
    <x3d
      is="x3d"
      width="1000"
      height="500px"
      className="x3d-container"
      ref={x3d}
    >
      <scene is="x3d">
        {positions.map((x, i) => (
          <Shape
            onClick={handleClick}
            key={i.toString()}
            index={i}
            translation={x}
            color={colors[i]}
          />
        ))}
      </scene>
    </x3d>
  );
}
