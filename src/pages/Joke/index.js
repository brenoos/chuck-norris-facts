import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux';
import { Typography, CircularProgress } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { getJoke } from '../../store/modules/facts';

import {
  StyledCard as Card,
  StyledCardActions as CardActions,
  JokeContainer,
} from './styles';

const Joke = () => {
  const dispatch = useDispatch();

  const { selectedCategory, joke, loading, error } = useSelector(
    ({ facts }) => ({
      selectedCategory: facts.selectedCategory,
      joke: facts.joke,
      loading: facts.jokeLoading,
      error: facts.jokeError,
    })
  );

  useEffect(() => {
    if (selectedCategory) {
      dispatch(getJoke());
    }
  }, [dispatch, selectedCategory]);

  return (
    <Card raised>
      <Typography variant="subtitle1" component="p">
        {selectedCategory
          ? `You have selected: ${selectedCategory}`
          : 'Category not selected'}
      </Typography>
      <JokeContainer>
        <Typography variant="h6">
          {!selectedCategory &&
            'Back to categories to choose one and see a joke'}
          {loading && <CircularProgress />}
          {!loading && error && 'Unable to connect to server'}
          {!loading && joke}
        </Typography>
      </JokeContainer>

      <CardActions>
        <Link to="/">
          <Button size="small" color="primary">
            Back To Categories
          </Button>
        </Link>

        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(getJoke())}
        >
          Another Joke
        </Button>
      </CardActions>
    </Card>
  );
};

export default Joke;
