import styled from "styled-components";
import { PrimaryButton } from "../../StyledComponents";

const ProjectCard = ({
  title,
  description,
  demo,
  codeLinks,
  isLive,
  thumbnail,
}) => {
  return (
    <>
      <h2>{title}</h2>
      <StyledThumnail src={thumbnail} alt={"image"} />
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

const StyledThumnail = styled.div`
  height: 300px;
  background-image: linear-gradient(
      transparent 95%,
      ${({ theme }) => theme.faded}
    ),
    url(${({ src }) => src});
  background-size: cover;
  background-position: top;
`;
