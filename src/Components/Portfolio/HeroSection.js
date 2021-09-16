import styled from "styled-components";
import { PrimaryButton, Wrapper } from "../StyledComponents";

const HeroSection = () => {
  return (
    <HeroSectionWrapper>
      <ValueProposition>Full Stack Web Development Services</ValueProposition>
      <ButtonWrapper>
        <PrimaryButton>PROJECTS</PrimaryButton>
        <PrimaryButton>RESUME</PrimaryButton>
      </ButtonWrapper>
    </HeroSectionWrapper>
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

const HeroSectionWrapper = styled(Wrapper)`
  min-height: 225px;
`;
