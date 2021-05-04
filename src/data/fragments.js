import { graphql } from 'gatsby';

export const projectFields = graphql`
  fragment projectFields on MarkdownRemark {
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
`;
