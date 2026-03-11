import React, { useState } from "react";
// import propTypes from "prop-types";

export default function TextArea(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to upper case", "success");
  };

  const handleLwClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lower case", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("text copied", "success");
  };

  const handleCapitalize = () => {
    let newText = text
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    setText(newText);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container mt-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>
        <div class="container my-3">
          <textarea
            class="form-control"
            id="mybox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "black" : "white",

              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
          <button className="btn btn-primary mt-3" onClick={handleUpClick}>
            convert to Upper Case
          </button>
          <button className="btn btn-primary mt-3 mx-3" onClick={handleLwClick}>
            convert to Lower Case
          </button>
          <button className="btn btn-primary mt-3 mx-3" onClick={handleCopy}>
            copy
          </button>
          <button
            className="btn btn-primary mt-3 mx-3"
            onClick={handleCapitalize}
          >
            Capitalize Words
          </button>
        </div>
      </div>

      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Your text summary</h2>

        <p>
          {text.trim() === "" ? 0 : text.trim().split(/\s+/).length} words and{" "}
          {text.length} characters
        </p>

        <p>
          {0.008 * (text.trim() === "" ? 0 : text.trim().split(/\s+/).length)}{" "}
          minutes to read
        </p>

        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}
