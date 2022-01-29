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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
