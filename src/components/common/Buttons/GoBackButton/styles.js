import styled from 'styled-components';

export const Container = styled.a`
  position: fixed;
  z-index: 1;
  top: 5px;
  right: 5px;
`;

export const Button = styled.button`
  cursor: pointer;
  background: ${({ theme }) => (theme === 'light' ? '#eff5fb' : '#353535')};
  color: ${({ theme }) => (theme === 'light' ? '#6ea2d1' : '#a5a2a2')};
  border-radius: 3px;
  padding: 0.2rem 0.5rem;
  border: none;
  -webkit-appearance: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  box-shadow: 2px 2px 6px 0px ${({ theme }) => (theme === 'light' ? '#cce4f9' : '#505050')};

  &:hover {
    background: ${({ theme }) => (theme === 'light' ? '#f0f8ff' : '#4e4e4e')};
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    background: gray;
  }
`;
