import React from "react";
import styled from "styled-components";
import GlobalStyles from "../fonts/GlobalStyles";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  height: 5em;
  color: #000;
  padding: 0 10%;
`;

const Logo = styled.h1`
  font-family: "Roboto Condensed", sans-serif;
  font-size: 38px;
  margin: 0;
`;

const NavLinks = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 3em;
    font-family: "Roboto";
  }

  li {
    font-size: 20px;
  }

  a {
    text-decoration: none;
    color: #000;
  }
`;

function Header() {
  return (
    <>
      <GlobalStyles />
      <HeaderWrapper>
        <Logo>PASSBY</Logo>
        <NavLinks>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="#">Produto</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>
        </NavLinks>
      </HeaderWrapper>
    </>
  );
}

export default Header;
