import React, { useState } from "react";
//Main Components
import NavBar from "./NavBar";
import MainContent from "./MainContent";
import Footer from "./Footer";
import EmailModal from "./EmailModal";
//Theme Imports
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./themes.js";
import { GlobalStyle } from "./StyledComponents";

const App = () => {
  const [dark, setDark] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <ThemeProvider theme={dark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <NavBar setDark={setDark} dark={dark} />
      <EmailModal isOpen={showModal} setShowModal={setShowModal} />
      <MainContent setShowModal={setShowModal} />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
