import styled from "styled-components";
import { PrimaryButton } from "../../StyledComponents";

const ProjectCard = ({ title, description, liveLink, codeLink }) => {
  return (
    <>
      <h4>{title}</h4>
      <p>{description}</p>
      <ButtonWrapper>
        <ProjectLink as="a" href={liveLink}>
          Live&nbsp;Site
        </ProjectLink>
        <ProjectLink as="a" href={codeLink}>
          Code
        </ProjectLink>
      </ButtonWrapper>
    </>
  );
};

export default ProjectCard;

const ProjectLink = styled(PrimaryButton)`
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  color: white;
  flex-basis: 10ch;
  margin: 0.5em;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  margin-top: auto;
`;
