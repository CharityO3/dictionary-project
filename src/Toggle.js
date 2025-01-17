import React, { useState } from "react";
import "./App.css";
//import "./Toggle.css";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleMode() {
    setDarkMode((prevMode) => !prevMode);
  }

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <header>
        <h1>{darkMode ? "Dark Mode" : "Light Mode"}</h1>
        <button onClick={toggleMode}>
          {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </header>
    </div>
  );
}

