import React from "react";
import ReactDOM from "react-dom";
// import BrowserRouter
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
// import routes and route to declare the main routes
import { Route, Routes } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    {/* Add BrowserRouter here */}
    <BrowserRouter>
      {/* Add Routes for declaring routes for react-router */}
      <Routes>
        {/* Add Route for declaring * route which refer to App */}
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
