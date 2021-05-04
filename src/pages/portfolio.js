import React from 'react';
import { Layout, SEO, GoBackButton } from 'components/common';
import { Main } from 'components/portfolio';

const PortfolioPage = () => (
  <Layout>
    <SEO />
    <GoBackButton />
    <Main />
  </Layout>
);

export default PortfolioPage;
