import React from "react";

export const Shape = ({ translation, color, index }, ref) => {
  return (
    <transform is="x3d" key={translation.toString()} translation={translation}>
      <shape is="x3d">
        <appearance is="x3d">
          <material is="x3d" diffuseColor={color} />
        </appearance>
        <box is="x3d" />
      </shape>
    </transform>
  );
};
