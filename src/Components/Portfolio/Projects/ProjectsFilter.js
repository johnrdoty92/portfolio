import styled from "styled-components";
import { Content } from "../../StyledComponents";
import { useState } from "react";

const ProjectsFilter = ({ tags, filterByTag }) => {
  const [selected, setSelected] = useState("");
  const tagButtons = tags.map((tag, i) => {
    return (
      <Tag
        onClick={() => {
          filterByTag(tag);
          setSelected(tag);
        }}
        key={tag + i}
        className={selected === tag ? "tag-selected" : ""}
      >
        {tag}
      </Tag>
    );
  });
  return (
    <ProjectsFilterWrapper>
      <FilterHeader>Filter:</FilterHeader>
      <Tag
        onClick={() => {
          filterByTag("");
          setSelected("");
        }}
        disabled={selected === ""}
      >
        Clear Filter
      </Tag>
      {tagButtons}
    </ProjectsFilterWrapper>
  );
};

export default ProjectsFilter;

const Tag = styled.button`
  font-size: 0.65rem;
  outline: none;
  border: none;
  border-radius: 3px;
  padding: 0.5em;
  color: ${(props) => props.theme.button.text};
  background-color: ${(props) => props.theme.primary};
  transition: background-color 0.25s ease;
  &:hover {
    background-color: ${(props) => props.theme.primaryShadow};
    cursor: pointer;
  }
  &:active {
    background-color: ${(props) => props.theme.secondaryText};
  }
  &.tag-selected {
    background-color: ${(props) => props.theme.primaryShadow};
    box-shadow: 0px 0px 2px 2px ${(props) => props.theme.primary};
  }
  &:disabled {
    background-color: grey;
  }
`;

const ProjectsFilterWrapper = styled(Content)`
  max-width: 30em;
  align-items: center;
  margin: 2em auto 3em auto;
  gap: 0.5em;
`;

const FilterHeader = styled.h4`
  margin: 0;
`;
