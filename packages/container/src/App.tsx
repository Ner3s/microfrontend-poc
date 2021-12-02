import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

// const Header = React.lazy(() => import('dashboard/Header').then(module => ({ default: module.Header })));

const App = () => (
  <div className="container">
    <React.Suspense fallback={<div><h1>LOADING...</h1></div>}>
      {/* <Header /> */}
    </React.Suspense>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
