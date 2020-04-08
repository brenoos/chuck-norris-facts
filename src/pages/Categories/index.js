import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { getCategories } from '../../store/modules/facts';

import {
  StyledPaper as Paper,
  StyledCircularProgress as CircularProgress,
} from './styles';

const Categories = () => {
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
    <Paper>
      <p>
        <Typography variant="subtitle1">
          Select an category to view a joke
        </Typography>
      </p>
      {loading && <CircularProgress />}

      {!loading && !error && (
        <ul>
          {categories.map((category) => (
            <li key={category}>
              <Typography variant="body1" component="span">
                {category}
              </Typography>
            </li>
          ))}
        </ul>
      )}

      {error && <p> Unable to retrieve categories</p>}
    </Paper>
  );
};

export default Categories;
