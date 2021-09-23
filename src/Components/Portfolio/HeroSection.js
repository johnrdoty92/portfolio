import styled from "styled-components";
import { animated } from "@react-spring/web";
import { PrimaryButton } from "../StyledComponents";
import HeroAnimated from "../Animations/HeroSectionAnimations(2).js";

const HeroSection = ({ projectsRef }) => {
  return (
    <BackgroundWrapper>
      <HeroAnimated />
      <HeroSectionWrapper>
        <ValueProposition>Full Stack Web Development Services</ValueProposition>
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
          <PrimaryButton>RESUME</PrimaryButton>
        </ButtonWrapper>
      </HeroSectionWrapper>
    </BackgroundWrapper>
  );
};

export default HeroSection;

const ValueProposition = styled.h1`
  display: block;
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
  align-items: center;
`;

const BackgroundWrapper = styled.div`
  width: 100%;
  position: relative;
`;
