/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import Logo from '../Svg/logo';

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #353940;
  padding: 1em;
  justify-content: space-between;
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
`;

const NavMenu = styled.nav`
  margin-left: 1em;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    display: inline;
    margin-right: .75em;

    a {
      color: #ffffff;
      opacity: .8;
      font-size: .7em;
      font-weight: 400;
      letter-spacing: .04em;
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
  background-color: #385CF7;
  color: #ffffff;
  font-size: .75em;
  font-weight: bold;
  letter-spacing: .04em;
  padding: .8em 1.2em;
  text-decoration: none;
`;

const Header = () => (
  <Container>
    <NavContainer>
      <Logo />
      <NavMenu>
        <ul>
          <li>
            <a href="#" style={{ opacity: 1, fontWeight: 'bold' }}>New</a>
          </li>
          <li>
            <a href="#">Show</a>
          </li>
          <li>
            <a href="#">Ask</a>
          </li>
          <li>
            <a href="#">Jobs</a>
          </li>
          <li>
            <a href="#">Submit</a>
          </li>
        </ul>
      </NavMenu>
    </NavContainer>
    <LoginButton href="#">Login</LoginButton>
  </Container>
);

export default Header;
