import React from "react";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import "./DraggableItem.css";

const DraggableItem = ({ type, label }) => {
  const handleDragStart = (event) => {
    event.dataTransfer.setData("element", type);

    event.dataTransfer.effectAllowed = "move";
    event.target.classList.add("dragging");
  };
  const handleTouchStart = (event) => {
    const touch = event.touches[0];
    event.target.dataset.touchStartX = touch.clientX;
    event.target.dataset.touchStartY = touch.clientY;
  };
  const handleTouchMove = (event) => {
    console.log(2);
    const touch = event.touches[0];
    const offsetX = touch.clientX - event.target.dataset.touchStartX;
    const offsetY = touch.clientY - event.target.dataset.touchStartY;

    event.target.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  };
  const handleTouchEnd = (event) => {
    console.log(3);

    // Perform any necessary actions when touch ends
    event.target.style.transform = ""; // Reset the transform
  };

  return (
    <div
      draggable
      className="block-button"
      onDragStart={handleDragStart}
      nTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <DragIndicatorIcon className="drag-icon" />
      <p>{label}</p>
    </div>
  );
};

export default DraggableItem;
