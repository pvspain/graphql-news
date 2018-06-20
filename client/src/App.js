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
  width: 800px;
  margin: 0 auto;
  background-color: white;
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    border-bottom: 1px solid #f2f3f5;

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
        {allLinks
          ? allLinks.map(link => (
              <li>
                <Link
                  key={link._id}
                  _id={link._id}
                  author={link.author ? link.author : 'anonymous'}
                  url={link.url}
                  description={link.description}
                  comments={link.comments.length}
                />
              </li>
            ))
          : null}
      </LinkList>
      <Footer />
    </AppContainer>
  );
};

export default graphql(gql`
  {
    allLinks(first: 5, skip: 0) {
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
