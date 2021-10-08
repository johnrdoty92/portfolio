import styled from "styled-components";
import { PrimaryButton } from "../../StyledComponents";

const ProjectCard = ({ title, description, demo, codeLinks, isLive }) => {
  return (
    <>
      <h4>{title}</h4>
      <p>{description}</p>
      <ButtonWrapper>
        {demo ? (
          <PrimaryButton as="a" href={demo} target="_blank" rel="noreferrer">
            {isLive ? "Live\xa0Site" : "Demo\xa0Video"}
          </PrimaryButton>
        ) : null}
        {codeLinks.map((item, i) => {
          return (
            <PrimaryButton
              key={i}
              as="a"
              href={item.link}
              target="_blank"
              rel="noreferrer"
            >
              {item.type}
            </PrimaryButton>
          );
        })}
      </ButtonWrapper>
    </>
  );
};

export default ProjectCard;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  margin-top: auto;
  gap: 0.5em;
`;
