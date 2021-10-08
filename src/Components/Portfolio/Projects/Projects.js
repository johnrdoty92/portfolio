import { Heading, Content, PortfolioBlock } from "../../StyledComponents";
import ProjectCard from "./ProjectCard";
import ProjectsFilter from "./ProjectsFilter";
import styled from "styled-components";
import { useState } from "react";
import { useTransition, animated } from "@react-spring/web";
//Sample JSON data for testing
import data from "./sampleProjectData.json";

const Projects = ({ projectsRef }) => {
  //Get all unique tags
  const tags = [
    ...new Set(
      data.reduce((prev, current) => {
        return [...prev, ...current.tags];
      }, [])
    ),
  ];

  //Map fetched data to Card elements
  const projectCards = data.map(
    ({ title, description, demo, codeLinks, tags, isLive }, i) => {
      return (
        <ProjectCard
          key={i}
          title={title}
          description={description}
          demo={demo}
          codeLinks={codeLinks}
          tags={tags}
          isLive={isLive}
        />
      );
    }
  );

  //Handle filtering by tags
  const [filteredCards, setFilteredCards] = useState(projectCards);
  const filterByTag = (tag) => {
    if (!tag) {
      setFilteredCards(projectCards);
      return;
    }
    const filtered = projectCards.filter((card) =>
      card.props.tags.includes(tag)
    );
    setFilteredCards(filtered);
  };

  //Set up transition effects
  const transitions = useTransition(filteredCards, {
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0, position: "absolute" },
  });

  return (
    <PortfolioBlock>
      <Heading ref={projectsRef}>PROJECTS</Heading>
      <ProjectsFilter tags={tags} filterByTag={filterByTag} />
      <ProjectCardsWrapper>
        {transitions((style, item) => (
          <AnimatedCard style={style}>{item}</AnimatedCard>
        ))}
      </ProjectCardsWrapper>
    </PortfolioBlock>
  );
};

export default Projects;

const ProjectCardsWrapper = styled(Content)`
  gap: 2em;
  position: relative;
`;

const AnimatedCard = styled(animated.div)`
  padding: 1em;
  background-color: ${(props) => props.theme.faded};
  border-radius: 4px;
  max-width: 20em;
  display: flex;
  flex-flow: column;
  box-shadow: -3px 3px 5px rgba(0, 0, 0, 0.2);
  h4 {
    text-align: center;
  }
`;
