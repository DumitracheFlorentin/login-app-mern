import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Import Provider
import { Provider } from "react-redux";
import store from "./store";

// Import Router
import { BrowserRouter as Router } from "react-router-dom";

// Import bootstrap
import "./bootstrap.min.css";

// Import Style
import "./style/style.css";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
