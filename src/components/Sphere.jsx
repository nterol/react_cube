import React, { useRef } from "react";

export const Sphere = ({ x, color, i }) => {
  const sphereRef = useRef();

  return (
    <transform ref={sphereRef} is="x3d" key={i.toString()} translation={x}>
      <shape
        is="x3d"
        // onclick={`showMyBigId(${i});`}
      >
        <appearance is="x3d">
          <material is="x3d" diffuseColor={color} />
        </appearance>
        <sphere id={`sphere-${i}`} is="x3d" />
      </shape>
    </transform>
  );
};
