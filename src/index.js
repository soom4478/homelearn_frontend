import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import BottomNav from "./Nav/bottomNav";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <BottomNav />
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
