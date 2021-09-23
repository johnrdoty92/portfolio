import styled from "styled-components";

export const PrimaryButton = styled.button`
  display: block;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.secondaryText};
  margin: 1rem auto;
  padding: 0.5rem;
  border-radius: 3px;
  outline: none;
  border: none;
  box-shadow: 0px 4px ${(props) => props.theme.primaryShadow};
  transition: all 0.1s ease;
  align-self: center;
  &:focus {
    outline: 3px solid ${(props) => props.theme.callToAction};
  }
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0px 8px ${(props) => props.theme.primaryShadow};
  }
  &:active {
    background-color: ${(props) => props.theme.faded};
    transform: translateY(-2px);
    box-shadow: 0px 6px ${(props) => props.theme.primaryShadow};
  }
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
`;
