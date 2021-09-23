import React from "react";
import styled from "styled-components";
import { ReactComponent as GitHub } from "./Logos/SocialMedia/GitHub.svg";
import { ReactComponent as Linkedin } from "./Logos/SocialMedia/Linkedin.svg";
import { ReactComponent as YouTube } from "./Logos/SocialMedia/YouTube.svg";

const Footer = () => {
  return (
    <StyledFooter>
      <a href="#">
        <GitHub />
      </a>
      <a href="#">
        <Linkedin />
      </a>
      <a href="#">
        <YouTube />
      </a>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.primary};
  width: 100%;
  margin-top: auto;
  a {
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0.5em;
  }
`;
