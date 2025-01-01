import React, { useState } from "react";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

const JSONViewer: React.FC = () => {
  const [inputText, setInputText] = useState("");

  const handleFormatJSON = () => {
    try {
      const parsed = JSON.parse(inputText);
      setInputText(JSON.stringify(parsed, null, 4));
    } catch (e) {
      console.log(e);
      toastr.error("Invalid JSON");
    }
  };

  const handleRemoveWhitespace = () => {
    try {
      const parsed = JSON.parse(inputText);
      setInputText(JSON.stringify(parsed));
    } catch (e) {
      console.log(e);
      toastr.error("Invalid JSON", "Error");
    }
  };

  const handleClear = () => {
    setInputText("");
  };

  return (
    <div style={styles.container}>
      <div style={styles.buttonsContainer}>
        <button style={styles.button} onClick={handleFormatJSON}>
          Format JSON
        </button>
        <button style={styles.button} onClick={handleRemoveWhitespace}>
          Remove Whitespace
        </button>
        <button style={styles.clearButton} onClick={handleClear}>
          Clear
        </button>
      </div>
      <textarea
        style={styles.textarea}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter your JSON here..."
      />
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    height: "100vh",
    backgroundColor: "#f0f4f8",
    padding: "10px",
    boxSizing: "border-box",
  },
  buttonsContainer: {
    display: "flex",
    gap: "10px",
    marginBottom: "10px",
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
  textarea: {
    width: "100%",
    height: "calc(100vh - 50px)",
    padding: "10px",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "5px",
    resize: "none",
    backgroundColor: "#F9F6EE",
    color : "#000",
  },
};

export default JSONViewer;
