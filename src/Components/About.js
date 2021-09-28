import { ClampWrapper, Heading } from "./StyledComponents";
import styled from "styled-components";

const About = () => {
  return (
    <ClampWrapper>
      <Heading>About Me</Heading>
      <p>
        I'm a full stack web developer seeking positions in South Korea. I use
        the MERN stack, but I have a positive attitude towards learning new
        technologies.
      </p>
      <p>
        What draws me to web development is, first of all, the aspect of
        problem-solving. I enjoy working through issues and finding the best
        solutions. Secondly, I love how technologies are always changing and
        improving.
      </p>
    </ClampWrapper>
  );
};

export default About;
