const path = require('path');
const format = require('./src/utils/format.js');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const portfolioProjectTemplate = require.resolve(`./src/templates/PortfolioProject.js`);
  const portfolioTagTemplate = require.resolve('./src/templates/PortfolioTag.js');

  return graphql(`
    {
      items: allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
        edges {
          node {
            frontmatter {
              slug
              tags
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark(limit: 1000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.items.edges.forEach(({ node }) => {
      createPage({
        path: `/portfolio/${node.frontmatter.slug}`,
        component: portfolioProjectTemplate,
        context: {
          // additional data can be passed via context
          slug: node.frontmatter.slug,
        },
      });
    });

    // Make tag pages
    result.data.tagsGroup.group.forEach((tag) => {
      createPage({
        path: `/portfolio/tags/${format.toKebabCase(tag.fieldValue)}/`,
        component: portfolioTagTemplate,
        context: {
          tag: tag.fieldValue,
        },
      });
    });
  });
};
