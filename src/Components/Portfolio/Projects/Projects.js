import { Heading, Wrapper } from "../../StyledComponents";
import ProjectCard from "./ProjectCard";
import ProjectsFilter from "./ProjectsFilter";
import styled from "styled-components";
//Sample JSON data for testing
import data from "./sampleProjectData.json";

const Projects = () => {
  const projectCards = data.map(
    ({ title, description, liveLink, codeLink }, i) => {
      return (
        <ProjectCard
          key={i}
          title={title}
          description={description}
          liveLink={liveLink}
          codeLink={codeLink}
        />
      );
    }
  );
  return (
    <ProjectWrapper>
      <Heading>PROJECTS</Heading>
      <ProjectsFilter tags={["test", "anotherTest"]} />
      <ProjectCardsWrapper>{projectCards}</ProjectCardsWrapper>
    </ProjectWrapper>
  );
};

export default Projects;

const ProjectCardsWrapper = styled(Wrapper)`
  gap: 1em;
`;

const ProjectWrapper = styled.div`
  margin-top: 2em;
`;
