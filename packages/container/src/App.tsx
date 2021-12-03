import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { RoutesApp } from "./routes";

// const Header = React.lazy(() => import('dashboard/Header').then(module => ({ default: module.Header })));

const App = () => (
  <div >
    <RoutesApp />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
