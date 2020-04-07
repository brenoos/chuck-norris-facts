import { createAction, createReducer } from '@reduxjs/toolkit';
import produce from 'immer';

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
      draft.categoriesLoading = true;
      draft.categoriesError = false;
    }),
});
