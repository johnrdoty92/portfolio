import styled from "styled-components";
import { Wrapper } from "../../StyledComponents";

const ProjectsFilter = ({ tags }) => {
  const tagButtons = tags.map((tag, i) => {
    return <Tag key={tag + i}>{tag}</Tag>;
  });
  return (
    <ProjectsFilterWrapper>
      <FilterHeader>Filter:</FilterHeader>
      {tagButtons}
    </ProjectsFilterWrapper>
  );
};

export default ProjectsFilter;

const Tag = styled.button`
  outline: none;
  border: none;
  border-radius: 3px;
  padding: 0.5em;
  color: ${(props) => props.theme.secondaryText};
  background-color: ${(props) => props.theme.primary};
  transition: background-color 0.25s ease;
  &:hover {
    background-color: ${(props) => props.theme.primaryShadow};
    cursor: pointer;
  }
`;

const ProjectsFilterWrapper = styled(Wrapper)`
  gap: 0.5em;
  align-items: center;
  flex-flow: row wrap;
  margin: 1em auto;
`;

const FilterHeader = styled.h3`
  margin: 0;
`;
