// ****---- Text Form Section Component ----**** //

import React, { useState } from "react";

export default function TextForm(props) {
  // ****---- Function Declaration Section ----**** //
  const handleOnClick = (event) => {
    setText("");
  };

  const handleUpClick = () => {
    // console.log("UpperCase button was clicked: " + text);

    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    // console.log("LowerCase button was clicked: " + text);

    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    // console.log("LowerCase button was clicked: " + text);

    let newText = "";
    setText(newText);
  };

  const handleOnChange = (event) => {
    // console.log("handleOnChange");
    setText(event.target.value);
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const [text, setText] = useState("Enter text here...");

  //   text="nex text"    // Wrong Way to change the state
  //   setText(nex text);     //  Correct Way to change the state
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        {/* Text-Area Section */}
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="myBox"
            onChange={handleOnChange}
            onClick={handleOnClick}
            rows="4"
          ></textarea>
        </div>

        {/* Buttons Section */}
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          Convert To Lowercase
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button
          type="submit"
          onClick={speak}
          className="btn btn-primary mx-1 my-1"
        >
          Speak
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleExtraSpaces}
        >
          Remove extra spaces
        </button>
      </div>

      {/* Summary - Preview Section */}
      <div
        className="container my-3 "
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h2>Your Text Summary</h2>
        <p>
          <b>
            {
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length
            }
          </b>{" "}
          words and <b>{text.length}</b> characters
        </p>
        <p>
          <b>
            {0.008 *
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length}
          </b>{" "}
          Minutes to read
        </p>
        <h2>Preview Your Text</h2>
        <p>
          <i>
            {text.length > 0
              ? text
              : "Enter Something in the Text-box for Preview"}
          </i>
        </p>
      </div>
    </>
  );
}
