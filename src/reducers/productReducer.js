const initialState = {
  products: [],
  loading: false,
  error: null,
  searchTerm: '',
  totalCount: 0, // Add totalCount to track total number of products
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_PRODUCTS_SUCCESS':
      return {
        ...state,
        loading: false,
        products: action.payload.products, // Set products
        totalCount: action.payload.totalCount, // Set total count
      };
    case 'CLEAR_PRODUCTS':
      return { ...state, products: [], totalCount: 0 }; // Clear products and reset total count
    case 'FETCH_PRODUCTS_FAILURE':
      return { ...state, loading: false, error: action.payload };
    case 'SET_SEARCH_TERM':
      return { ...state, searchTerm: action.payload }; // Update the search term in the state
    default:
      return state;
  }
};

export default productReducer;
