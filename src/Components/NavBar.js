import styled from "styled-components";

const NavBar = () => {
  return (
    <StyledNavBar>
      {/* <JohnDotyLogo /> */}
      <ul>
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
      </ul>
    </StyledNavBar>
  );
};

export default NavBar;

const StyledNavBar = styled.div``;
