import React, { useRef, useEffect, useState } from "react";
import x3dom from "../x3domWrapper";
import { Sphere } from "./Sphere";

import { positionsGenerator, colorGenerator } from "./shapeGenerator";

if (x3dom.Viewarea) {
  x3dom.Viewarea.prototype.onDoubleClick = () => {};
}
export function Scene({ label }) {
  const [positions] = useState(positionsGenerator(100));
  const [colors] = useState(colorGenerator(100));

  const x3d = useRef(null);

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

  // console.log(colors);

  return (
    <x3d width="1200" height="800" is="x3d" className="x3d-container" ref={x3d}>
      <scene is="x3d">
        {positions.map((x, i) => (
          <Sphere key={i.toString()} x={x} i={i} color={colors[i]} />
        ))}
      </scene>
    </x3d>
  );
}

/* const Shapes = React.forwardRef((props, ref) =>
   props.positions.map((x, i) => (
     <transform is="x3d" key={i.toString()} translation={x} ref={ref}>
       <shape is="x3d">
         <appearance is="x3d">
           <material is="x3d" diffuseColor={props.colors[i]} />
         </appearance>
       </shape>
     </transform>
   ))
 ); */

/* <viewpoint is="x3d" position="5,0,5"> */
/* <shape is="x3d">
          <appearance is="x3d">
            <material is="x3d" diffuseColor="1 0 0" />
          </appearance>
          <box is="x3d" />
        </shape> */
