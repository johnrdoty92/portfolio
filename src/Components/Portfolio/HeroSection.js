import styled from "styled-components";
import { animated } from "@react-spring/web";
import { PrimaryButton } from "../StyledComponents";
import HeroAnimated from "../Animations/HeroSectionAnimations.js";

const HeroSection = ({ projectsRef }) => {
  return (
    <BackgroundWrapper>
      <HeroAnimated />
      <HeroSectionWrapper>
        <ValueProposition>
          Full Stack
          <br />
          Web Development
          <br /> Solutions
        </ValueProposition>
        <ButtonWrapper>
          <PrimaryButton
            onClick={() =>
              projectsRef.current.scrollIntoView({
                block: "start",
                behavior: "smooth",
              })
            }
          >
            PROJECTS
          </PrimaryButton>
          <PrimaryButton
            as="a"
            href="JohnDotyResume2021.pdf"
            download
          >
            RESUME
          </PrimaryButton>
        </ButtonWrapper>
      </HeroSectionWrapper>
    </BackgroundWrapper>
  );
};

export default HeroSection;

const ValueProposition = styled.h1`
  display: block;
  text-align: right;
  font-size: clamp(1rem, 5vw, 2rem);
`;
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 30%;
  * {
    margin: 0.5em auto 0.5em 1em;
    text-decoration: none;
    font-size: 14px;
    height: 40px;
    padding: 0.5em;
    font-weight: normal;
  }
`;

const HeroSectionWrapper = styled(animated.div)`
  min-height: 225px;
  position: relative;
  width: min(90%, 60em);
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  * {
    flex: 1 1 0px;
  }
`;

const BackgroundWrapper = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
`;
