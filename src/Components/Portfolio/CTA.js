import { ButtonLink, Heading, PortfolioBlock } from "../StyledComponents";

const CTA = () => {
  return (
    <PortfolioBlock last fadedBG>
      <Heading>Let's Talk</Heading>
      <ButtonLink as="a" href="mailto:johnrdoty92@gmail.com">
        CONTACT ME
      </ButtonLink>
    </PortfolioBlock>
  );
};

export default CTA;
