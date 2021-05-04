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

  h4 {
    margin-bottom: 0.15rem;
    font-size: 18pt;
    font-weight: normal;

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }
  }

  .title {
    margin-bottom: 0.1rem;
  }

  .meta {
    margin-bottom: 0.5rem;
  }

  .date {
    font-size: 10pt;
    color: ${({ theme }) => (theme === 'light' ? '#777777' : '#c7c1c1')};
  }

  .company {
    font-size: 11pt;
    color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
  }

  .company + .date {
    margin-left: 4px;
    &:before {
      content: '|';
      position: relative;
      right: 2px;
      font-size: 12pt;
      color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
    }
  }

  .tags {
    padding: 0;
    list-style-type: none;
    margin-left: 0;
    width: auto;
    height: 10px;
  }

  .tags > li {
    float: left;
    zoom: 1;
    margin-bottom: 0;
  }

  .tag-link {
    text-align: center;
    padding: 3px;
    text-decoration: none;
    border-radius: 3px;
    margin: 2px;
    font-size: 14px;
    color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
    background: ${({ theme }) => (theme === 'light' ? '#e6e6e6' : '#3a3a3a')};
  }

  .tag-link--selected {
    background: ${({ theme }) => (theme === 'light' ? '#4387c3' : '#b17acc')};
    color: #ffffff;
  }
`;
