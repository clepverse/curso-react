import React from "react";
import ReactDOM from "react-dom";
import "../tailwind.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <div className="bg-slate-200 h-screen">
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
