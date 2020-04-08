import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { getCategories, selectCategory } from '../../store/modules/facts';

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
    if (categories.length <= 0 || !categories) {
      dispatch(getCategories());
    }
  }, [dispatch, categories]);

  return (
    <Paper>
      <Typography variant="subtitle1" component="p">
        Select an category to view a joke
      </Typography>

      {loading && <CircularProgress />}

      {!loading && !error && (
        <ul>
          {categories.map((category) => (
            <Link to="/joke" key={category}>
              <Typography
                variant="body1"
                component="li"
                onClick={() => {
                  dispatch(selectCategory(category));
                }}
              >
                {category}
              </Typography>
            </Link>
          ))}
        </ul>
      )}

      {error && <p> Unable to retrieve categories</p>}
    </Paper>
  );
};

export default Categories;
