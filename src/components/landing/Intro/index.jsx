import React from 'react';
import Typist from 'react-typist';
import useTheme from 'hooks/useTheme';
import { Container, BaseButton } from 'components/common';
import { resumeLink } from 'data/config';
import { Wrapper, IntroWrapper, Details, JobPosition as StyledJobPosition } from './styles';

const jobPositionTheme = {
  dark: 'Node.js',
  light: 'React',
};

const JobPosition = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <StyledJobPosition theme={theme} onClick={() => toggleTheme()}>
      {jobPositionTheme[theme]}
    </StyledJobPosition>
  );
};

export const Intro = () => {
  const { theme } = useTheme();

  return (
    <Wrapper>
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <Typist cursor={{ show: false }} /* avgTypingDelay={} */>
            <h1>Hi There!</h1>
            <Typist.Delay ms={500} />
            <h4>
              I’m Bohdan Andrianov and I’m a <JobPosition /> developer
            </h4>
          </Typist>
          <BaseButton
            onClick={() => {
              const win = window.open(resumeLink, '_blank');
              win.focus();
            }}
          >
            My Resume
          </BaseButton>
        </Details>
      </IntroWrapper>
    </Wrapper>
  );
};
