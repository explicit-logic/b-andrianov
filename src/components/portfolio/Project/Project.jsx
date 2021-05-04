import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import useTheme from 'hooks/useTheme';
import format from 'utils/format';
import { Link } from 'gatsby';
import { Container } from 'components/common';
import { Wrapper, Content } from './styles';

export const Project = (props) => {
  const { markdownRemark } = props;
  const {
    frontmatter: { title, date, company, tags, featuredImage },
    html,
  } = markdownRemark;
  const { theme } = useTheme();
  const image = getImage(featuredImage);

  return (
    <Wrapper as={Container}>
      <Content theme={theme}>
        <div>
          <h1 className="title">{title}</h1>
          <div className="meta">
            <span className="company">{company}</span>
            <span className="date">{date}</span>
          </div>
          <ul className="tags">
            {tags.map((tag, index) => (
              <li key={index}>
                <Link to={`/portfolio/tags/${format.toKebabCase(tag)}`} className="tag-link">
                  {tag}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <GatsbyImage image={image} alt={title} />
        <div className="content" dangerouslySetInnerHTML={{ __html: html }} />
      </Content>
    </Wrapper>
  );
};

Project.propTypes = {
  markdownRemark: PropTypes.object,
};
