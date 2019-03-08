import React from "react";
import { X3domScene } from "../X3domScene";

export function View({ solid, full }) {
  return (
    <div className="view-container">
      <X3domScene label={solid} />
    </div>
  );
}
