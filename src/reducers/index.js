// src/reducers/index.js
import { combineReducers } from 'redux';
import productReducer from './productReducer';   // Ensure this file exists
import categoryReducer from './categoryReducer'; // Ensure this file exists

const rootReducer = combineReducers({
  products: productReducer,
  categories: categoryReducer
});

export default rootReducer;
