// FormComponent.js
import React, { useState, useEffect } from "react";

const FormComponent = ({ initialValues, onCloseForm, onSaveChanges }) => {
  const [formState, setFormState] = useState({
    titleText: "",
    xPos: (initialValues?.position?.x).toString() || "",
    yPos: (initialValues?.position?.y).toString() || "",
    fontSize: "",
    fontWeight: "",
  });

  const handleChange = (field, value) => {
    setFormState({ ...formState, [field]: value });
  };

  const handleSaveChanges = () => {
    onSaveChanges(formState);
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        background: "#fff",
        padding: "16px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        zIndex: 1000,
        width: "400px",
      }}
    >
      {/* Close button and title */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "16px",
        }}
      >
        <span
          style={{ fontSize: "18px", fontWeight: "bold", textAlign: "left" }}
        >
          Edit
        </span>
        <button
          style={{
            background: "none",
            border: "none",
            fontSize: "20px",
            color: "#666",
          }}
          onClick={onCloseForm}
        >
          &#10006;
        </button>
      </div>

      {/* Text fields with titles */}
      <div style={{ marginBottom: "16px" }}>
        <div style={{ marginBottom: "12px" }}>
          <label
            style={{
              fontSize: "14px",
              fontWeight: "bold",
              display: "block",
              textAlign: "left",
            }}
          >
            Title Text:
          </label>
          <input
            type="text"
            value={formState.titleText}
            onChange={(e) => handleChange("titleText", e.target.value)}
            style={{
              width: "350px",
              height: "40px",
              margin: "8px 0",
              padding: "8px",
            }}
          />
        </div>
        <div style={{ marginBottom: "12px" }}>
          <label
            style={{
              fontSize: "14px",
              fontWeight: "bold",
              display: "block",
              textAlign: "left",
            }}
          >
            X Position:
          </label>
          <input
            type="text"
            value={formState.xPos}
            onChange={(e) => handleChange("xPos", e.target.value)}
            style={{
              width: "350px",
              height: "40px",
              margin: "8px 0",
              padding: "8px",
            }}
          />
        </div>
        <div style={{ marginBottom: "12px" }}>
          <label
            style={{
              fontSize: "14px",
              fontWeight: "bold",
              display: "block",
              textAlign: "left",
            }}
          >
            Y Position:
          </label>
          <input
            type="text"
            value={formState.yPos}
            onChange={(e) => handleChange("yPos", e.target.value)}
            style={{
              width: "350px",
              height: "40px",
              margin: "8px 0",
              padding: "8px",
            }}
          />
        </div>
        <div style={{ marginBottom: "12px" }}>
          <label
            style={{
              fontSize: "14px",
              fontWeight: "bold",
              display: "block",
              textAlign: "left",
            }}
          >
            Font Size:
          </label>
          <input
            type="text"
            value={formState.fontSize}
            onChange={(e) => handleChange("fontSize", e.target.value)}
            style={{
              width: "350px",
              height: "40px",
              margin: "8px 0",
              padding: "8px",
            }}
          />
        </div>
        <div style={{ marginBottom: "12px" }}>
          <label
            style={{
              fontSize: "14px",
              fontWeight: "bold",
              display: "block",
              textAlign: "left",
            }}
          >
            Font Weight:
          </label>
          <input
            type="text"
            value={formState.fontWeight}
            onChange={(e) => handleChange("fontWeight", e.target.value)}
            style={{
              width: "350px",
              height: "40px",
              margin: "8px 0",
              padding: "8px",
            }}
          />
        </div>
      </div>

      {/* Submit button */}
      <button
        type="button"
        onClick={handleSaveChanges}
        style={{
          background: "#007BFF",
          color: "#fff",
          border: "none",
          padding: "10px",
          borderRadius: "4px",
          textAlign: "left",
          width: "100%",
        }}
      >
        Save Changes
      </button>
    </div>
  );
};

export default FormComponent;
