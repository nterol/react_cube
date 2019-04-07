import React from "react";

export function Shape({ translation, color, index }, ref) {
  return (
    <transform
      onClick={() => {
        console.log("coucou");
      }}
      is="x3d"
      key={translation.toString()}
      translation={translation}
    >
      <shape is="x3d">
        <appearance is="x3d">
          <material is="x3d" diffuseColor={color} />
        </appearance>
        <box is="x3d" />
      </shape>
    </transform>
  );
}
