import { useStaticQuery, graphql } from 'gatsby';

function useProjects() {
  return useStaticQuery(
    graphql`
      {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
          edges {
            node {
              id
              excerpt
              frontmatter {
                slug
                title
                date(formatString: "MMMM YYYY")
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
        }
      }
    `
  );
}

export default useProjects;
