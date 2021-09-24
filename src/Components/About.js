import { ClampWrapper, Heading } from "./StyledComponents";
import styled from "styled-components";

const About = () => {
  return (
    <ClampWrapper>
      <AboutMeHeading>About Me</AboutMeHeading>
      <Typography>
        I'm a full stack web developer seeking positions in South Korea. I use
        the MERN stack, but I have a positive attitude towards learning new
        technologies.
      </Typography>
      <Typography>
        What draws me to web development is, first of all, the aspect of
        problem-solving. I enjoy working through issues and finding the best
        solutions. Secondly, I love how technologies are always changing and
        improving.
      </Typography>
    </ClampWrapper>
  );
};

export default About;

const AboutMeHeading = styled(Heading)`
  margin-top: 1rem;
`;

const Typography = styled.p`
  text-indent: 2rem;
`;
