import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'providers/ThemeProvider';
import { Footer } from 'components/theme';
import { Global } from './styles';
import './fonts.css';

export const Layout = ({ children, withFooter }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Global theme={theme} />
      {children}
      {withFooter && <Footer />}
    </>
  );
};

Layout.propTypes = {
  withFooter: PropTypes.bool,
};

Layout.defaultProps = {
  withFooter: false,
};
