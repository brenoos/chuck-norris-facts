import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../store/modules/facts';

import {
  RootContainer,
  StyledPaper as Paper,
  LogoRow,
  StyledCircularProgress as CircularProgress,
} from './styles';

import ChuckNorris from '../../assets/chuck-norris-cartoon.png';

export const Main = () => {
  const dispatch = useDispatch();

  const { categories, loading, error } = useSelector(({ facts }) => ({
    categories: facts.categories,
    loading: facts.categoriesLoading,
    error: facts.categoriesError,
  }));

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <RootContainer>
      <LogoRow>
        <img src={ChuckNorris} alt="Chuck" />
        <h1>Chuck Norris Facts</h1>
      </LogoRow>

      <Paper>
        <p>Select an category to view a joke</p>
        {loading && <CircularProgress />}

        {!loading && !error && (
          <ul>
            {categories.map((category) => (
              <li key={category}>{category}</li>
            ))}
          </ul>
        )}

        {error && <p> Unable to retrieve categories</p>}
      </Paper>
    </RootContainer>
  );
};
