import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, GoBackButton } from 'components/common';
import format from 'utils/format';
import { Wrapper, Content } from './styles';
import useProjects from './useProjects';

export const Main = () => {
  const { theme } = useContext(ThemeContext);
  const {
    allMarkdownRemark: { edges },
  } = useProjects();

  return (
    <>
      <GoBackButton />
      <Wrapper as={Container}>
        <Content theme={theme}>
          {edges.map(
            ({
              node: {
                id,
                excerpt,
                frontmatter: { slug, title, date, company, featuredImage, tags },
              },
            }) => {
              const image = getImage(featuredImage);

              return (
                <div key={id} className="item">
                  <div className="item-title">
                    <h4>
                      <Link to={slug} className="item-link">{title}</Link>
                    </h4>
                    <div className="item-meta">
                      <span className="item-company">{company}</span>
                      <span className="item-date">{date}</span>
                    </div>
                    <ul className="item-tags">
                      {tags.map((tag, index) => (
                        <li key={index}>
                          <Link to={`/portfolio/tags/${format.toKebabCase(tag)}`}>{tag}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <GatsbyImage image={image} alt={title} />
                  <div className="item-excerpt">
                    <p className="item-p">{excerpt}</p>
                  </div>
                </div>
              );
            }
          )}
        </Content>
      </Wrapper>
    </>
  );
};
