import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Portfolio from "./Portfolio/Portfolio";
import About from "./About";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./themes.js";
import React, { useState } from "react";

const GlobalStyle = createGlobalStyle`
  html {
    background-color: ${(props) => props.theme.body};
    overflow-x: hidden;
  }
    body {
        margin: 0;
        padding: 0;

        * {
        box-sizing: border-box;
        }
    }
    #page-container {
        position: relative;
        min-height: 100vh;
    }
    #content-wrap {
        padding-bottom: 2rem;
    }
`;

const App = () => {
  const [dark, setDark] = useState(false);

  return (
    <ThemeProvider theme={dark ? darkTheme : lightTheme}>
      <div id="page-container">
        <GlobalStyle />
        <div id="content-wrap">
          <Router>
            <NavBar setDark={setDark} />
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
    </ThemeProvider>
  );
};

export default App;
