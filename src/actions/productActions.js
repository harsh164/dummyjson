import axios from 'axios';


export const setSearchTerm = (searchTerm) => {
  return {
    type: 'SET_SEARCH_TERM',
    payload: searchTerm,
  };
};


export const clearProducts = () => {
  return {
    type: 'CLEAR_PRODUCTS',
  };
};


export const fetchProducts = (category = '', page = 1, limit = 10, search = '') => async (dispatch) => {
  try {
    dispatch({ type: 'FETCH_PRODUCTS_REQUEST' });

  
    const skip = (page - 1) * limit;

   
    let url = 'https://dummyjson.com/products';

   
    if (category) {
      url = `https://dummyjson.com/products/category/${category}`;
    }

 
    const params = new URLSearchParams({
      limit: limit,
      skip: skip,
    });


    if (search) {
      params.append('q', search);
    }

    const response = await axios.get(`${url}?${params.toString()}`);

    const products = response.data.products || [];
    const totalCount = response.data.total; 


    dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: { products, totalCount } });
  } catch (error) {
    dispatch({ type: 'FETCH_PRODUCTS_FAILURE', payload: error.message });
  }
};
