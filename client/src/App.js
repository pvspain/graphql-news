/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
// Components
import Header from './components/Header';
import Link from './components/Link';
import Footer from './components/Footer';
// Base styles
import './index.css';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 800px;
  margin: 0 auto;
  background-color: white;
`;

const App = () => (
  <AppContainer>
    <Header />
    <Link />
    <Footer />
  </AppContainer>
);

export default App;
