import React from 'react';
import styled from 'styled-components';
import Logo from '../Svg/logo';

const Container = styled.div`
  align-items: center;
  background-color: #353940;
  display: flex;
  justify-content: space-between;
  padding: 1em;
`;

const NavContainer = styled.div`
  align-items: center;
  display: flex;
`;

const NavMenu = styled.nav`
  margin-left: 1em;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: inline;
    margin-right: 0.75em;

    a {
      color: #ffffff;
      font-size: 0.8em;
      font-weight: 400;
      letter-spacing: 0.04em;
      opacity: 0.8;
      text-decoration: none;
      transition: all 200ms ease;

      &:hover {
        opacity: 1;
      }
    }

    &:last-child {
      margin-right: 0;
    }
  }
`;

const LoginButton = styled.a`
  background-color: #385cf7;
  color: #ffffff;
  font-size: 0.8em;
  font-weight: bold;
  letter-spacing: 0.04em;
  padding: 0.8em 1.2em;
  text-decoration: none;
`;

const Header = () => (
  <Container>
    <NavContainer>
      <Logo />
      <NavMenu>
        <ul>
          <li>
            <a href="#" style={{ opacity: 1, fontWeight: 'bold' }}>
              New
            </a>
          </li>
          <li>
            <a href="#">Top</a>
          </li>
          <li>
            <a href="#">Best</a>
          </li>
        </ul>
      </NavMenu>
    </NavContainer>
    <LoginButton href="#">Login</LoginButton>
  </Container>
);

export default Header;
