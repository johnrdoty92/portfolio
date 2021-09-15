import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Portfolio from "./Portfolio/Portfolio";
import About from "./About";
import styled, { createGlobalStyle } from "styled-components";
import styles from "./styles.js";
import React, { useContext, createContext } from "react";

const Context = createContext("Default Value");
const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;

        & > * {
        box-sizing: border-box;
        }
    }
    #page-container {
        position: relative;
        min-height: 100vh;
    }
    #content-wrap {
        padding-bottom: 2.5rem;
    }
`;
const App = () => {
  return (
    <div id="page-container">
      <GlobalStyle />
      <div id="content-wrap">
        <Router>
          <NavBar />
          <Switch>
            <Route path="/" exact>
              <Portfolio />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    </div>
  );
};

export default App;
