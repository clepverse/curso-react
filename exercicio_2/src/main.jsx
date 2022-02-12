import React from "react";
import ReactDOM from "react-dom";
import "../tailwind.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <div className="h-screen bg-slate-200">
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
