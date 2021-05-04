import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Layout, SEO, GoBackButton } from 'components/common';
import { Project } from 'components/portfolio';

export default function PortfolioProject({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data

  return (
    <Layout>
      <Project markdownRemark={markdownRemark} />
    </Layout>
  );
}

PortfolioProject.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM YYYY")
        slug
        title
        company
        featuredImage {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, height: 350, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
        tags
      }
    }
  }
`;
