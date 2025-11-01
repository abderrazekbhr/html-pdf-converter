import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Editor from "./components/editor";
import { Render } from "./components/render";

function App() {
  return (
    <div className="App">
      <Editor></Editor>
      <Render />
    </div>
  );
}

export default App;
