import React from 'react';
import PropTypes from 'prop-types';
import format from 'utils/format';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import useTheme from 'hooks/useTheme';
import { Item as StyledItem } from './styles';

export const Item = (props) => {
  const { theme } = useTheme();
  const {
    node: {
      id,
      excerpt,
      frontmatter: { slug, title, date, company, featuredImage, tags },
    },
    selectedTag,
  } = props;

  const image = getImage(featuredImage);

  return (
    <StyledItem theme={theme}>
      <div className="item-title">
        <h4>
          <Link to={`/portfolio/${slug}`} className="item-link">
            {title}
          </Link>
        </h4>
        <div className="item-meta">
          <span className="item-company">{company}</span>
          <span className="item-date">{date}</span>
        </div>
        <ul className="item-tags">
          {tags.map((tag, index) => (
            <li key={index}>
              <Link
                to={`/portfolio/tags/${format.toKebabCase(tag)}`}
                className="item-tag-link"
                activeClassName="item-tag-link--selected"
                isCurrent={tag === selectedTag}
              >
                {tag}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <GatsbyImage image={image} alt={title} />
      <div className="item-excerpt">
        <p className="item-p">{excerpt}</p>
      </div>
    </StyledItem>
  );
};

Item.propTypes = {
  selectedTag: PropTypes.string,
  node: PropTypes.object,
};
