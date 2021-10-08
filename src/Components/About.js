import { Content, Heading } from "./StyledComponents";

const About = () => {
  return (
    <Content margin="2em auto">
      <Heading>About Me</Heading>
      <p>
        I'm a full stack web developer seeking positions in South Korea. I
        started learning to code just under a year ago and have since taught
        myself to use a number of technologies. Currently, I use the MERN stack,
        but I am alway looking for new things to learn. Some areas I look
        forward to studying next are UI/UX, Vue.js, and SQL based databases.
      </p>
      <p>
        What draws me to web development is, first of all, the aspect of
        problem-solving. I enjoy working through issues and finding the best
        solutions. Secondly, I love how technologies are always changing and
        improving. To me, that guarantees that I will always find satisfaction
        in development, whether I implement the coding languages and libraries I
        know now or research new ones down the road.
      </p>
    </Content>
  );
};

export default About;
