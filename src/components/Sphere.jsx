import React, { useEffect } from "react";

// export const Volume = ({ volume, i }) =>
//   volume === "sphere" ? (
//     <sphere id={`sphere-${i}`} is="x3d" />
//   ) : (
//     <box id={`sphere-${i}`} is="x3d" />
//   );

export const Sphere = ({ x, color, i, radius }) => {
  // const sphereRef = useRef();

  // const [, s] = selected.split("-");
  // const ii = parseInt(s, 10);

  return (
    <transform is="x3d" key={i.toString()} translation={x}>
      <shape
        is="x3d"
        // onclick={`showMyBigId(${i});`}
      >
        <appearance is="x3d">
          <material is="x3d" diffuseColor={color} />
        </appearance>
        <sphere id={`sphere-${i}`} is="x3d" radius={radius} />
      </shape>
    </transform>
  );
};
