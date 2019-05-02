import React from "react";

export const Volume = ({ volume, i }) =>
  volume === "sphere" ? (
    <sphere id={`sphere-${i}`} is="x3d" />
  ) : (
    <box id={`sphere-${i}`} is="x3d" />
  );

export const Sphere = ({ x, color, i, form }) => {
  // const sphereRef = useRef();

  return (
    <transform is="x3d" key={i.toString()} translation={x}>
      <shape
        is="x3d"
        // onclick={`showMyBigId(${i});`}
      >
        <appearance is="x3d">
          <material is="x3d" diffuseColor={color} />
        </appearance>
        {form.id === i ? (
          <Volume volume={form.volume} i={i} />
        ) : (
          <sphere id={`sphere-${i}`} is="x3d" />
        )}
      </shape>
    </transform>
  );
};
