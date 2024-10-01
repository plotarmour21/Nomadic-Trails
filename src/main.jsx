import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // Include your styles
import { BrowserRouter } from "react-router-dom";
// Create a root for rendering
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component wrapped in StrictMode
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <App />
  </BrowserRouter>
 
  </React.StrictMode>
);
