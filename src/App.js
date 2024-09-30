import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCategories } from './actions/categoryActions';
import CategoryList from './components/CategoryList';
import ProductList from './components/ProductList';
import SearchBar from './components/SearchBar';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div>
      <SearchBar />
      <CategoryList />
      <ProductList />
    </div>
  );
};

export default App;
