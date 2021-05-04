import { useStaticQuery, graphql } from 'gatsby';

function useProjects() {
  return useStaticQuery(
    graphql`
      {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
          edges {
            node {
              ...projectFields
            }
          }
        }
      }
    `
  );
}

export default useProjects;
