import React from "react";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import "./DraggableItem.css";

const DraggableItem = ({ type, label }) => {
  const handleDragStart = (event) => {
    event.dataTransfer.setData("element", type);
  };

  return (
    <div draggable className="block-button" onDragStart={handleDragStart}>
      <DragIndicatorIcon className="drag-icon" />
      <p>{label}</p>
    </div>
  );
};

export default DraggableItem;
