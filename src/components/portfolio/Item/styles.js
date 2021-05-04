import styled from 'styled-components';

export const Item = styled.div`
  margin-bottom: 1.5rem;

  .item-title {
    margin-bottom: 1rem;
  }

  .item-link {
    color: ${({ theme }) => (theme === 'light' ? '#4387c3' : '#b17acc')};
    text-decoration: none;
    &:hover {
      color: ${({ theme }) => (theme === 'light' ? '#1b81da' : '#9059ab')};
      text-decoration: underline;
    }
  }

  .item-date {
    font-size: 10pt;
    color: ${({ theme }) => (theme === 'light' ? '#777777' : '#c7c1c1')};
  }

  .item-company {
    font-size: 11pt;
    color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
  }

  .item-company + .item-date {
    margin-left: 4px;
    &:before {
      content: '|';
      position: relative;
      right: 2px;
      font-size: 12pt;
      color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
    }
  }

  .item-excerpt {
    padding: 6px;
  }

  .item-p {
    margin-bottom: 1px;
  }

  .item-tags {
    padding: 0;
    list-style-type: none;
    margin-left: 0;
    margin-top: 8px;
    width: auto;
    height: 10px;
  }

  .item-tags > li {
    float: left;
    zoom: 1;
    margin-bottom: 0;
  }

  .item-tag-link {
    text-align: center;
    padding: 3px;
    text-decoration: none;
    border-radius: 3px;
    margin: 2px;
    font-size: 14px;
    color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
    background: ${({ theme }) => (theme === 'light' ? '#e6e6e6' : '#3a3a3a')};
  }

  .item-tag-link--selected {
    background: ${({ theme }) => (theme === 'light' ? '#4387c3' : '#b17acc')};
    color: #ffffff;
  }
`;
