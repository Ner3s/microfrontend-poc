import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Home } from "~/page/Home";
import { Header } from "./components/Header";

import "./index.css";

const App = () => {
  return (
    <div className="container">
      <Home > asdas</Home>
    </div>
  )
};
ReactDOM.render(<App />, document.getElementById("app"));
