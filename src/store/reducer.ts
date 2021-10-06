import { combineReducers } from 'redux';
import categoriesReducer from './modules/categories/reducer';
import quoteReducer from './modules/quote/reducer';

/**
 * This code combines all app reducers.
 */
export default combineReducers({
  categories: categoriesReducer,
  quote: quoteReducer,
});
