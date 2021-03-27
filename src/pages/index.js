import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro } from 'components/landing';

const IndexPage = () => (
  <Layout withFooter>
    <SEO />
    <Intro />
  </Layout>
);

export default IndexPage;
