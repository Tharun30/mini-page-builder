// FormComponent.js
import React, { useState } from "react";
import "./Form.css"; // Import the external CSS file
import CloseIcon from "@mui/icons-material/Close";
const Form = ({ initialValues, onCloseForm, onSaveChanges }) => {
  const [formState, setFormState] = useState({
    titleText: initialValues?.titleText,
    xPos: (initialValues?.position?.x).toString() || "",
    yPos: (initialValues?.position?.y).toString() || "",
    fontSize: initialValues?.fontSize || "",
    fontWeight: initialValues?.fontWeight || "",
  });

  const handleChange = (field, value) => {
    setFormState({ ...formState, [field]: value });
  };

  const handleSaveChanges = () => {
    onSaveChanges(formState);
  };

  // Array representing form fields
  const formFields = [
    { label: "Text", field: "titleText" },
    { label: "X Position", field: "xPos" },
    { label: "Y Position", field: "yPos" },
    { label: "Font Size", field: "fontSize" },
    { label: "Font Weight", field: "fontWeight" },
  ];

  return (
    <>
      <div className="Overlay" />
      <div className="FormContainer">
        {/* Close button and title */}
        <div className="TitleContainer">
          <span className="FormTitle">{`Edit ${initialValues?.type}`}</span>
          <CloseIcon className="CloseButton" onClick={onCloseForm} />
        </div>
        <hr className="HorizontalLine" />
        {/* Text fields with titles */}
        <div className="FormFieldContainer">
          {formFields.map(({ label, field }) => (
            <div className="FormField" key={field}>
              <label className="FormFieldLabel">{label}:</label>
              <input
                type="text"
                value={formState[field]}
                onChange={(e) => handleChange(field, e.target.value)}
                className="FormFieldInput"
                placeholder={
                  label === "Text" ? `This is a ${initialValues?.type}` : ""
                }
              />
            </div>
          ))}
        </div>

        {/* Submit button */}
        <button
          type="button"
          onClick={handleSaveChanges}
          className="SubmitButton"
        >
          Save Changes
        </button>
      </div>
    </>
  );
};
export default Form;
