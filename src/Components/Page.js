import React, { useState, useEffect } from "react";
import "./Page.css";
import FormComponent from "./Form";
function renderElementByType(element) {
  switch (element.type) {
    case "label":
      return (
        <span
          className="label-content"
          style={{
            position: "absolute",
            // left: element?.xPos || element.position.x,
            // top: element?.yPos || element.position.y,
            fontSize: parseInt(element?.fontSize),
            fontWeight: element?.fontWeight,
          }}
        >
          {element.titleText || "dummy Content"}
        </span>
      );
    case "input":
      return (
        <input
          className="input-field"
          value={element.titleText || "dummy-value"}
          style={{
            position: "absolute",
            // left: element?.xPos || element.position.x,
            // top: element?.yPos || element.position.y,
            fontSize: parseInt(element?.fontSize),
            fontWeight: element?.fontWeight,
          }}
        />
      );
    case "button":
      return (
        <button
          className="button"
          style={{
            position: "absolute",
            // left: element?.xPos || element.position.x,
            // top: element?.yPos || element.position.y,
            fontSize: parseInt(element?.fontSize),
            fontWeight: element?.fontWeight,
          }}
        >
          {element.titleText || "dummy-text"}
        </button>
      );
    default:
      return null;
  }
}

function Page() {
  const [droppedComponents, setDroppedComponents] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedComponentIndex, setSelectedComponentIndex] = useState(null);
  const [draggedComponent, setDraggedComponent] = useState(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      // Check if the delete key is pressed
      if (
        event.key === "Delete" ||
        (event.key === "Backspace" &&
          !(
            event.target.tagName === "INPUT" ||
            event.target.tagName === "TEXTAREA"
          ))
      ) {
        // Call the delete function if a component is selected
        if (selectedComponentIndex !== null) {
          handleDeleteComponent(selectedComponentIndex);
        }
      }
      if (event.key === "Enter") {
        // Open the form for editing if a component is selected
        if (selectedComponentIndex !== null) {
          setShowForm(true);
        }
      }
    };

    // Add event listener
    document.addEventListener("keydown", handleKeyDown);

    // Remove event listener on component unmount
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedComponentIndex]);

  const handleDrop = (e) => {
    e.preventDefault();
    const componentText = e.dataTransfer.getData("element");
    console.log(componentText);
    const position = { x: e.clientX, y: e.clientY };
    if (draggedComponent == null) {
      e.dataTransfer.clearData();
      setDroppedComponents([
        ...droppedComponents,
        { type: componentText, position },
      ]);
      setSelectedComponentIndex(droppedComponents.length);
      setShowForm(true);
    } else {
      const updatedComponents = [...droppedComponents];
      updatedComponents[draggedComponent].position = {
        x: e.clientX,
        y: e.clientY,
      };
      updatedComponents[draggedComponent].xPos = e.clientX;
      updatedComponents[draggedComponent].yPos = e.clientY;

      console.log(updatedComponents);
      setDroppedComponents(updatedComponents);
      setDraggedComponent(null);
    }
  };
  const handleDragStart = (e, index) => {
    setDraggedComponent(index);
  };
  const handleDragOver = (e) => {
    e.preventDefault();
  };
  const handleDragEnd = () => {
    setDraggedComponent(null);
  };
  const handleEditComponent = (index) => {
    setSelectedComponentIndex(index);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setSelectedComponentIndex(null);
    setShowForm(false);
  };
  const handleSaveChanges = (updatedValues) => {
    if (selectedComponentIndex !== null) {
      const updatedComponents = [...droppedComponents];
      updatedComponents[selectedComponentIndex] = {
        ...updatedComponents[selectedComponentIndex],
        ...updatedValues,
      };

      setDroppedComponents(updatedComponents);
      handleCloseForm();
    }
  };
  const handleComponentClick = (index) => {
    setSelectedComponentIndex(index);
  };
  const handleDeleteComponent = (index) => {
    console.log("delete triggered");
    const updatedComponents = [...droppedComponents];
    updatedComponents.splice(index, 1);
    setDroppedComponents(updatedComponents);
    setSelectedComponentIndex(null);
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
        {droppedComponents.map((element, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              left: element?.xPos || element.position.x,
              top: element?.yPos || element.position.y,
              border:
                index !== selectedComponentIndex
                  ? ""
                  : showForm
                  ? ""
                  : "2px solid red",
              cursor:
                showForm && selectedComponentIndex === index
                  ? "default"
                  : index === draggedComponent
                  ? "grabbing"
                  : "grab",
              flex: 1,
            }}
            onDragStart={(e) => handleDragStart(e, index)}
            onDragEnd={handleDragEnd}
            draggable
            onClick={() => handleComponentClick(index)}
          >
            {/* Initially hidden until edited in the form */}
            {showForm && selectedComponentIndex === index
              ? null
              : renderElementByType(element)}
          </div>
        ))}
        {/* Render the form conditionally */}
        {showForm && selectedComponentIndex !== null && (
          <FormComponent
            initialValues={droppedComponents[selectedComponentIndex]}
            onCloseForm={handleCloseForm}
            onSaveChanges={handleSaveChanges}
          />
        )}
      </div>
    </div>
  );
}

export default Page;
