import { useState } from "react";
import "./App.css";
import React from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <header>
      <h1 className="title">🎬Movies</h1>
    </header>
  );
}

export default App;
