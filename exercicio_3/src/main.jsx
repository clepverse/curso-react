import React from "react";
import ReactDOM from "react-dom";
import "../tailwind.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <div className="h-screen select-none bg-slate-400 p-10">
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
