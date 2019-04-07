import React, { useRef, useEffect } from "react";

export const Sphere = ({ x, color, i }) => {
  const sphereRef = useRef();

  const handleMouseOver = () => {
    console.log("mouse over yo", i);
  };

  // useEffect(() => {
  //   const sphere = document.getElementById(`sphere-${i}`);
  //   document.onload = () => {
  //     console.log("loaded", i);

  //     sphere.addEventListener("mouseover", handleMouseOver);
  //   };
  //   return () => sphere.removeEventListener("mouseover", handleMouseOver);
  // }, []);

  return (
    <transform ref={sphereRef} is="x3d" key={i.toString()} translation={x}>
      <shape is="x3d" onclick={`showMyBigId(${i});`}>
        <appearance is="x3d">
          <material is="x3d" diffuseColor={color} />
        </appearance>
        <sphere id={`sphere-${i}`} is="x3d" />
      </shape>
    </transform>
  );
};
