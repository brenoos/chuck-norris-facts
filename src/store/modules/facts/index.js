import { createAction, createReducer } from '@reduxjs/toolkit';
import produce from 'immer';
import api from '../../../services/api';

const INITIAL_STATE = {
  categories: [],
  categoriesLoading: false,
  categoriesError: false,
  selectedCategory: '',
  joke: '',
  jokeLoading: false,
  jokeError: false,
};

export const selectCategory = createAction('@facts/SELECTED_CATEGORY');

export const fetchCategoriesRequest = createAction(
  '@facts/FETCH_CATEGORIES_REQUEST'
);
export const fetchCategoriesSuccess = createAction(
  '@facts/FETCH_CATEGORIES_SUCCESS'
);
export const fetchCategoriesFailed = createAction(
  '@facts/FETCH_CATEGORIES_FAILED'
);

export const fetchJokeRequest = createAction('@facts/FETCH_JOKE_REQUEST');
export const fetchJokeSuccess = createAction('@facts/FETCH_JOKE_SUCCESS');
export const fetchJokeFailed = createAction('@facts/FETCH_JOKE_FAILED');

export default createReducer(INITIAL_STATE, {
  [fetchCategoriesRequest]: (state) =>
    produce(state, (draft) => {
      draft.categoriesError = false;
      draft.categoriesLoading = true;
    }),
  [fetchCategoriesSuccess]: (state, { payload }) =>
    produce(state, (draft) => {
      draft.categories = payload;
      draft.categoriesLoading = false;
    }),
  [fetchCategoriesFailed]: (state) =>
    produce(state, (draft) => {
      draft.categoriesError = true;
      draft.categoriesLoading = false;
    }),
  [fetchJokeRequest]: (state) =>
    produce(state, (draft) => {
      draft.jokeError = false;
      draft.jokeLoading = true;
      draft.joke = '';
    }),
  [fetchJokeSuccess]: (state, { payload }) =>
    produce(state, (draft) => {
      draft.joke = payload;
      draft.jokeLoading = false;
    }),
  [fetchJokeFailed]: (state) =>
    produce(state, (draft) => {
      draft.jokeError = true;
      draft.jokeLoading = false;
    }),
  [selectCategory]: (state, { payload }) =>
    produce(state, (draft) => {
      draft.selectedCategory = payload;
    }),
});

export const getCategories = () => {
  return async (dispatch) => {
    dispatch(fetchCategoriesRequest());
    try {
      const { data } = await api.get('/categories');
      dispatch(fetchCategoriesSuccess(data));
    } catch (err) {
      dispatch(fetchCategoriesFailed());
    }
  };
};

export const getJoke = () => {
  return async (dispatch, getState) => {
    dispatch(fetchJokeRequest());
    try {
      const { data } = await api.get('/random', {
        params: {
          category: getState().facts.selectedCategory,
        },
      });

      dispatch(fetchJokeSuccess(data.value));
    } catch (err) {
      dispatch(fetchJokeFailed());
    }
  };
};
