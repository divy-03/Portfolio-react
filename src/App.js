import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import React, { useState } from "react";
import Landing from "./components/Landing-main/Landing";
import Blank from "./components/blank";
import Webflow from "./components/Webflow/Webflow";

function App() {
  const [mode, setMode] = useState("Dark");

  const toggleMode = () => {
    if (mode === "Dark") {
      setMode("Light");
    } else {
      setMode("Dark");
    }
  };

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Landing mode={mode} />
      <Blank />
      <Webflow/>
    </>
  );
}

export default App;
