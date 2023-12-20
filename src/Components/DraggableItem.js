import React from "react";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import "./DraggableItem.css";

const DraggableItem = ({ type, label, text = "Default Text" }) => {
  const handleDragStart = (event) => {
    event.dataTransfer.setData("element", type);
    console.log("Drag started!", type, event);
  };
  const renderContent = () => {
    return (
      <>
        <DragIndicatorIcon className="drag-icon" />
        <p>{label}</p>
      </>
    );
  };

  return (
    <div draggable className="block-button" onDragStart={handleDragStart}>
      {renderContent()}
    </div>
  );
};

export default DraggableItem;
