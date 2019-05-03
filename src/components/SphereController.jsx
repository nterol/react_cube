import React from "react";

import { SphereNote, ControllerButton } from "./Styles";

export const SphereController = ({
  selected,
  resizePlus,
  resizeMinus,
  resize
}) => {
  return (
    <SphereNote top={32} left={32}>
      {selected ? selected : "Aucune sphere selectionnée"}
      <div>{resize}</div>
      <ControllerButton onClick={resizePlus}> + </ControllerButton>
      <ControllerButton onClick={resizeMinus}> - </ControllerButton>
    </SphereNote>
  );
};
