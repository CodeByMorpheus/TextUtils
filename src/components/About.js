// ****---- About Us Component ----**** //

import React, { useState } from "react";

export default function About(props) {
  // ****---- Function Declaration Section ----**** //
  // const [myStyle, setMyStyle] = useState({
  //   color: "#042743",
  //   backgroundColor: "white",
  // });
  let myStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "rgb(34 74 104)" : "white",
  };

  // ****---- toggleStyle functions & btnText State used for in-page Dark Mode Button (Not needed now) ----**** //
  // const [btnText, setBtnText] = useState("Enable Dark mode");
  // const toggleStyle = () => {
  //   if (myStyle.color === "#042743") {
  //     setMyStyle({
  //       color: "white",
  //       backgroundColor: "#042743",
  //       border: "1px solid white",
  //     });
  //     setBtnText("Enable Light Mode");
  //   } else {
  //     setMyStyle({
  //       color: "#042743",
  //       backgroundColor: "white",
  //     });
  //     setBtnText("Enable Dark Mode");
  //   }
  // };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        {/* Accordion Section */}
        <h1>About Us</h1>

        <div>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                  style={myStyle}
                >
                  <strong>Analyze Your Text</strong>
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body" style={myStyle}>
                  TextUtils gives you a way to analyze your text quickly and
                  efficiently. Be it word count, character count, preview of
                  analyzed text, its a complete and a handy tool{" "}
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                  style={myStyle}
                >
                  <strong>Free to use</strong>
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body" style={myStyle}>
                  TextUtils is a free character counter tool that provides
                  instant character count & word count statistics for a given
                  text. Text Utils reports the number of words and characters.
                  Thus it is sustainable for writing text with word/character
                  limit.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                  style={myStyle}
                >
                  <strong>Browser Compatible</strong>
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body" style={myStyle}>
                  This word counter software works in any web browser such as
                  Chrome, Firefox, Internet Explorer, Safari and Opera. It suits
                  to count characters in facebook, blog, books, excel document,
                  pdf document, essay, ets.
                </div>
              </div>
            </div>
          </div>
          {/* In-Page Dark Mode Toggle Button (Not needed anymore) Section */}

          {/* <div className="container">
            <button
              onClick={toggleStyle}
              type="button"
              className="btn btn-primary my-3"
            >
              {btnText}
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
}
