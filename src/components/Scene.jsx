import React, { useRef, useEffect, useState } from "react";
import x3dom from "../x3domWrapper";

import { Sphere } from "./Sphere";

import { positionsGenerator, colorGenerator } from "./shapeGenerator";
import ResizeObserver from "resize-observer-polyfill";

if (x3dom.Viewarea) {
  x3dom.Viewarea.prototype.onDoubleClick = () => {};
}
export function Scene({ label }) {
  const [positions] = useState(positionsGenerator(50));
  const [colors] = useState(colorGenerator(50));
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const x3d = useRef(null);

  const handleMouseOver = e => {
    console.log("mouse over braaa");
  };

  const handleClick = e => {
    console.log("click click", e);
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
    const spheres = positions.map((x, i) =>
      document.getElementById(`sphere-${i}`)
    );
    document.onload = () => {
      spheres.map((s, i) => {
        s.onclick = () => handleClick(i);
        s.addEventListener("mouseover", handleMouseOver);
      });
    };

    const ro = new ResizeObserver((entries, observer) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        console.log("width", width, "height", height);
        setHeight(height);
        setWidth(width);
      }
    });

    ro.observe(document.body);

    return () =>
      spheres.map((s, i) =>
        s.removeEvenetListener("mouseover", handleMouseOver)
      );
  }, []);

  return (
    <x3d width={600} height={400} is="x3d" className="x3d" ref={x3d}>
      <scene is="x3d">
        {positions.map((x, i) => (
          <Sphere key={i.toString()} x={x} i={i} color={colors[i]} />
        ))}
      </scene>
    </x3d>
  );
}
