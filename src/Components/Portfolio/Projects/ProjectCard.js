import styled from "styled-components";
import { PrimaryButton } from "../../StyledComponents";

const ProjectCard = ({ title, description, demo, codeLinks, isLive }) => {
  return (
    <>
      <h4>{title}</h4>
      <p>{description}</p>
      <ButtonWrapper>
        <ProjectLink as="a" href={demo} target="_blank" rel="noreferrer">
          {isLive ? "Live\xa0Site" : "Demo\xa0Video"}
        </ProjectLink>
        {codeLinks.map((item, i) => {
          return (
            <ProjectLink
              key={i}
              as="a"
              href={item.link}
              target="_blank"
              rel="noreferrer"
            >
              {item.type}
            </ProjectLink>
          );
        })}
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
