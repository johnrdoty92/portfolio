import React, { useState } from "react";
//Main Components
import NavBar from "./NavBar";
import MainContent from "./MainContent";
import Footer from "./Footer";
//Theme Imports
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./themes.js";
import { GlobalStyle } from "./StyledComponents";

const App = () => {
  const [dark, setDark] = useState(false);

  return (
    <ThemeProvider theme={dark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <NavBar setDark={setDark} />
      <MainContent />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
