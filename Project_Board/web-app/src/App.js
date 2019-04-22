import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import { Welcome, Header, Home } from "./views";

const GlobalStyle = createGlobalStyle`
  ::-webkit-scrollbar {
      display: none;
  }
  body {
    margin: 0;
    padding: 0;
  }
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyle />
        <Router>
          <Header />
          <div className="container">
            <Route exact path="/" component={Welcome} />
            <Route path="/home" component={Home} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
