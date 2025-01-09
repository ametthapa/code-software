import React, { useState } from "react";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

const JSONViewer: React.FC = () => {
  // Initial state for one text area with the tab name
  const [textAreaValues, setTextAreaValues] = useState<string[]>([""]);
  const [tabNames, setTabNames] = useState<string[]>(["Tab 1"]); // Store names of each tab
  const [textareaCount, setTextareaCount] = useState(1); // Track number of text areas
  const [textareaWidth, setTextareaWidth] = useState("100%"); // Width for the first text area

  // Function to format JSON for a specific text area
  const handleFormatJSON = (index: number) => {
    try {
      const parsed = JSON.parse(textAreaValues[index]);
      const updatedValues = [...textAreaValues];
      updatedValues[index] = JSON.stringify(parsed, null, 4);
      setTextAreaValues(updatedValues);
    } catch (e) {
      toastr.error("Invalid JSON");
    }
  };

  // Function to remove whitespace for a specific text area
  const handleRemoveWhitespace = (index: number) => {
    try {
      const parsed = JSON.parse(textAreaValues[index]);
      const updatedValues = [...textAreaValues];
      updatedValues[index] = JSON.stringify(parsed); // Remove extra whitespace
      setTextAreaValues(updatedValues);
    } catch (e) {
      toastr.error("Invalid JSON");
    }
  };

  // Function to clear a specific text area
  const handleClear = (index: number) => {
    const updatedValues = [...textAreaValues];
    updatedValues[index] = ""; // Clear the respective text area's value
    setTextAreaValues(updatedValues);
  };

  // Handle Add Tab functionality
  const handleAddTab = () => {
    if (textareaCount < 4) {
      setTextareaWidth("50%"); // Halve the width of the existing text area
      setTextAreaValues([...textAreaValues, ""]); // Add a new text area with an empty value
      setTabNames([...tabNames, `Tab ${textareaCount + 1}`]); // Add a name for the new tab
      setTextareaCount(textareaCount + 1); // Increment the text area count
    } else {
      toastr.warning("Only 4 tabs are allowed for best viewing experience");
    }
  };

  // Handle editing tab names
  const handleTabNameChange = (index: number, newName: string) => {
    const updatedTabNames = [...tabNames];
    updatedTabNames[index] = newName;
    setTabNames(updatedTabNames);
  };

  return (
    <div style={styles.container}>
      {/* Header with buttons */}
      <div style={styles.header}>
        <button style={styles.addTabButton} onClick={handleAddTab}>
          Add Tab
        </button>
      </div>

      {/* Text Area Section */}
      <div style={styles.textareasContainer}>
        {/* Render all text areas with individual functionality */}
        {textAreaValues.map((value, index) => (
          <div
            key={index}
            style={{
              ...styles.textareaWrapper,
              width: index === 0 ? textareaWidth : "50%", // First one takes 50% width, others 50%
            }}
          >
            {/* Tab Name Input */}
            <input
              style={styles.tabNameInput}
              value={tabNames[index]}
              onChange={(e) => handleTabNameChange(index, e.target.value)} // Update tab name
            />

            {/* Textarea */}
            <textarea
              style={styles.textarea}
              value={value}
              onChange={(e) => {
                const updatedValues = [...textAreaValues];
                updatedValues[index] = e.target.value; // Update the respective text area's value
                setTextAreaValues(updatedValues);
              }}
              placeholder={`Enter JSON for ${tabNames[index]}`}
            />

            {/* Action Buttons for the specific tab */}
            <div style={styles.actions}>
              <button
                style={styles.button}
                onClick={() => handleFormatJSON(index)}
              >
                Format JSON
              </button>
              <button
                style={styles.button}
                onClick={() => handleRemoveWhitespace(index)}
              >
                Remove Whitespace
              </button>
              <button
                style={styles.clearButton}
                onClick={() => handleClear(index)}
              >
                Clear
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    backgroundColor: "#f0f4f8",
    padding: "10px",
    boxSizing: "border-box",
  },
  header: {
    display: "flex",
    justifyContent: "flex-start",
    gap: "10px",
    marginBottom: "10px",
  },
  addTabButton: {
    padding: "5px 10px",
    fontSize: "0.9rem",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#28a745",
    color: "#fff",
    cursor: "pointer",
  },
  button: {
    padding: "5px 10px",
    fontSize: "0.9rem",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#007bff",
    color: "#fff",
    cursor: "pointer",
  },
  clearButton: {
    padding: "5px 10px",
    fontSize: "0.9rem",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#dc3545",
    color: "#fff",
    cursor: "pointer",
  },
  textareasContainer: {
    display: "flex",
    flexDirection: "row", // Display text areas side by side
    gap: "10px",
    marginBottom: "20px",
  },
  textareaWrapper: {
    width: "100%",
    position: "relative",
  },
  textarea: {
    width: "100%",
    height: "calc(100vh - 200px)", // Adjust for header and buttons
    padding: "10px",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "5px",
    resize: "none",
    backgroundColor: "#F9F6EE",
    color: "#000",
  },
  tabNameInput: {
    width: "100%",
    padding: "5px",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "5px",
    marginBottom: "5px",
    backgroundColor: "#fff",
    color: "#000",
  },
  actions: {
    display: "flex",
    gap: "10px",
    marginTop: "10px",
  },
};

export default JSONViewer;
