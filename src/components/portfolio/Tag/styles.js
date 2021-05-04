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
`;
