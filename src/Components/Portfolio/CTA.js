import styled from "styled-components";
import {
  PrimaryButton,
  Heading,
  PortfolioBlock,
} from "../StyledComponents";
const CTA = () => {
  return (
    <PortfolioBlock last fadedBG>
      <Heading>Let's Talk</Heading>
      <PrimaryButton>CONTACT ME</PrimaryButton>
    </PortfolioBlock>
  );
};

export default CTA;
