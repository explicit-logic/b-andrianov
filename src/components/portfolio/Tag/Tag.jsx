import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'components/common';
import useTheme from 'hooks/useTheme';
import { Wrapper, Content } from './styles';
import { Item } from '../Item';

export const Tag = (props) => {
  const { edges, selectedTag } = props;
  const { theme } = useTheme();

  return (
    <Wrapper as={Container}>
      <Content theme={theme}>
        {edges.map(({ node }) => (
          <Item key={node.id} node={node} selectedTag={selectedTag} />
        ))}
      </Content>
    </Wrapper>
  );
};

Tag.propTypes = {
  selectedTag: PropTypes.string,
  edges: PropTypes.object,
};
