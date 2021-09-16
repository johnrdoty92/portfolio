import styled from "styled-components";
import { ReactComponent as NameLogo } from "./Logos/NameLogo.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <StyledNavBar>
      <NameLogo />
      <ul>
        <li>
          <StyledLink to="/about">About</StyledLink>
        </li>
        <li>
          <StyledLink to="/contact">Contact</StyledLink>
        </li>
      </ul>
    </StyledNavBar>
  );
};

export default NavBar;

const StyledNavBar = styled.div`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.secondaryText};
  padding: 0 3rem 0 3rem;
  display: flex;
  align-items: center;
  svg {
    max-width: 10ch;
  }
  ul {
    margin-left: auto;
    display: flex;

    li {
      list-style: none;
      margin-left: 1rem;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.secondaryText};
`;
