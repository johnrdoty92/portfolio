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
            size="clamp(.8rem, 4.5vw, 1.5rem)"
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
            size="clamp(.8rem, 4.5vw, 1.5rem)"
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
  gap: 1em;
  margin-left: 0.5em;
`;

const HeroSectionWrapper = styled(animated.div)`
  min-height: 225px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BackgroundWrapper = styled.div`
  position: relative;
`;
