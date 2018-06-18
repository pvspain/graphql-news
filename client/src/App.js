/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
// Components
import Header from './components/Header';
import Link from './components/Link';
import Footer from './components/Footer';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 800px;
  margin: 0 auto;
  background-color: white;
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    border-bottom: 1px solid #F2F3F5;

    &:last-child {
      border-bottom: 0;
    }
  }
`;

const App = ({ data: { allLinks } }) => {
  return (
    <AppContainer>
      <Header />
      <LinkList>
        {
        allLinks ? allLinks.map(link => (
          <li>
            <Link
              author={link.author ? link.author : 'anonymous'}
              url={link.url}
              description={link.description}
              comments={link.comments.length}
              score={link.score}
            />
            </li>
          )) : null
        }
      </LinkList>
      <Footer />
    </AppContainer>
  )
};

export default graphql(gql`
  {
    allLinks(first:  8, skip: 0) {
      _id
      url
      description
      score
      comments {
        _id
      }
    }
  }
`)(App);
