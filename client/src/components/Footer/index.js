import React from 'react';
import styled from 'styled-components';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const Wrapper = styled.footer`
  background-color: #bdc9d2;
  color: #ffffff;
  font-size: 0.7em;
  font-weight: bold;
  letter-spacing: 0.06em;
  padding: 1em;
  text-align: center;

  a {
    background-color: #385cf7;
    color: inherit;
    display: inline-block;
    padding: 0.8em 1.2em;
    text-decoration: none;
  }
`;

const Footer = ({ data: { allLinks } }) => (
  <div>
    {allLinks ? (
      <Wrapper>
        <a href="#" style={{ color: '#BDC9D2', backgroundColor: '#95A3AD' }}>
          Prev
        </a>
        <span style={{ display: 'inline-block', margin: '0 1em' }}>
          1/{Math.round(allLinks.length / 5).toString()}
        </span>
        <a href="#">Next</a>
      </Wrapper>
    ) : null}
  </div>
);

export default graphql(gql`
  {
    allLinks {
      _id
    }
  }
`)(Footer);
