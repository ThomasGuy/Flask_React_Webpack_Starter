/* eslint-disable import/no-unresolved */
import React from "react";
import { render } from "react-dom";
import Router from "./components/Router";
// import "../styles/css/my.css";
import "@scss/main.scss";


render(<Router />, document.querySelector(".reTicker"));
