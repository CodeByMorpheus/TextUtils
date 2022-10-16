// ****---- This Main App Js File ----**** //

import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// let name = "Morpheus";
// let name = prompt("Please write your Name");

function App() {
  // ****---- Function Declaration Section ----**** //

  const [mode, setMode] = useState("light"); //Whether Dark mode enable or not
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
      {/* Component Declaration and Calling Section */}
      <Router>
        <Navbar
          title="TextUtils"
          aboutTitle="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />

        <div className="container my-3">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="Enter the text to analyze below"
                  mode={mode}
                />
              }
            ></Route>
            <Route exact path="about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
