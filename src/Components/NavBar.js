import styled from "styled-components";
import { ReactComponent as NameLogo } from "./Logos/NameLogo.svg";
import { ReactComponent as HamburgerButton } from "./Logos/HamburgerButton.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <StyledNavBar open={open}>
      <StyledLink to="/">
        <NameLogo className={"brand-logo"} />
      </StyledLink>
      <LinksList open={open}>
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
      </LinksList>
      <HamburgerButton
        className={"hamburger-btn"}
        onClick={() => setOpen(!open)}
      />
    </StyledNavBar>
  );
};

export default NavBar;

const StyledNavBar = styled.nav`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.secondaryText};
  height: 52px;
  padding: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
  .brand-logo {
    width: clamp(1em, 4em + 5vw, 8em);
    margin-left: 1em;
  }
  .hamburger-btn {
    margin-left: auto;
    margin-right: 1.2em;
    &:hover {
      cursor: pointer;
    }
    & > * {
      transition: all 0.5s ease;
    }
    .top {
      transform: ${({ open }) =>
        open ? "rotate(45deg) translateX(10px)" : "none"};
    }
    .middle {
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    .bottom {
      transform: ${({ open }) =>
        open ? "rotate(-45deg) translate(-25px,-10px)" : "none"};
    }
  }
  @media screen and (min-width: 576px) {
    flex-wrap: nowrap;
    .hamburger-btn {
      display: none;
    }
  } ;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.primaryShadow};
  transition: all 0.25s ease;
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.primaryText};
  }
  &.selected {
    color: ${({ theme }) => theme.primaryText};
    position: relative;
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: ${({ theme }) => theme.primaryText};
    }
  }
`;

const LinksList = styled.ul`
  position: absolute;
  top: 52px;
  transform: ${({ open }) => (open ? "scaleY(1)" : "scaleY(0)")};
  transform-origin: top;
  transition: transform 0.5s ease;
  background-color: ${({ theme }) => theme.secondary};
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  order: 3;
  li {
    list-style: none;
    text-align: center;
    margin-top: 0.5em;
    &:last-child {
      margin-bottom: 0.5em;
    }
  }
  @media screen and (min-width: 576px) {
    position: static;
    transform: none;
    transition: none;
    width: unset;
    flex-direction: row;
    background-color: ${({ theme }) => theme.primary};
    margin: 0 1em 0 auto;
    order: 2;
    li {
      margin-left: 2em;
    }
  }
`;
