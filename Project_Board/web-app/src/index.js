import React from "react";
import ReactDOM from "react-dom";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "semantic-ui-css/semantic.min.css";
import App from "./App";
import config from "./utils/config.js";

import * as firebase from "firebase";

const { firebaseConfig } = config;
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <BrowserRouter>
    <Route path="/" component={App} />
  </BrowserRouter>,
  document.getElementById("root")
);
