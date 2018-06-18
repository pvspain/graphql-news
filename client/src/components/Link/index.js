/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

const Title = styled.a`
  color: #34495e;
  text-decoration: none;
`;

const Url = styled.a`
  font-size: .8em;
  color: #848584;
  margin: 0 0 0 .25em;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Link = () => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <Score />
    <div style={{ display: 'inline-flex', flexDirection: 'column' }}>
      <div>
        <Title href="#">Why Skylake CPUs Are Sometimes 50% Slower</Title>
        <Url>
          (aloiskraus.wordpress.com)
        </Url>
      </div>
      <Meta />
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
  color: #848584;
`;

const ScoreCount = styled.span`
  font-weight: bold;
  color: #FF6600;
  margin: .2em 0;
`;

const Score = () => (
  <ScoreContainer>
    <ScoreTrigger>
      <Arrow style={{ color: '#FF6600' }}>▲</Arrow>
    </ScoreTrigger>
    <ScoreCount>275</ScoreCount>
    <ScoreTrigger>
      <Arrow>▼</Arrow>
    </ScoreTrigger>
  </ScoreContainer>
);

const MetaContainer = styled.div`
  display: flex;
  margin-top: .25em;
  font-size: .8em;
  color: #848584;

  a {
    &:hover {
      color: #FF6600;
    }
  }
`;

const Separator = styled.span`
  margin: 0 .25em;
`;

const Anchor = styled.a`
  color: inherit;
`;

const Meta = () => (
  <MetaContainer>
    <span>
      by <Anchor href="#">author</Anchor> 3 hours ago
    </span>
    <Separator>|</Separator>
    <span>
      <Anchor href="#">hide</Anchor>
    </span>
    <Separator>|</Separator>
    <span>
      <Anchor href="#">70 comments</Anchor>
    </span>
  </MetaContainer>
);

export default Link;
