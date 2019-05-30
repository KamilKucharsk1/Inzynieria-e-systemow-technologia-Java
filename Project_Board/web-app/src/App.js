import React, { Component, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { useAuthState } from "react-firebase-hooks/auth";
import { Welcome, Header, Home, Habits } from "./views";

const GlobalStyle = createGlobalStyle`
  ::-webkit-scrollbar {
      display: none;
  }
  body {
    margin: 0;
    padding: 0;
  }
`;

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <Header />
        <div className="container">
          <Route exact path="/" component={Welcome} />
          <Route path="/home" component={Home} />
          <Route path="/habits" component={Habits} />
        </div>
      </Router>
    </div>
  );
};

export default App;
