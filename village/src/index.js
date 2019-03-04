import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, withRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

const AppWithrouter = withRouter(App)

ReactDOM.render(
  <Router>
    <AppWithrouter />
  </Router>,
  document.getElementById("root")
);
