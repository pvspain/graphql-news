/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
  background-color: #BDC9D2;
  color: #ffffff;
  font-size: .8em;
  font-weight: bold;
  letter-spacing: .06em;
  padding: 1em;
  text-align: center;

  a {
    display: inline-block;
    background-color: #E83DC9;
    color: inherit;
    text-decoration: none;
    text-transform: uppercase;
    padding: .8em 1.2em;
  }
`;

const Footer = () => (
  <Wrapper>
    <a href="#" style={{ color: '#BDC9D2', backgroundColor: '#9DA7AE' }}>Prev</a>
    <span style={{ display: 'inline-block', margin: '0 1em' }}>1/25</span>
    <a href="#">Next</a>
  </Wrapper>
);

export default Footer;