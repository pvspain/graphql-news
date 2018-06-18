/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Link from './components/Link';
import './index.css';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 560px;
  margin: 0 auto;
  background-color: white;
`;

const App = () => (
  <AppContainer>
    <Header />
    <Link />
  </AppContainer>
);

export default App;
