import React from "react";
import ReactDOM from "react-dom";
import MyFile from "./myFile.js";

import "./styles.css";

function App1() {
  return (
    <div>
      <MyFile />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App1 />, rootElement);
