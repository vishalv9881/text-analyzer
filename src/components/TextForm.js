import { useState } from 'react';

export default function TextForm() {
  const [text, setText] = useState("enter text here");

  // Convert text to UPPERCASE
  const ConvertUpCase = () => {
    setText(text.toUpperCase());
  };

  // Convert text to lowercase
  const ConvertLowCase = () => {
    setText(text.toLowerCase());
  };

  // Clear text
  const ClearText = () => {
    setText("");
  };

  // Copy to clipboard
  const CopyText = () => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard ✅");
  };

  // Remove extra spaces
  const RemoveSpaces = () => {
    let newText = text.split(/[ ]+/).join(" ");
    setText(newText);
  };

  // Handle typing
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // Count words properly (ignoring multiple spaces)
  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  return (
    <>
      <div className="container my-3">
        <h1 className="mb-3">Enter the text for performing some task</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="6"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>

        {/* Buttons */}
        <button className="btn btn-primary mx-1 my-1" type="button" onClick={ConvertUpCase} disabled={text.length===0}>
          Convert to UPPERCASE
        </button>
        <button className="btn btn-primary mx-1 my-1" type="button" onClick={ConvertLowCase} disabled={text.length===0}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-1 my-1" type="button" onClick={ClearText} disabled={text.length===0}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1 my-1" type="button" onClick={CopyText} disabled={text.length===0}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1 my-1" type="button" onClick={RemoveSpaces} disabled={text.length===0}>
          Remove Extra Spaces
        </button>
      </div>

      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p><b>{wordCount} words</b> and <b>{text.length} characters</b></p>
        <p>⏱ {0.008 * wordCount} Minutes to read</p>

        <h2 className="mt-3">Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview! Please enter text above."}</p>
      </div>
    </>
  );
}
