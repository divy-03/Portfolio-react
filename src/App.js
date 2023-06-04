import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("Dark");

  const toggleMode = () => {
    if (mode === "Dark") {
      setMode("Light");
    } 
    else {
      setMode("Dark");
    }
  };

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode}/>
    </>
  );
}

export default App;
