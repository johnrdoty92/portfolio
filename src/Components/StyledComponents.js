import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%; 
    margin: 0;
    padding: 0;
  }
  html {
    overflow-x: hidden;
    overflow-y: scroll;
    font-size: 16px;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  button {
    font-family: inherit;
  }
`;

export const PrimaryButton = styled.button`
  display: block;
  background-color: ${({ theme }) => theme.button.primary};
  color: ${({ theme }) => theme.button.text};
  padding: 0 0.5em;
  border-radius: 3px;
  box-shadow: 0px 4px ${({ theme }) => theme.button.shadow};
  outline: none;
  border: none;
  text-decoration: none;
  text-align: center;
  transition: all 0.1s ease;
  &:hover,
  &:focus {
    transform: translateY(-4px);
    box-shadow: 0px 8px ${({ theme }) => theme.button.shadow};
  }
  &:active {
    background-color: ${({ theme }) => theme.button.active};
    transform: translateY(-2px);
    box-shadow: 0px 6px ${({ theme }) => theme.button.shadow};
  }
`;

export const ButtonLink = styled(PrimaryButton)`
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  color: white;
  flex-basis: 10ch;
  margin: auto;
  width: fit-content;
`;

export const PortfolioBlock = styled.div`
  width: 100%;
  background: ${(props) => (props.fadedBG ? props.theme.faded : "none")};
  padding: 1.5em;
  margin-bottom: ${(props) => (props.last ? "0" : "1em")};
`;

export const ClampWrapper = styled.div`
  max-width: 60em;
  margin: auto;
  padding: 0 1em;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
`;

export const RelativeWrapper = styled.section`
  width: 100%;
  position: relative;
`;

export const Heading = styled.h2`
  text-transform: uppercase;
  text-align: center;
  margin: 0;
  font-size: clamp(1rem, 4.5vw, 1.5rem);
`;

export const Container = styled.div`
  background-color: ${(props) => props.theme.background};
`;

export const Content = styled.div`
  max-width: 60em;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
