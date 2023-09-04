import { useState } from "react";
import "./App.css";
import React from "react";
import {MyRoutes} from "./routers/routes";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <h1 className="title">🎬Movies</h1>
      </header>
      <MyRoutes/>
    </>
  );
}

export default App;
