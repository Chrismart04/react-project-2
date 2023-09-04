import { useState } from "react";
import "./App.css";
import React from "react";
import Routes from "./routers/routes";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <h1 className="title">🎬Movies</h1>
      </header>
      <Routes/>
    </>
  );
}

export default App;
