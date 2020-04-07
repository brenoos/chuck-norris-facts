import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCategoriesRequest } from '../../store/modules/facts';

import { RootContainer, StyledPaper as Paper, LogoRow } from './styles';

import ChuckNorris from '../../assets/chuck-norris-cartoon.png';

export const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesRequest());
  });

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
