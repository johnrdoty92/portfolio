import { Switch, Route, useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Portfolio from "./Portfolio/Portfolio";
import About from "./About";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./themes.js";
import React, { useState } from "react";
import { RelativeWrapper } from "./StyledComponents";
import { useTransition, animated } from "@react-spring/web";

const GlobalStyle = createGlobalStyle`
  html {
    background-color: ${(props) => props.theme.body};
    height: 100%; 
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
  body {
    height: 100%;
    margin: 0;
    padding: 0;
    * {
    box-sizing: border-box;
    }
  }
  #root {
    ${"" /* height: 100%; */}
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }
`;

const App = () => {
  const [dark, setDark] = useState(false);
  const location = useLocation();
  const transition = useTransition(location, {
    from: { opacity: 0, translateX: "-100%", position: "absolute" },
    enter: { opacity: 1, translateX: "0%", position: "initial" },
    leave: { opacity: 0, translateX: "100%", position: "absolute" },
  });

  return (
    <ThemeProvider theme={dark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <NavBar setDark={setDark} />
      <RelativeWrapper className="relative-wrapper">
        {transition((style, item) => {
          return (
            <animated.div
              className="animated-wrapper"
              style={{ ...style, width: "100%" }}
            >
              <Switch location={item}>
                <Route path="/" exact>
                  <Portfolio />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
              </Switch>
            </animated.div>
          );
        })}
      </RelativeWrapper>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
