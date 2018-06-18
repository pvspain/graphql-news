// /* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const Wrapper = styled.footer`
  background-color: #BDC9D2;
  color: #ffffff;
  font-size: .7em;
  font-weight: bold;
  letter-spacing: .06em;
  padding: 1em;
  text-align: center;

  a {
    display: inline-block;
    background-color: #385CF7;
    color: inherit;
    text-decoration: none;
    padding: .8em 1.2em;
  }
`;

const Footer = (allLinks) => (
  <div>
    {allLinks ? (
      <Wrapper>
        <a href="#" style={{ color: '#BDC9D2', backgroundColor: '#95A3AD' }}>
          Prev
        </a>
        <span style={{ display: 'inline-block', margin: '0 1em' }}>
          1/{Math.round(allLinks.length / 8).toString()}
        </span>
        <a href="#">Next</a>
      </Wrapper>
    ) : null}
  </div>
);

export default Footer;
