import styled from "styled-components";
import {
  Wrapper,
  PrimaryButton,
  Heading,
  EdgeToEdge,
} from "../StyledComponents";
const CTA = () => {
  return (
    <EdgeToEdge>
      <CTAWrapper>
        <Heading>Let's Talk</Heading>
        <PrimaryButton>CONTACT ME</PrimaryButton>
      </CTAWrapper>
    </EdgeToEdge>
  );
};

export default CTA;

const CTAWrapper = styled(Wrapper)`
  background-color: ${(props) => props.theme.faded};
  flex-direction: column;
`;
