import React, { useRef, useEffect } from "react";

export const Sphere = ({ x, color, i }) => {
  const sphereRef = useRef();

  const handleClick = e => {
    console.log("coucou");
  };

  useEffect(() => {
    // sphereRef.current.onClick = () => handleClick();
    // if (i === 0) console.log(sphereRef.current.onClick);
    sphereRef.current.addEventListener("click", handleClick);
    return sphereRef.current.removeEventListener("click", handleClick);
  }, []);

  return (
    <transform
      onClick={() => console.log("hey yo")}
      ref={sphereRef}
      is="x3d"
      key={i.toString()}
      translation={x}
    >
      <shape is="x3d">
        <appearance is="x3d">
          <material is="x3d" diffuseColor={color} />
        </appearance>
        <sphere is="x3d" />
      </shape>
    </transform>
  );
};
