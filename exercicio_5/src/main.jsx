import React from "react";
import ReactDOM from "react-dom";
import "../tailwind.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <div className="">
      <App />
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
