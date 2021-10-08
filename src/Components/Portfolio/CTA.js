import { PrimaryButton, Heading, PortfolioBlock } from "../StyledComponents";

const CTA = () => {
  return (
    <PortfolioBlock pb="4em">
      <Heading>Let's Talk</Heading>
      <PrimaryButton
        size="1.5em"
        center
        as="a"
        href="mailto:johnrdoty92@gmail.com"
      >
        CONTACT ME
      </PrimaryButton>
    </PortfolioBlock>
  );
};

export default CTA;
