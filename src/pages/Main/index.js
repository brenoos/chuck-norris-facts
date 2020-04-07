import React from 'react';

import { RootContainer, StyledPaper as Paper, LogoRow } from './styles';

import ChuckNorris from '../../assets/chuck-norris-cartoon.png';

export const Main = () => {
  return (
    <RootContainer>
      <LogoRow>
        <img src={ChuckNorris} alt="Chuck" />
        <h1>Chuck Norris Facts</h1>
      </LogoRow>

      <Paper />
    </RootContainer>
  );
};
