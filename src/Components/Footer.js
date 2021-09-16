import React from "react";
import styled from "styled-components";
import { ReactComponent as GitHub } from "./Logos/SocialMedia/GitHub.svg";
import { ReactComponent as Linkedin } from "./Logos/SocialMedia/Linkedin.svg";
import { ReactComponent as YouTube } from "./Logos/SocialMedia/YouTube.svg";

const Footer = () => {
  return (
    <StyledFooter>
      <GitHub />
      <Linkedin />
      <YouTube />
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.primary};
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2rem;

  svg {
    height: 1.5rem;
  }
`;
