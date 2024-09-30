const initialState = {
    categories: [],
    loading: false,
    selectedCategory: '',
    error: null,
  };
  
  const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_CATEGORIES_REQUEST':
        return { ...state, loading: true };
      case 'FETCH_CATEGORIES_SUCCESS':
        return { ...state, loading: false, categories: action.payload };
      case 'FETCH_CATEGORIES_FAILURE':
        return { ...state, loading: false, error: action.payload };
      case 'SET_SELECTED_CATEGORY':
        return { ...state, selectedCategory: action.payload };
      default:
        return state;
    }
  };
  
  export default categoryReducer;
  