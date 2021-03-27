import React from 'react';
import { Link } from 'gatsby';
import useTheme from 'hooks/useTheme';
import { Container, Button } from './styles';

export const GoBackButton = () => {
  const { theme } = useTheme();

  return (
    <Container as={Link} to="/">
      <Button theme={theme}>Go Back</Button>
    </Container>
  );
};
