import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-bottom: 4rem;
`;

export const IntroWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 36pt;
    color: ${({ theme }) => (theme === 'light' ? '#212121' : '#fff')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }

    @media (max-width: 680px) {
      font-size: 30pt;
    }
  }

  h4 {
    margin-bottom: 2.5rem;
    font-size: 32pt;
    font-weight: normal;
    color: ${({ theme }) => (theme === 'light' ? '#707070' : '#e6e6e6')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }

    @media (max-width: 680px) {
      font-size: 26pt;
    }
  }
`;

export const JobPosition = styled.span`
  padding: 1px;
  background-position: 0px 1.13em;
  border-radius: 2px;
  background-repeat: repeat-x;
  background-size: 6px 3px;
  transition: background-color 0.2s ease-in;
  color: ${({ theme }) => (theme === 'light' ? '#212121' : '#ffffff')};
  background-image: linear-gradient(
    to right,
    ${({ theme }) => (theme === 'light' ? '#0074d9' : '#7ad272')} 50%,
    transparent 50%
  );
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => (theme === 'light' ? '#f8f7ff' : '#383737')};
  }
`;
