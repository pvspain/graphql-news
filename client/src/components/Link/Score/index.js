import React from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { Subscription } from 'react-apollo';

const ScoreContainer = styled.div`
  align-items: center;
  display: inline-flex;
  flex-direction: column;
  margin: 0 1em 0 0;
`;

const ScoreTrigger = styled.div`
  cursor: pointer;
  font-size: 0.6em;
`;

const Arrow = styled.span`
  color: #9da7ae;
  display: inline-block;
`;

const ScoreCount = styled.span`
  color: #385cf7;
  font-weight: bold;
  margin: 0.2em 0;
  text-align: center;
`;

const GET_DEFAULT_SCORE = gql`
  query score($_id: String!) {
    link(_id: $_id) {
      score
    }
  }
`;

const GET_SCORE = gql`
  subscription score($_id: String!) {
    score(_id: $_id) {
      score
    }
  }
`;

const Score = ({ _id }) => (
  <Subscription subscription={GET_SCORE} variables={{ _id }}>
    {({ loading, error, data }) => {
      if (loading) return null;
      if (error) return `Error!: ${error}`;
      return (
        <ScoreContainer>
          <ScoreTrigger>
            <Arrow style={{ color: '#385CF7' }}>▲</Arrow>
          </ScoreTrigger>
          <ScoreCount>{data.score}</ScoreCount>
          <ScoreTrigger>
            <Arrow>▼</Arrow>
          </ScoreTrigger>
        </ScoreContainer>
      );
    }}
  </Subscription>
);

export default Score;
