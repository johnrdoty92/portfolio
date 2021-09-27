import styled from "styled-components";
import { ReactComponent as NameLogo } from "./Logos/NameLogo.svg";
import { ReactComponent as HamburgerButton } from "./Logos/HamburgerButton.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const [mobileIsOpen, setMobileIsOpen] = useState(false);
  return (
    <StyledNavBar className={mobileIsOpen ? "hamburger-open" : ""}>
      <StyledLink to="/">
        <NameLogo />
      </StyledLink>
      <ul>
        <li>
          <StyledLink activeClassName="selected" exact to="/">
            Home
          </StyledLink>
        </li>
        <li>
          <StyledLink activeClassName="selected" to="/about">
            About
          </StyledLink>
        </li>
      </ul>
      <HamburgerButton
        onClick={() => setMobileIsOpen(!mobileIsOpen)}
        className="hamburger"
      />
    </StyledNavBar>
  );
};

export default NavBar;

const StyledNavBar = styled.nav`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.secondaryText};
  padding: 0 3rem;
  display: flex;
  align-items: center;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
  svg {
    max-width: 10ch;
  }
  ul {
    margin-left: auto;
    margin-top: 0.75em;
    margin-bottom: 0.75em;
    display: flex;

    li {
      list-style: none;
      margin-left: 1rem;
    }
  }
  svg.hamburger {
    display: none;
  }
  /* ======================= */
  /* STYLES FOR MOBILE */
  /* ======================= */
  @media (max-width: 600px) {
    position: sticky;
    top: 0px;
    z-index: 900;
    padding: 0 1rem;
    * {
      transition: all 0.5s ease;
    }
    ul {
      width: 40%;
      min-height: 100vh;
      padding: 3rem 0;
      margin: 0;
      justify-content: center;
      flex-direction: column;
      gap: 1em;
      z-index: 1000;
      position: absolute;
      top: 0;
      right: 0;
      transform: translateX(105%);
      background-color: ${(props) => props.theme.primary};
      box-shadow: -5px 0px 3px rgba(0, 0, 0, 0.2);
      li {
        text-align: center;
        margin: 0 auto 0 1.5rem;
      }
    }
    svg.hamburger {
      display: block;
      position: absolute;
      top: 5px;
      right: 9%;
      z-index: 1010;
    }
    &.hamburger-open {
      ul {
        transform: translateX(0%);
      }
      svg.hamburger {
        .top {
          transform: rotate(45deg) translate(10px, 0px);
          fill: black;
        }
        .middle {
          opacity: 0;
          fill: black;
        }
        .bottom {
          transform: rotate(-45deg) translate(-25px, -10px);
          fill: black;
        }
      }
    }
  }
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.primaryShadow};
  transition: all 0.25s ease;
  &:hover {
    color: ${({ theme }) => theme.secondaryText};
  }
  &.selected {
    color: ${({ theme }) => theme.secondaryText};
  }
`;
