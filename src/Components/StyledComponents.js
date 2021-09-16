import styled from "styled-components";

export const PrimaryButton = styled.button`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.secondaryText};
  margin: 1rem;
  padding: 0.5rem;
  border-radius: 3px;
  outline: none;
  border: none;
  box-shadow: 0px 4px ${(props) => props.theme.primaryShadow};
  transition: all 0.1s ease;
  align-self: center;
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

export const Wrapper = styled.div`
  max-width: 60em;
  margin: auto;
  padding: 0 1em;
  display: flex;
  justify-content: center;
`;

export const EdgeToEdge = styled.div`
  width: 100%;
  margin-top: 2em;
  background-color: ${(props) => props.theme.faded || "none"};
  padding: 1em;
`;

export const Heading = styled.h2`
  text-transform: uppercase;
  text-align: center;
  margin: 0;
`;
