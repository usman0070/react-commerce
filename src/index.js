import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
// import App2 from "./App2";
//-------------------------------->>>>>>>>>>>>>
ReactDOM.render(
  <>
    {/* <App2 /> */}
    <Router>
      <App />
    </Router>
  </>,

  document.getElementById("root")
);
