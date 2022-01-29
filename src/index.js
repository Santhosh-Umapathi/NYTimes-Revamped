import React from "react";
import ReactDOM from "react-dom";
//Web Vitals
import reportWebVitals from "./reportWebVitals";
//Navigation
import { BrowserRouter } from "react-router-dom";
//CSS
import "./index.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import "react-toastify/dist/ReactToastify.css";
import "react-loading-skeleton/dist/skeleton.css";

//Main
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
