import React from 'react';
import Routes from '../../routes';

import { RootContainer, LogoRow } from './styles';

import ChuckNorris from '../../assets/chuck-norris-cartoon.png';

const Main = () => {
  return (
    <RootContainer>
      <LogoRow>
        <img src={ChuckNorris} alt="Chuck" />
        <h1>Chuck Norris Facts</h1>
      </LogoRow>

      <Routes />
    </RootContainer>
  );
};

export default Main;
