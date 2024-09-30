import axios from 'axios';

export const fetchCategories = () => async (dispatch) => {
  try {
    dispatch({ type: 'FETCH_CATEGORIES_REQUEST' });
    const res = await axios.get('https://dummyjson.com/products/categories');
    dispatch({ type: 'FETCH_CATEGORIES_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'FETCH_CATEGORIES_FAILURE', payload: error.message });
  }
};

export const setSelectedCategory = (category) => ({
  type: 'SET_SELECTED_CATEGORY',
  payload: category
});
