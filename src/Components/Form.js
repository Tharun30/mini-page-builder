import React, { useState } from "react";
import "./Form.css";
import CloseIcon from "@mui/icons-material/Close";
import { formFields } from "../Constants";

const Form = ({ initialValues, onCloseForm, onSaveChanges }) => {
  const [formState, setFormState] = useState({
    titleText: initialValues?.titleText,
    xPos: initialValues?.position?.x?.toString() || "",
    yPos: initialValues?.position?.y?.toString() || "",
    fontSize: initialValues?.fontSize || "",
    fontWeight: initialValues?.fontWeight || "",
  });

  const handleChange = (field, value) => {
    setFormState({ ...formState, [field]: value });
  };

  const handleSaveChanges = () => {
    onSaveChanges(formState);
  };

  return (
    <>
      <div className="Overlay" />
      <div className="FormContainer">
        <div className="TitleContainer">
          <span className="FormTitle">{`Edit ${initialValues?.type}`}</span>
          <CloseIcon className="CloseButton" onClick={onCloseForm} />
        </div>
        <hr className="HorizontalLine" />
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
