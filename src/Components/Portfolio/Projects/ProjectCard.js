import styled from "styled-components";
import { PrimaryButton } from "../../StyledComponents";

const ProjectCard = ({ title, description, liveLink, codeLink }) => {
  return (
    <Card>
      <h4>{title}</h4>
      <p>{description}</p>
      <ButtonWrapper>
        <ProjectLink as="a" href={liveLink}>
          Live Site
        </ProjectLink>
        <ProjectLink as="a" href={codeLink}>
          Code
        </ProjectLink>
      </ButtonWrapper>
    </Card>
  );
};

export default ProjectCard;

const Card = styled.div`
  padding: 1em;
  background-color: ${(props) => props.theme.faded};
  border-radius: 4px;
`;

const ProjectLink = styled(PrimaryButton)`
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  color: white;
  flex-basis: 10ch;
  margin:0.5em;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
`;
