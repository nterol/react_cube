import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import x3dom from "../x3domWrapper";

import { Sphere } from "./Sphere";

import { positionsGenerator, colorGenerator } from "./shapeGenerator";
import ResizeObserver from "resize-observer-polyfill";

const Container = styled.div``;

const SphereNote = styled.div`
  z-index: 3;
  position: absolute;
  top: ${props => props.top}px;
  background: black;
  color: white;
  font-size: 12;
`;

if (x3dom.Viewarea) {
  x3dom.Viewarea.prototype.onDoubleClick = () => {};
}

export function Scene({ label }) {
  const [positions] = useState(positionsGenerator(50));
  const [colors] = useState(colorGenerator(50));
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [selected, setSelected] = useState(false);
  const [form, setForm] = useState({ volume: "sphere", id: 0 });

  const x3d = useRef(null);

  const handleMouseOver = e => {
    console.log("mouse over");
    setForm({ volume: "box", id: e.target.lastChild.id });
  };

  const handleMouseOut = e => {
    console.log("mouse out");
    setForm({ volume: "sphere", id: e.target.lastchild.id });
  };

  const handleClick = e => {
    setSelected(`${e.target.lastChild.id}`);
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

    const ro = new ResizeObserver((entries, observer) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        console.log("width", width, "height", height);
        setHeight(height);
        setWidth(width);
      }
    });

    ro.observe(document.body);

    // return () =>
    //   spheres.map((s, i) =>
    //     s.removeEventListener("mouseover", handleMouseOver)
    //   );
  }, []);

  return (
    <Container>
      <x3d
        width={600}
        height={400}
        is="x3d"
        className="x3d"
        ref={x3d}
        style={{ position: "relative" }}
      >
        <scene is="x3d">
          {positions.map((x, i) => (
            <Sphere
              key={i.toString()}
              x={x}
              i={i}
              color={colors[i]}
              form={form}
            />
          ))}
        </scene>
      </x3d>
      <SphereNote top={32}>{selected ? selected : "None"}</SphereNote>
    </Container>
  );
}
