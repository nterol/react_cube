import React, { useRef, useEffect, useState } from "react";

import x3dom from "../x3domWrapper";

import { Container } from "./Styles";
import { Sphere } from "./Sphere";
import { SphereController } from "./SphereController";
import { positionsGenerator, colorGenerator } from "./shapeGenerator";
import ResizeObserver from "resize-observer-polyfill";

if (x3dom.Viewarea) {
  x3dom.Viewarea.prototype.onDoubleClick = () => {};
}

export function Scene({ label }) {
  const [positions] = useState(positionsGenerator(50));
  const [colors] = useState(colorGenerator(50));
  const [resize, setResize] = useState(1);
  // const [width, setWidth] = useState(0);
  // const [height, setHeight] = useState(0);
  const [selected, setSelected] = useState(false);

  const x3d = useRef(null);

  const handleMouseOver = e => {
    console.log("mouse over");
  };

  const handleMouseOut = e => {
    console.log("mouse out");
  };

  const handleClick = e => {
    setSelected(`${e.target.lastChild.id}`);
  };

  const resizePlus = () => setResize(resize + 1);
  const resizeMinus = () => setResize(resize - 1);

  const getRadius = i => {
    if (selected) {
      const [, s] = selected.split("-");
      const ii = parseInt(s, 10);
      if (ii === i) return 1 + 0.1 * resize;
      return 1;
    }
    return 1;
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
        s.onclick = e => handleClick(e);
        s.addEventListener("mouseover", handleMouseOver);
        s.addEventListener("mouseout", handleMouseOut);
      });
    };

    // const ro = new ResizeObserver((entries, observer) => {
    //   for (const entry of entries) {
    //     const { width, height } = entry.contentRect;
    //     console.log("width", width, "height", height);
    //     setHeight(height);
    //     setWidth(width);
    //   }
    // });

    // ro.observe(document.body);

    // return () =>
    //   spheres.map((s, i) =>
    //     s.removeEventListener("mouseover", handleMouseOver)
    //   );
  }, []);

  return (
    <Container>
      <SphereController
        selected={selected}
        resizePlus={resizePlus}
        resizeMinus={resizeMinus}
        resize={resize}
      />
      <x3d
        width={"1000px"}
        height={"600px"}
        is="x3d"
        className="x3d"
        ref={x3d}
        // style={{ position: "relative" }}
      >
        <scene is="x3d">
          {positions.map((x, i) => {
            const radius = getRadius(i);
            console.log(radius);
            return (
              <Sphere
                key={i.toString()}
                x={x}
                i={i}
                color={colors[i]}
                radius={radius}
              />
            );
          })}
        </scene>
      </x3d>
    </Container>
  );
}
