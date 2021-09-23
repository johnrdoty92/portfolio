import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import App from "./Components/App";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
