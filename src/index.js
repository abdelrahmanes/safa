import React from "react";
import ReactDOM from "react-dom/client";
// components
import App from "./App";
// styles
import "./styles/index.css";
import "./custom.scss";
// fonts
import "./fonts/cairo/Cairo-VariableFont_wght.ttf";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
