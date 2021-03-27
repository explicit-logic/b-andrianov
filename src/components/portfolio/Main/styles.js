import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-bottom: 4rem;
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  ul {
    list-style: none;
  }

  h4 {
    margin-bottom: 0.15rem;
    font-size: 18pt;
    font-weight: normal;

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }
  }

  .item {
    margin-bottom: 1.5rem;
  }

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
      color: #ffffff;
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

  .item-tags > li > a {
    text-align: center;
    padding: 3px;
    text-decoration: none;
    border-radius: 3px;
    margin: 2px;
    font-size: 14px;
    color: #fff;
    background: #3a3a3a;
  }
`;
