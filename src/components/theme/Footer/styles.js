import footerIllustration from 'assets/illustrations/footer.svg';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 9rem 0 4rem;
  position: fixed;
  bottom: 0px;
  right: 0px;
  width: 100%;
  background-image: url(${footerIllustration});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;

  /* @media (max-width: 1960px) {
    padding: 14rem 0 4rem;
  } */
`;

export const Flex = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  @media (max-width: 680px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;

export const Links = styled.div`
  display: flex;
  align-items: center;

  a {
    margin: 0 0.5rem;

    img {
      margin: 0;
    }

    /* &:first-child,
    &:last-child {
      margin: 0;
    } */
  }
`;
