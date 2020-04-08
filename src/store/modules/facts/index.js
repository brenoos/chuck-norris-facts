import { createAction, createReducer } from '@reduxjs/toolkit';
import produce from 'immer';
import api from '../../../services/api';

const INITIAL_STATE = {
  categories: [],
  categoriesLoading: false,
  categoriesError: false,
  selectedCategory: '',
};

export const fetchCategoriesRequest = createAction(
  '@facts/FETCH_CATEGORIES_REQUEST'
);
export const fetchCategoriesSuccess = createAction(
  '@facts/FETCH_CATEGORIES_SUCCESS'
);
export const fetchCategoriesFailed = createAction(
  '@facts/FETCH_CATEGORIES_FAILED'
);

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
});

export const getCategories = () => {
  return async (dispatch) => {
    dispatch(fetchCategoriesRequest());
    try {
      const { data } = await api.get('categories');
      dispatch(fetchCategoriesSuccess(data));
    } catch (err) {
      dispatch(fetchCategoriesFailed());
    }
  };
};
