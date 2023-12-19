import React, { useState } from "react";
import "./Page.css";
function renderElementByType(element) {
  switch (element.type) {
    case "label":
      return (
        <span
          className="label-content"
          style={{
            position: "absolute",
            left: element.position.x,
            top: element.position.y,
          }}
        >
          {element.content || "dummy Content"}
        </span>
      );
    case "input":
      return (
        <input
          className="input-field"
          value={element.value || "dummy-value"}
          style={{
            position: "absolute",
            left: element.position.x,
            top: element.position.y,
          }}
        />
      );
    case "button":
      return (
        <button
          className="button"
          style={{
            position: "absolute",
            left: element.position.x,
            top: element.position.y,
          }}
        >
          {element.text || "dummy-text"}
        </button>
      );
    default:
      return null;
  }
}

function Page() {
  const [droppedComponents, setDroppedComponents] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const handleDrop = (e) => {
    e.preventDefault();
    const componentText = e.dataTransfer.getData("element");
    console.log(componentText);
    const position = { x: e.clientX, y: e.clientY };
    setDroppedComponents([
      ...droppedComponents,
      { type: componentText, position },
    ]);
    setShowForm(true);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        style={{
          flex: 1,
          border: "2px dashed #000",
          minHeight: "200px",
          padding: "16px",
          margin: "16px",
          overflowY: "auto",
          position: "relative",
        }}
      >
        {droppedComponents.map((component, index) =>
          renderElementByType(component)
        )}
        {showForm && (
          <div
            style={{
              position: "absolute",
              left: 50,
              top: 50,
              background: "#fff",
              padding: "16px",
              border: "1px solid #000",
              zIndex: 1000,
            }}
          >
            <h3>Form</h3>
            <button onClick={closeForm}>Close Form</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Page;
