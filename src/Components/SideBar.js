import React from "react";
import DraggableItem from "./DraggableItem";
import "./SideBar.css";
function SideBar() {
  const blocks = [
    { type: "label", label: "Label" },
    { type: "input", label: "Input" },
    { type: "button", label: "Button" },
  ];
  return (
    <div className="sidebar">
      <h3>Blocks</h3>
      {blocks.map((block) => (
        <DraggableItem
          key={block?.type}
          type={block?.type}
          label={block?.label}
        />
      ))}
    </div>
  );
}

export default SideBar;
