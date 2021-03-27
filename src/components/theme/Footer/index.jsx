import React from 'react';
import { Container } from 'components/common';
import telegramIcon from 'assets/icons/telegram.svg';
import githubIcon from 'assets/icons/github.svg';
import { Wrapper, Flex, Links } from './styles';

export const Footer = () => (
  <Wrapper>
    <Flex as={Container}>
      <Links>
        <a href="https://t.me/b_andrianov" target="_blank" rel="noopener noreferrer" aria-label="follow me on Telegram">
          <img width="24" src={telegramIcon} alt="Telegram" />
        </a>
        <a
          href="https://github.com/maglifter"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="follow me on Github"
        >
          <img width="24" src={githubIcon} alt="Github" />
        </a>
      </Links>
    </Flex>
  </Wrapper>
);
