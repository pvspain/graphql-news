/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

const Title = styled.a`
  color: #34495e;
  text-decoration: none;
`;

const Url = styled.a`
  font-size: .8em;
  color: #9DA7AE;
  margin: 0 0 0 .25em;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Link = ({ author, url, description, comments, score }) => (
  <div style={{ display: 'flex', margin: '1em' }}>
    <Score score={score} />
    <div style={{ display: 'inline-flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div>
        <Title href="#">{description}</Title>
        <Url>
          ({url.replace(/(^\w+:|^)\/\//, '')})
        </Url>
      </div>
      <Meta author={author} comments={comments} />
    </div>
  </div>
);

const ScoreContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  margin: 0 1em 0 0;
`;

const ScoreTrigger = styled.div`
  font-size: .6em;
  cursor: pointer;
`;

const Arrow = styled.span`
  display: inline-block;
  color: #9DA7AE;
`;

const ScoreCount = styled.span`
  font-weight: bold;
  color: #385CF7;
  margin: .2em 0;
  text-align: center;
`;

const Score = ({ score }) => (
  <ScoreContainer>
    <ScoreTrigger>
      <Arrow style={{ color: '#385CF7' }}>▲</Arrow>
    </ScoreTrigger>
    <ScoreCount>{score}</ScoreCount>
    <ScoreTrigger>
      <Arrow>▼</Arrow>
    </ScoreTrigger>
  </ScoreContainer>
);

const MetaContainer = styled.div`
  display: flex;
  margin-top: .25em;
  font-size: .8em;
  color: #9DA7AE;

  a {
    &:hover {
      color: #385CF7;
    }
  }
`;

const Separator = styled.span`
  margin: 0 .25em;
`;

const Anchor = styled.a`
  color: inherit;
`;

const Meta = ({ author, comments }) => (
  <MetaContainer>
    <span>
      by <Anchor href="#">{author}</Anchor> 3 hours ago
    </span>
    <Separator>|</Separator>
    <span>
      <Anchor href="#">hide</Anchor>
    </span>
    <Separator>|</Separator>
    <span>
      <Anchor href="#">{comments} comments</Anchor>
    </span>
  </MetaContainer>
);

export default Link;
