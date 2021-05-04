import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import { Layout, SEO, GoBackButton } from 'components/common';
import { Tag } from 'components/portfolio';

const PortfolioTag = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  // const tagHeader = `${totalCount} post${totalCount === 1 ? '' : 's'} tagged with "${tag}"`;

  return (
    <Layout>
      <SEO />
      <GoBackButton />
      <Tag edges={edges} selectedTag={tag} />
    </Layout>
  );
};

PortfolioTag.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
};

export default PortfolioTag;

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 50
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          ...projectFields
        }
      }
    }
  }
`;
