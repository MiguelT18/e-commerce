import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import LogIn from "./components/Auth/LogIn/LogIn";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LogIn />
  </React.StrictMode>
);
