import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%; 
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.background}
  }
  html {
    overflow-x: hidden;
    overflow-y: scroll;
    font-size: 16px;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  h1, h2, h3, h4, p {
    color: ${({ theme }) => theme.mainText};
  }
  button {
    font-family: inherit;
  }
  p {
    text-indent: 2em;
  }
  svg > .letter {
    fill: ${({ theme }) => theme.mainText}
  }
  .ReactModal__Overlay {
    opacity: 0;
    transition: opacity 250ms ease-in-out;
    }

  .ReactModal__Overlay--after-open{
      opacity: 1;
  }
  .ReactModal__Overlay--before-close{
      opacity: 0;
  }
`;

export const PrimaryButton = styled.button`
  display: block;
  font-size: ${({ size }) => (size ? size : "initial")};
  width: ${({ as }) => (as === "a" ? "fit-content" : "initial")};
  margin: ${({ center }) => (center ? "auto" : "initial")};
  padding: 0.25em 0.5em;
  border: none;
  border-radius: 3px;
  box-shadow: 0px 4px ${({ theme }) => theme.button.shadow};
  outline: none;
  background-color: ${({ theme }) => theme.button.primary};
  color: ${({ theme }) => theme.button.text};
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
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

export const PortfolioBlock = styled.div`
  padding: 3em 0.5em ${(props) => (props.pb ? props.pb : "3em")} 0.5em;
  &:nth-child(even) {
    background: ${({ theme }) => theme.faded};
  }
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
  margin: ${({ margin }) => (margin ? margin : "auto")};
  padding: 0 1em;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
`;
