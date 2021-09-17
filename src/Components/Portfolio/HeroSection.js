import styled from "styled-components";
import { useTransition, animated } from "@react-spring/web";
import { PrimaryButton, Wrapper } from "../StyledComponents";
import HeroAnimated from "../Animations/HeroSectionAnimations.js";

const HeroSection = () => {
  return (
    <BackgroundWrapper>
      <HeroAnimated />
      <HeroSectionWrapper>
        <ValueProposition>Full Stack Web Development Services</ValueProposition>
        <ButtonWrapper>
          <PrimaryButton>PROJECTS</PrimaryButton>
          <PrimaryButton>RESUME</PrimaryButton>
        </ButtonWrapper>
      </HeroSectionWrapper>
    </BackgroundWrapper>
  );
};

export default HeroSection;

const ValueProposition = styled.h1`
  display: block;
  width: 30%;
  text-align: right;
`;
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 30%;
`;

const HeroSectionWrapper = styled(animated.div)`
  min-height: 225px;
  position: relative;
  width: min(90%, 60em);
  margin: auto;
  padding: 0 1em;
  display: flex;
  justify-content: center;
`;

const BackgroundWrapper = styled.div`
  width: 100%;
  position: relative;
`;
