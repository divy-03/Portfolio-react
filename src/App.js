import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import React, { useState } from "react";
import Landing from "./components/Landing-main/Landing"

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
      <Landing mode={mode}/>
    </>
  );
}

export default App;
