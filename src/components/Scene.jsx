import React, { useRef, useEffect, useState } from "react";
import x3dom from "../x3domWrapper";

import { Sphere } from "./Sphere";

import { positionsGenerator, colorGenerator } from "./shapeGenerator";

if (x3dom.Viewarea) {
  x3dom.Viewarea.prototype.onDoubleClick = () => {};
}
export function Scene({ label }) {
  const [positions] = useState(positionsGenerator(50));
  const [colors] = useState(colorGenerator(50));

  const x3d = useRef(null);
  const handleMouseOver = () => console.log("coucou");
  useEffect(() => {
    setTimeout(() => {
      x3dom.reload();
      if (x3dom.current) {
        const canvas = x3dom.current.querySelector("canvas");
        canvas.setAttribute("tabIndex", -1);

        canvas.setAttribute("aria-label", label);
      }
    });
    const spheres = positions.map((x, i) =>
      document.getElementById(`sphere-${i}`)
    );
    document.onload = () => {
      spheres.map((s, i) => s.addEventListener("mouseover", handleMouseOver));
    };

    return () =>
      spheres.map((s, i) =>
        s.removeEvenetListener("mouseover", handleMouseOver)
      );
  }, []);

  return (
    <x3d width="1200" height="800" is="x3d" className="x3d" ref={x3d}>
      <scene is="x3d">
        {positions.map((x, i) => (
          <Sphere key={i.toString()} x={x} i={i} color={colors[i]} />
        ))}
      </scene>
    </x3d>
  );
}
