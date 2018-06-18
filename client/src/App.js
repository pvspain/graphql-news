/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import Link from './components/Link';
import './index.css';

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const App = () => (
  <AppContainer>
    <Link />
  </AppContainer>
);

export default App;
