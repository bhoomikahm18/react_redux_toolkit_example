import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { actions } from "./store/index.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
