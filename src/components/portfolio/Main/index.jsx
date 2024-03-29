import React from 'react';
import { Container } from 'components/common';
import useTheme from 'hooks/useTheme';
import useProjects from './useProjects';
import { Wrapper, Content } from './styles';
import { Item } from '../Item';

export const Main = () => {
  const { theme } = useTheme();
  const {
    allMarkdownRemark: { edges },
  } = useProjects();

  return (
    <Wrapper as={Container}>
      <Content theme={theme}>
        {edges.map(({ node }) => (
          <Item key={node.id} node={node} />
        ))}
      </Content>
    </Wrapper>
  );
};
