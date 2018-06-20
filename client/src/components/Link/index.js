import React from 'react';
import styled from 'styled-components';
import Score from './Score';

const Title = styled.a`
  color: #34495e;
  text-decoration: none;
`;

const Url = styled.a`
  color: #9da7ae;
  font-size: 0.8em;
  margin: 0 0 0 0.25em;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Link = ({ _id, author, url, description, comments }) => (
  <div style={{ display: 'flex', margin: '1em' }}>
    <Score _id={_id} />
    <div style={{ display: 'inline-flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div>
        <Title href="#">{description}</Title>
        <Url>({url.replace(/(^\w+:|^)\/\//, '')})</Url>
      </div>
      <Meta author={author} comments={comments} />
    </div>
  </div>
);

const MetaContainer = styled.div`
  color: #9da7ae;
  display: flex;
  font-size: 0.8em;
  margin-top: 0.25em;

  a {
    &:hover {
      color: #385cf7;
    }
  }
`;

const Separator = styled.span`
  margin: 0 0.25em;
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
